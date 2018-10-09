<template lang='jade'>
#consultDoc
  consult-header
  doc-list(name="consultDoc")
  router-link.bar.fixed(to="/priceConsult")
    img(src="../assets/images/bar.png")
</template>
<script>
export default {
  data () {
    return {

    }
  },
  components: {
  }
}
</script>

<style lang="stylus" scoped>
#consultDoc
  &>>>.main
    top 110px
.bar
  bottom 20%
  right 20px
  img
    width 50px
</style>