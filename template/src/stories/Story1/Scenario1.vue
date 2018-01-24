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
import {{pascalCase name}} from '../../components/{{pascalCase name}}.vue'
{{#isEnabled addons 'knobs'}}
/**@see https://github.com/storybooks/storybook/tree/master/addons/knobs#available-knobs */
import { text } from '@storybook/addon-knobs/vue'
{{/isEnabled}}

export default {
  components: {
    {{pascalCase name}}
  },
  data () {
    return {
{{#isEnabled addons 'knobs'}}
      hello: text('hello text', 'Hello World!!!')
{{else}}
      hello: 'Hello World!!!'
{{/isEnabled}}
    }
  },
  methods: {
    clicked (helloText) {
{{#isEnabled addons 'actions'}}
      this.$action('click', helloText)
{{else}}
      console.log('click', helloText)
{{/isEnabled}}
    }
  }
}
</script>
