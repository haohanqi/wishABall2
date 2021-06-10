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
          `Source Sans Pro\:300,400,500`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-netlify-cms`
  ],

};
