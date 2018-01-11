<template>
  <div>
    <button @click="clicked" :class="toggle ? 'primary' : 'secondary'">
      \{{hello}}
    </button>
    <div :class="toggle ? 'secondary' : 'primary'" style="cursor: unset">
      <slot></slot>
    </div>
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

  data () {
    return {
      toggle: true
    }
  },

  methods: {
    clicked () {
      this.toggle = !this.toggle
      this.$emit('click', this.hello)
    }
  }
}
</script>

<style scoped>
.primary {
  background-color: lightcyan;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.secondary {
  background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
