module.exports = {
  siteMetadata: {
    title: `Public Portals`,
    description: `Public Portals are a decentralized file sharing and content distribution protocol.`,
    author: `scpcorp`,
    siteUrl: `https://scp.techandsupply.ca`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Public Portal`,
        short_name: `scpportal`,
        start_url: `/`,
        background_color: `#f1f7f2`,
        theme_color: `#f1f7f2`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
};
