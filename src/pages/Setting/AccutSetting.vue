<template lang="jade">
.accutSetting
  .flex.p3.handle-border-bottom.bg-white
    .flex-max.f16 头像
    img.circle(src="../../assets/images/tou.png" width="30" height="30")
  .flex.p3.handle-border-bottom.bg-white.f16
    .flex-max 账号
    .c9 188****1234
  .flex.p3.handle-border-bottom.bg-white.f16.mt2
    .flex-max 修改密码
    i.c9(class="icon iconfont icon-xiangyou-copy")
  .flex.p3.handle-border-bottom.bg-white.f16.align-center
    .flex-max 绑定身份证
    .c9 123456********4321
    i.c9(class="icon iconfont icon-xiangyou-copy")
</template>
<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  mounted(){},
  computed:{},
  methods:{},
  watch:{},
}
</script>
<style lang="stylus" scoped>
.accutSetting
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background #eee
</style>