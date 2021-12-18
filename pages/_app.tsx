import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { customTheme } from '../lib/custom-theme'

const App = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider theme={customTheme}>
    <Component {...pageProps} key={router.route} />
  </ChakraProvider>
)

export default App
