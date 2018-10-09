<template lang='jade'>
#againConsult
  Search
  .content.bg
    .boxs.text-center
      div.mx-auto(style="width:50px;height:50px;background:#fff")
      .py3.f14 您还没有过看诊记录
      router-link.white.bg-primary.py1.px2.round-min(to="/seleDoc") 预约门诊
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
#againConsult
  .content
    position absolute
    top 50px
    bottom 0
    left 0
    right 0
    .boxs
      position absolute
      top 40%
      left 0
      right 0
      transform translate(0,-50%)
</style>