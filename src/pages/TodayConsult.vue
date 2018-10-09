<template lang='jade'>
#todayConsult
  Search
  Doc-list(name="today", @showInfo="showInfo")
  Bottom-mask(:show="mask",@hiden="hiden")
</template>
<script>
export default {
  data () {
    return {
      mask: false
    }
  },
  components: {
  },
  methods: {
    showInfo (val) {
      this.mask = val
    },
    hiden (val) {
      this.mask = val
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>