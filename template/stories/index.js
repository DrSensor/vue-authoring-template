/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import { storyOrder, scenarioOrder } from './config.js'
import { withNotes } from '@storybook/addon-notes'
// import { action } from '@storybook/addon-actions'
// import { withDocs } from 'storybook-readme'
// import { withInfo } from '@storybook/addon-info'

// import {
//   text,
//   number,
//   boolean,
//   array,
//   select,
//   color,
//   date,
//   button
// } from '@storybook/addon-knobs'

require.context('.', true, /\.vue$/).keys()
  .sort((a, b) => { // sort by storyOrder
    a = a.split('/').map(s => s.replace('.vue', ''))
    b = b.split('/').map(s => s.replace('.vue', ''))
    let order = storyOrder.indexOf(a[1]) - storyOrder.indexOf(b[1])

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
        /** INSERT THE KNOB HERE */

        return {
          render () {
            return <story />
          },
          components: {
            'story': Component
          }
        }
      }

      /** CHAIN THE CUSTOM BLOCK WITH THE storybook-addon HERE */
      // console.log(Component.__notes, Component.__docs, Component.__info)
      const storyWithNotes = withNotes(Component.__notes || '')(story)
      // const storyWithInfo = withInfo(Component.__info || '')(story) // BUG: not support Vue Component
      // const storyWithDocs = withDocs(Component.__docs || '', storyWithNotes) // WIP: https://github.com/tuchk4/storybook-readme/issues/37

      Stories.add(componentName, storyWithNotes)
    }
  })

/* eslint-enable react/react-in-jsx-scope */
