export default {
  data () {
    return {
      textMix: 'this text is from mixins/useless-button.js'
    }
  },

  watch: {
    toggle: function (newVal, oldVal) {
      if (!newVal && oldVal) {
        this.textMix = 'The button says: "I HATE REEED!!!"'
        this.revert()
      }
      if (newVal && !oldVal) this.textMix = 'this text is from mixins/useless-button.js'
    }
  },

  mounted () {
    console.log('Any life-cycle function will be executed first')
  },

  methods: {
    // any defined methods can not be override with mixin
    revert () {
      const random = (min, max) => (Math.floor(Math.random() * max) + min)
      setTimeout(() => {
        this.toggle = !this.toggle
        this.$emit('click', 'REVERT BACK!!!')
      }, random(500, 1000))
    }
  }
}
