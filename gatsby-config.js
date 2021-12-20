/* eslint-disable no-useless-escape */
module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  siteMetadata: {
    title: `OSE`,
    author: `Hanqi Hao`,
    description: `OSE [Overseas Sports and Education Inc.] serves as a multi-platform organization which focuses on sports and wellness; sporting news; culture and education; as well as providing resources for studying abroads. At OSE, we are a reliable and trustful platform to find all useful resources.`,
    siteUrl: 'https://www.osecanada.com',
  },
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
    `gatsby-plugin-image`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-styled-components`
  ],

};
