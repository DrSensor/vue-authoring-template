const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
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

  // Entry is relative to process.cwd()
  entry: [
    '.storybook/config.js',
    '.storybook/addons.js'
  ],

  extendWebpack (config) {
    config.module.rule('markdown')
      .test(/\.md$/)
      .use('md')
      .loader(require.resolve('raw-loader'))
  },

  dist: '.storybook/dist',

  presets: [
    require('poi-preset-storybook')(),
    require('poi-preset-resolve-alias')({
      '@': resolve('components'),
      '~': resolve('')
    })
  ]
}
