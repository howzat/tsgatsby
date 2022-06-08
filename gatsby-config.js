module.exports = {
  siteMetadata: {
    title: `Toldspaces`,
    siteUrl: `https://www.toldspaces.com`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
};