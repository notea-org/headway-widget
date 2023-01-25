module.exports = {
  stories: ["../stories/**/*.stories.js", "../stories/**/*.stories.mdx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links", "@storybook/addon-docs", '@storybook/addon-controls/register'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false
  },
  core: {
    builder: "webpack5"
  }
};