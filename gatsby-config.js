module.exports = {
  siteMetadata: {
    title: `Go Up`,
    description: ``,
    author: ``,
    siteUrl: `https://goup26.now.sh/`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/src/uploads`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `26 Go Up Moments`,
        short_name: `26 Go Up`,
        start_url: `/`,
        background_color: `#f2f2f2`,
        theme_color: `#afc253`,
        display: `26 Go Up Moments`,
        icon: `src/images/goup-logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
