/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import { storyOrder, scenarioOrder } from './config.js'

{{#isEnabled addons 'actions'}}
import { action } from '@storybook/addon-actions'
import Vue from 'vue'

Vue.mixin({
  methods: {
    $action (label, payload) {
      if (payload !== undefined) this.$emit('action', label, payload)
      else this.$emit('action', label)
    }
  }
})
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
        return {
          template: '<story @action="act" />',
          methods: { act: action(`${storyName}/${componentName}`) },
          components: {
            'story': Component
          }
        }
      }

      /** CHAIN the storybook-addon HERE */

      if (chainAddon[storyName][scenarioName] instanceof Function) {
        var addAddon = chainAddon[storyName][scenarioName]
      } else if (chainAddon[storyName] instanceof Function) {
   var addAddon = chainAddon[storyName]
      } else addAddon = chainAddon['default']

      let storyWithAddons = story

      Stories.add(componentName, storyWithAddons)
    }
  })

/* eslint-enable react/react-in-jsx-scope */
