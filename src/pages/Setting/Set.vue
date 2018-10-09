<template lang='jade'>
.set
  router-link.flex.p3.mt2.bg-white(to="/accutSetting")
    .flex-max 账号设置
    i.c9(class="icon iconfont icon-xiangyou-copy")
  .flex.p3.mt2.bg-white
    .flex-max 关于我们
    i.c9(class="icon iconfont icon-xiangyou-copy")
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
  }
}
</script>

<style lang="stylus" scoped>
.set
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  background #eee
</style>