module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    'gatsby-plugin-antd',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oswald\: 300,400,500,700`,
          `Source Sans Pro\:300,400,500`,
          `Shadows Into Light\:400`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `page-content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`
  ],
};
