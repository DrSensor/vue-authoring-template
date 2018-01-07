import { configure, addDecorator } from '@storybook/vue'
import { setOptions as masterOptions } from '@storybook/addon-options'

{{#isEnabled addons 'info'}}
import { setDefaults as infoOptions } from '@storybook/addon-info'
{{/isEnabled}}
{{#isEnabled addons 'readme'}}
import { withDocs, withReadme } from 'storybook-readme'
{{/isEnabled}}
{{#isEnabled addons 'console'}}
import { withConsole } from '@storybook/addon-console'
{{/isEnabled}}
{{#isEnabled addons 'knobs'}}
import { withKnobs } from '@storybook/addon-knobs/dist/vue'
{{/isEnabled}}

{{#isEnabled addons 'readme'}}
import Readme from '../README.md'
import Footer from '../FOOTER.md'
{{/isEnabled}}

{{#isEnabled addons 'console'}}
const optionsCallback = (options) => ({ panelExclude: [...options.panelExclude, /Warning/] })
addDecorator((storyFn, context) => withConsole(optionsCallback)(storyFn)(context))
{{/isEnabled}}

{{#isEnabled addons 'info'}}
addDecorator(withReadme(Readme))
withDocs.addFooter(Footer)
{{/isEnabled}}

{{#isEnabled addons 'knobs'}}
addDecorator(withKnobs)
{{/isEnabled}}

masterOptions({
  name: '{{name}}',
  url: '#',
  showLeftPanel: true,
  downPanelInRight: true,
  hierarchySeparator: /\/|\./
})

{{#isEnabled addons 'info'}}
// BUG: Vue Component not yet supported
 infoOptions({
   header: false, // Toggles display of header with component name and description
   inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTables: [], // displays Prop Tables with this components
  propTablesExclude: [], // Exclude Components from being shown in Prop Tables section
  styles: {}, // Overrides styles of addon
  marksyConf: {}, // Overrides components used to display markdown. Warning! This option's name will be likely deprecated in favor to "components" with the same API in 3.3 release. Follow this PR #1501 for details
  maxPropsIntoLine: 1, // Max props to display per line in source code
  maxPropObjectKeys: 10, // Displays the first 10 characters of the prop name
  maxPropArrayLength: 10, // Displays the first 10 items in the default prop array
  maxPropStringLength: 100, // Displays the first 100 characters in the default prop string
})
{{/isEnabled}}

configure(() => require('../stories'), module)
