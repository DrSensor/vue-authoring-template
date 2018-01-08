<template>
  <div>
{{#isEnabled addons 'actions'}}
    <button @click="clicked">\{{show ? 'hide': 'show'}}</button>
{{/isEnabled}}
    <{{pascalCase name}} :hello="hello" />
  </div>
</template>

<script>
{{#isEnabled addons 'actions'}}
import { action } from '@storybook/addon-actions'
{{/isEnabled}}
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
    clicked () {
      this.show = !this.show
      action(this.show ? 'hide': 'show')
    }
  }
{{/isEnabled}}
}
</script>
