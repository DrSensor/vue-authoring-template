<template>
  <div>
    <{{name}}
      :hello="hello"
      @click="clicked"
    >
      <span>This is default slot</span>
    </{{name}}>
  </div>
</template>

<script>
{{#isEnabled addons 'knobs'}}
/**@see https://github.com/storybooks/storybook/tree/master/addons/knobs#available-knobs */
import { text } from '@storybook/addon-knobs/vue'
{{/isEnabled}}

export default {
  components: {
    {{pascalCase name}}: () => import('@/{{pascalCase name}}')
  },
  data () {
    return {
{{#isEnabled addons 'knobs'}}
      hello: text('hello text', 'Hello World!!!')
{{/isEnabled}}      
    }
  },
  methods: {
{{#isEnabled addons 'actions'}}
    action (label, data) {
      this.$emit('action', label, data)
    },
{{/isEnabled}}
    clicked (helloText) {
{{#isEnabled addons 'actions'}}
      this.action('button-click', helloText)
{{else}}
      console.log(helloText)
{{/isEnabled}}
    }
  }
}
</script>
