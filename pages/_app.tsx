import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import { AnimatePresence } from 'framer-motion'
import { GlobalStyles } from 'twin.macro'

const App = ({ Component, pageProps, router }) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  </CacheProvider>
)

export default App
