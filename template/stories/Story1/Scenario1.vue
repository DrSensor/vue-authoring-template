<template>
  <div>
{{#isEnabled addons 'actions'}}
    <button @click="clicked">\{{show ? 'hide': 'show'}}</button>
{{/isEnabled}}
    <{{pascalCase name}} :hello="hello" />
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
{{#isEnabled addons 'actions'}}
      show: true,
{{/isEnabled}}
{{#isEnabled addons 'knobs'}}
      hello: text('hello text', 'Hello World!!!')
{{/isEnabled}}      
    }
  },
{{#isEnabled addons 'actions'}}
  methods: {
    action (label, data) {
      this.$emit('action', label, data)
    },
    clicked () {
      this.show = !this.show
      this.action('button-click', this.show)
    }
  }
{{/isEnabled}}
}
</script>
