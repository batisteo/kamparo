<template>
  <img :src="path" :alt="country" srcset="">
</template>

<script>
export default {
  props: ['country'],

  computed: {
    path: function () {
      return '/statics/flags/' + this.country + '.svg'
    }
  }
}
</script>

<style lang="stylus" scoped>
  img
    height: 1.3rem
    vertical-align: middle
</style>
