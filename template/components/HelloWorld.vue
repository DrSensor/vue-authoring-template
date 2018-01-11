<template>
  <div>
    <button @click="clicked">
      \{{hello}}
    </button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '{{pascalCase name}}',
  props: {
    hello: {
      type: String,
      required: false,
      default: ''
    },
  },
  methods: {
    clicked () {
      this.$emit('click', this.hello)
    }
  }
}
</script>

<style scoped>

</style>
