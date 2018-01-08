/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import { storyOrder, scenarioOrder } from './config.js'
{{#isEnabled addons 'notes'}}
import { withNotes } from '@storybook/addon-notes'
{{/isEnabled}}
{{#isEnabled addons 'readme'}}
import { withDocs } from 'storybook-readme'
{{/isEnabled}}
{{#isEnabled addons 'info'}}
import { withInfo } from '@storybook/addon-info'
{{/isEnabled}}

{{#isEnabled addons 'knobs'}}
import {
  text,
  number,
  boolean,
  array,
  select,
  color,
  date,
  button
} from '@storybook/addon-knobs/vue'
{{/isEnabled}}

require.context('.', true, /\.vue$/).keys()
  .sort((a, b) => { // sort by storyOrder
    a = a.split('/').map(s => s.replace('.vue', ''))
    b = b.split('/').map(s => s.replace('.vue', ''))

    if (storyOrder) var order = storyOrder.indexOf(a[1]) - storyOrder.indexOf(b[1])
    else order = a[1].charAt(0).toUpperCase() - b[1].charAt(0).toUpperCase() // sort alphabetically

    if (order !== 0) {
      if (scenarioOrder === undefined) { // sort alphabetically
        a = a[a.length - 1].charAt(0).toUpperCase()
        b = b[b.length - 1].charAt(0).toUpperCase()
        order = a < b ? -1 : a > b ? 1 : 0
      } else {
        order = scenarioOrder[a[1]].indexOf(a[2]) - scenarioOrder[b[1]].indexOf(b[2])
      }
    }

    return order
  })
  .forEach((filename) => {
    const hierarchy = filename.split('/')
    const basename = hierarchy[hierarchy.length - 1]
    if (/.vue$/.test(basename)) {
      let componentName = hierarchy.length > 2 ? basename.replace('.vue', '') : 'Introduction'
      let storyName = hierarchy.length > 2 ? hierarchy[hierarchy.length - 2] : basename.replace('.vue', '')

      const Stories = storiesOf(storyName, module)
      const Component = require(`${filename}`).default

      const story = () => {
{{#isEnabled addons 'knobs'}}
        /**|KNOBS HERE| label   default value  */
        let helloText = text('text', 'hello world!!!')
{{else}}
        let helloText = 'hello world!!!'
{{/isEnabled}}

        return {
          render () {
            return <story hello={helloText} />
          },
          components: {
            'story': Component
          }
        }
      }

{{#if customBlocks}}
      /** CHAIN THE CUSTOM BLOCK WITH THE storybook-addon HERE */
      let storyWithAddons = story
{{#isEnabled addons 'notes'}}
      storyWithAddons = withNotes(Component.__notes || '')(storyWithAddons)
{{/isEnabled}}
{{#isEnabled addons 'info'}}
      storyWithAddons = withInfo(Component.__info || '')(storyWithAddons) // BUG: not support Vue Component
{{/isEnabled}}
{{#isEnabled addons 'readme'}}
      storyWithAddons = withDocs(Component.__docs || '', storyWithAddons) // WIP: https://github.com/tuchk4/storybook-readme/issues/37
{{/isEnabled}}
      Stories.add(componentName, storyWithAddons)
{{else}}
      Stories.add(componentName, story)
{{/if}}
    }
  })

/* eslint-enable react/react-in-jsx-scope */
