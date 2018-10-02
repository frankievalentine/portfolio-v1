module.exports = {
  siteMetadata: {
    title: 'Frankie Valentine - Valentine Dev',
  },
  plugins: [
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
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'vq4hg572zgbu',
        accessToken: 'd5ad19eba399477704d1b3c567b84b8a221d25cd7aa28d700c2ea447cfd98851',
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
  ],
}
