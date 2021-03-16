import { extractCritical } from '@emotion/server'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import 'twin.macro'
import { Favicons } from '../components/Favicons'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const page = await ctx.renderPage()
    const styles = extractCritical(page.html)

    return { ...initialProps, ...page, ...styles }
  }

  render() {
    const props = this.props as any

    return (
      <Html lang='en'>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              console.log('First page load')
              const html = document.getElementsByTagName('html')[0]
              
              if (localStorage.darkMode === 'true') {
                html.classList.add('dark')
              }
            `,
            }}
          />
          <style
            data-emotion-css={props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: props.css }}
          />
          <Favicons />
          <link rel='manifest' href='/favicon/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta
            name='msapplication-TileImage'
            content='/favicon/ms-icon-144x144.png'
          />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body tw='bg-white dark:bg-gray-800 transition-colors duration-300'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
