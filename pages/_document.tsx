import { ColorModeScript } from '@chakra-ui/react'
import { cache } from '@emotion/css'
import createEmotionServer from '@emotion/server/create-instance'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React from 'react'
import { Favicons } from '../components/Favicons'
import { customTheme } from '../lib/custom-theme'

const renderStatic = async (html: string) => {
  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?')
  }
  const { extractCritical } = createEmotionServer(cache)
  const { ids, css } = extractCritical(html)

  return { html, ids, css }
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage()
    const { css, ids } = await renderStatic(page.html)
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <Html lang='en'>
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
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={customTheme.config.initialColorMode}
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
