---
slug: test-execution-time-in-node
title: Test execution time in node
date: '2020-12-24'
spoiler: How we can test execution time in NodeJS.
featuredImage: racing.jpg
featuredImageDescription: a running group
photoBy: jon_chng
---

I have been fine tuning AWS Lambda with my friend Franco.  
The concern is not only peformance, but also costs, since [charges are made per execution time](https://aws.amazon.com/lambda/pricing/).  
One of the common improvements is to make sure that async IO events like queries or requests are parallelized.  
Imagine the following scenario, you're executing 3 independent query and awaiting all three of them.  

```js
const handler = async () => {
  await executeQuery1() // Takes 5 seconds
  await executeQuery2() // Takes 5 seconds
  await executeQuery3() // Takes 5 seconds
                        // Total time 15 seconds
}
```

The problem is that those query are not running in parallel, luckily JavaScript handles very well this scenario.  
The code needs to change to something like this to achieve parallelization.

```js
const handler = async () => {
  await Promise.all([
    executeQuery1() // Takes 5 seconds
    executeQuery2() // Takes 5 seconds
    executeQuery3() // Takes 5 seconds
  ])                // Total time (around) 5 seconds!
}
```

The final piece is making sure that the implementation doesn't regress by writing a unit test.

```js
import { performance } from 'perf_hooks'
import { handler } from '../handler'
import * as queries from '../fake-query'

describe('handler', () => {
  afterEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
    jest.restoreAllMocks()
  })

  describe('with mocking', () => {
    it('runs query in parallels', async () => {
      const mock = jest.spyOn(queries, 'fakeQuery')
  
      mock.mockImplementation(async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, 1000)
        })
      })
  
      const start = performance.now()
  
      await handler()
  
      const end = performance.now()
  
      expect(end - start).toBeGreaterThan(1000)
      expect(end - start).toBeLessThan(1500)
    })
  })
})
```

This test contains a mock example, because you don't want your query or request to execute for real (or maybe you do if you are writing integration tests).  
Mocking gives you also the possibility of changing the execution time, by using `setTimeout` in the mock implementation.  
[Here you can find a repository](https://github.com/giacomorebonato/query-timings) with all the code and test execution with TypeScript and Jest.
