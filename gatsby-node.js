const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const slugify = require("@sindresorhus/slugify")

const onCreateNode = (...args) => {
  if (args[0].node.internal.type === "MarkdownRemark") {
    onCreatePostNode(...args)
  }
}

function onCreatePostNode({ node, actions }) {
  const { createNodeField } = actions
  //   let slug =
  //     node.frontmatter.slug ||
  //     createFilePath({ node, getNode, basePath: `pages` })
  if (node.fileAbsolutePath.includes("content/posts/")) {
    console.log(node)
  }

  createNodeField({
    name: "editLink",
    node,
    value: `https://github.com/iaurg/segredo.dev/edit/master/content/post`,
  })
}

module.exports = {
  onCreateNode,
}
