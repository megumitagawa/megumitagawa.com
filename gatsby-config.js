module.exports = {
  siteMetadata: {
    title: `megumi tagawa - 田川めぐみ`,
    description: `The official website of Megumi TAGAWA - 田川めぐみオフィシャルウェブサイト`,
    author: `@dsktschy`,
    url: `https://megumitagawa.com`
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `megumi tagawa`,
        short_name: `megumitagawa`,
        start_url: `.`,
        background_color: `#f4f6f3`,
        theme_color: `#d8ded3`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-svg-sprite`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
