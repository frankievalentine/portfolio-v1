module.exports = {
  siteMetadata: {
    title: 'Frankie Valentine - Valentine Dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-126823604-1',
      },
    },
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Frankie Valentine Portfolio',
        short_name: 'fvportfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
