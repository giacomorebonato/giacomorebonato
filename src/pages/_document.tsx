import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

import { Favicons } from '../components/favicons'
import { getTheme } from '../lib/get-theme'
export default class MyDocument extends Document {
  render() {
    const theme = getTheme()

    return (
      <Html lang='en' data-theme={theme}>
        <Head>
          <Favicons />
          <link rel='apple-touch-icon' href='/favicon/ms-icon-144x144.png' />
          <link rel='manifest' href='/favicon/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta
            name='msapplication-TileImage'
            content='/favicon/ms-icon-144x144.png'
          />

          <meta name='theme-color' content='#ffffff' />
          <Script
            id='load-theme'
            strategy='beforeInteractive'
            src='/js/load-theme.js'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
