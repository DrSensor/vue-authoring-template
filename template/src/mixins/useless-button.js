export default {
  data () {
    return {
      textMix: 'this text is from mixins/useless-button.js'
    }
  },

  watch: {
    toggle: function (newVal, oldVal) {
      if (!newVal && oldVal) this.textMix = 'The button says: "I HATE REEED!!!"'
      if (newVal && !oldVal) this.textMix = 'this text is from mixins/useless-button.js'
    }
  },

  methods: {
    clicked () {
      this.$action('REVERT BACK!!!', [this.hello])
      const random = (min, max) => (Math.floor(Math.random() * max) + min)
      setTimeout(() => { this.toggle = !this.toggle }, random(700, 5000))
    }
  }
}
