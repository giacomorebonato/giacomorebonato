import { AppProps } from 'next/app'
import '../styles/globals.css'
const App = ({ Component, pageProps, router }: AppProps) => (
  <Component {...pageProps} key={router.route} />
)

export default App
