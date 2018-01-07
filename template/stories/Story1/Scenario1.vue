<template>
  <div>
{{#isEnabled addons 'console'}}
{{else}}
    <button @click="clicked">\{{show ? 'hide': 'show'}}</button>
{{/isEnabled}}
    <HelloWorld :hello="hello" />
  </div>
</template>

<script>
{{#isEnabled addons 'console'}}
{{else}}
import { action } from '@storybook/addon-actions'
{{/isEnabled}}

export default {
  props: ['hello'],
  components: {
    {{name}}: () => import('@/{{name}}')
  },
{{#isEnabled addons 'console'}}
{{else}}
  data () {
    return {
      show: true
    }
  },
  methods: {
    clicked () {
      this.show = !this.show
      action(this.show ? 'hide': 'show')
    }
  }
{{/isEnabled}}
}
</script>
