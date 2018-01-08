const path = require('path')
const fs = require('fs')
const spawn = require('child_process').spawn

/**
 * Convert a string to Pascal Case (removing non alphabetic characters).
 *
 * @example
 * 'hello_world'.toPascalCase() // Will return `HelloWorld`.
 * 'fOO BAR'.toPascalCase()     // Will return `FooBar`.
 *
 * @returns {string}
 *   The Pascal Cased string.
 */
exports.toPascalCase = function (text) {
  return text.match(/[a-z]+/gi)
    .map(word => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    })
    .join('')
}

/**
 * Sorts dependencies in package.json alphabetically.
 * They are unsorted because they were grouped for the handlebars helpers
 * @param {object} data Data from questionnaire
 */
exports.sortDependencies = function sortDependencies (data) {
  const packageJsonFile = path.join(
    data.inPlace ? '' : data.destDirName,
    'package.json'
  )
  const packageJson = JSON.parse(fs.readFileSync(packageJsonFile))
  packageJson.devDependencies = sortObject(packageJson.devDependencies)
  packageJson.dependencies = sortObject(packageJson.dependencies)
  fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2) + '\n')
}

/**
 * Runs `npm install` in the project directory
 * @param {string} cwd Path of the created project directory
 * @param {object} data Data from questionnaire
 */
exports.installDependencies = function installDependencies (
  cwd,
  executable = 'npm',
  color
) {
  console.log(`\n\n# ${color('Installing project dependencies ...')}`)
  console.log('# ========================\n')
  return runCommand(executable, ['install'], {
    cwd
  })
}

/**
 * Prints the final message with instructions of necessary next steps.
 * @param {Object} data Data from questionnaire.
 */
exports.printMessage = function printMessage (data, { green, yellow, magenta }) {
  const message = `
# ${green('Project initialization finished!')}
# ========================
For more information about configuring the storybook see https://storybook.js.org/basics/guide-vue/

To get started:

  ${yellow(
      `${data.inPlace ? '' : `cd ${data.destDirName}\n  `}${installMsg(
        data
      )}npm run dev`
    )}

List of command:

    ${green('npm run dev')} \t\t: running in development mode
    ${green('npm run build:storybook')} \t: build storybook page
    ${green('npm run build:component')} \t: build .vue component into .js
    ${green('npm run deploy')} \t\t: deploying into surge.sh

${custBlcksMsg(data, magenta)}

${data.addons.info && custBlcksMsg
  ? `Thank you for trying experimental features.
  If you find bugs and/or have suggestion, feel free to open issue https://github.com/DrSensor/vue-authoring-template/issues/new
`
: `For more information consult https://github.com/DrSensor/vue-authoring-template`}
`
  console.log(message)
}

/**
 * If the user choose to use customBlocks, it return a string
 * containing the instruction for this step.
 * @param {Object} data Data from the questionnaire
 */
function custBlcksMsg (data, color) {
  if (data.customBlocks) {
    return `
    To add more custom-blocks, you need to write custom webpack-loader and place it to ${color('.loader/')}.
    Then ${color('require.resolve(.loader/<your-loader>.js')} into vue.loaders config at ${color('.storybook/poi.config.js')}
    \n
    `
  } else return '^[K'
}

/**
 * If the user will have to run `npm install` or `yarn` themselves, it returns a string
 * containing the instruction for this step.
 * @param {Object} data Data from the questionnaire
 */
function installMsg (data) {
  return !data.autoInstall ? 'npm install (or if using yarn: yarn)\n  ' : ''
}

/**
 * Spawns a child process and runs the specified command
 * By default, runs in the CWD and inherits stdio
 * Options are the same as node's child_process.spawn
 * @param {string} cmd
 * @param {array<string>} args
 * @param {object} options
 */
function runCommand (cmd, args, options) {
  return new Promise((resolve, reject) => {
    const spwan = spawn(
      cmd,
      args,
      Object.assign(
        {
          cwd: process.cwd(),
          stdio: 'inherit',
          shell: true
        },
        options
      )
    )

    spwan.on('exit', () => {
      resolve()
    })
  })
}

function sortObject (object) {
  // Based on https://github.com/yarnpkg/yarn/blob/v1.3.2/src/config.js#L79-L85
  const sortedObject = {}
  Object.keys(object)
    .sort()
    .forEach(item => {
      sortedObject[item] = object[item]
    })
  return sortedObject
}
