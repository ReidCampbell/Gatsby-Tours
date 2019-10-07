module.exports = {
  siteMetadata: {
    title: "Gatsby Tours",
    description: "Explore the world fast, in every way that matters",
    author: "Reid Campbell",
    data: {
      name: "Reid",
      age: 29,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
  ],
}
