{{#isEnabled addons 'readme'}}
const updateWebpackConfig = require('storybook-readme/env/vue/updateWebpackConfig')
{{/isEnabled}}

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  /** For more info @see https://storybook.js.org/configurations/custom-webpack-config/#full-control-mode--default
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    loader: require.resolve('ts-loader')
  });
  defaultConfig.resolve.extensions.push('.ts', '.tsx')
  */

  // Return the altered config
{{#isEnabled addons 'readme'}}
  return updateWebpackConfig(storybookBaseConfig)
{{else}}
  return defaultConfig
{{/isEnabled}}
}
