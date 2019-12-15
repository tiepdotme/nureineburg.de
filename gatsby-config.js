const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Kinh đô mẹ`,
    description: `Hokage Homemade Solar and free energy`,
    author: `@alexanderhorl`,
    socialLinks: [
      {
        name: 'Facebook',
        link: 'https://facebook.com/dehokage'
      }
    ],
    primaryNav: [
      {
        name: 'Sản phẩm',
        link: '/sanpham'
      },
      {
        name: 'Über Uns',
        link: '/ueber-uns',
      },
      {
        name: 'Kontakt',
        link: '/kontakt',
      },
    ],
    secondaryNav: [
      {
        name: 'Versand',
        link: '/versand'
      },
      {
        name: 'Nachhaltigkeit',
        link: '/nachhaltigkeit'
      },
      {
        name: 'Pflegeanleitung',
        link: '/pflegeanleitung'
      },
      {
        name: 'Größentabelle',
        link: '/groesentabelle'
      },
      {
        name: 'Impressum',
        link: '/impressum',
      },
      {
        name: 'Datenschutzerklärung',
        link: '/datenschutzerklaerung',
      },
      {
        name: 'Widerrufsbelehrung',
        link: '/widerrufsbelehrung',
      },
      {
        name: 'AGB',
        link: '/agb'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        verbose: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Old Standard TT', 'Roboto']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-IDHERE-1",
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
