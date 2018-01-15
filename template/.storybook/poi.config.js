const path = require('path')
{{#isEnabled addons 'readme'}}
const updateWebpackConfig = require('storybook-readme/env/vue/updateWebpackConfig')
{{/isEnabled}}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
{{#if customBlocks}}
  /** KNOWN BUG(in vue-loader maybe, not yet verified): Can't use lazy load import when specify custom loader */
  vue: {
    loaders: {
{{#isEnabled addons 'readme'}}
      docs: require.resolve('../.loader/docs-loader.js'),
{{/isEnabled}}
{{#isEnabled addons 'notes'}}
      notes: require.resolve('../.loader/notes-loader.js'),
{{/isEnabled}}
{{#isEnabled addons 'info'}}
      info: require.resolve('../.loader/info-loader.js')
{{/isEnabled}}
    }
  },
{{/if}}

  webpack (config) {
    return updateWebpackConfig(config)
  },

  extendWebpack (config) {
    config.module.rule('markdown')
      .test(/\.md$/)
      .use('html').loader(require.resolve('html-loader')).end()
      .use('markdown').loader(require.resolve('markdown-loader'))
  },

  // Entry is relative to process.cwd()
  entry: [
    '.storybook/config.js',
    '.storybook/addons.js'
  ],

  dist: '.storybook/dist',

  presets: [
    require('poi-preset-storybook')(),
    require('poi-preset-resolve-alias')({
      '@': resolve('src/components'),
      '~': resolve('')
    })
  ]
}
