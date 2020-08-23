module.exports = {
  siteMetadata: {
    title: 'Giacomo Rebonato',
    description: 'Information about Giacomo Rebonato',
    author: 'Giacomo Rebonato'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/index.css']
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui'
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'build-javascript'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/']
      }
    }
  ]
}
