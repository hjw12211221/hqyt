<template lang='jade'>
#keptList
  .p3.handle-border-bottom(@click="jump('儿科')") 儿科
  .p3.handle-border-bottom 儿科
  .p3.handle-border-bottom 儿科
  .p3.handle-border-bottom 儿科
</template>
<script>
export default {
  data () {
    return {

    }
  },
  components: {
  },
  methods: {
    jump (val) {
      this.$store.commit('changeVal',{'name':'keptName','val':val})
      this.$router.push('/priceConsult')
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>