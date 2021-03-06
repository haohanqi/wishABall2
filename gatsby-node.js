/* eslint-disable prettier/prettier */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const newsTemplate = path.resolve('src/template/newsPage.tsx');
  const eventTemplate = path.resolve('src/template/eventPage.tsx');

  const newsList = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  const eventList = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/event/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (newsList.error || eventList.error) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  newsList.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: newsTemplate,
      context: {},
    });
  });

  eventList.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: eventTemplate,
      context: {},
    });
  });
};
