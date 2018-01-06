const path = require('path')
const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage
} = require('./utils')
const pkg = require('./package.json')

const templateVersion = pkg.version

module.exports = {
  helpers: {
    if_or (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version () {
      return templateVersion
    }
  },

  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    autoInstall: {
      type: 'list',
      message:
        'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm'
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn'
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no'
        }
      ]
    },
    addons: {
      type: 'checkbox',
      message:
        'Select which addon you want to add',
      choices: [
        'knobs',
        'notes',
        'info',
        'readme',
        'console'
      ],
      default: [
        'knobs',
        'readme',
        'console'
      ]
    },
    customBlocks: {
      type: 'confirm',
      message: 'Enable custom-blocks?'
    }
  },
  filters: {
    '.loader/*': 'customBlocks',
    '.loader/docs-loader': 'addons.readme',
    '.loader/info-loader': 'addons.info',
    '.loader/notes-loader': 'addons.notes'
  },
  complete: function (data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    console.log(data)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  }
}
