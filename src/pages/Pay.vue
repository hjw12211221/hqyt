<template lang='jade'>
#pay
  .bg.py1
  .p3.flex.bg-white.handle-border-bottom
    .flex-max.c3 图文咨询
    .primary 10元
  .p3.flex.bg-white.handle-border-bottom
    .flex-max.c3 优惠券
    .c9 暂无可用优惠券
  .p3.flex.bg-white.handle-border-bottom
    .flex-max.c3 支付金额
    .primary 10.00元
  .bg.py2.px3.f12.c9 选择支付方式
  .p3.flex.bg-white.handle-border-bottom.align-center
    i.mr2.green.f1(class="iconfont icon icon-weixinzhifu")
    span.f16.c3 支付金额
  .bmBtn.fixed.bottom0.left0.right0.flex.bg-white.handle-border-top
    .w6.mx4
      span.c3.f16.mr1 合计金额：
      span.f18.primary ￥10.00
    .w4.text-center 立即购买
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
#pay
  position absolute
  top 0 
  bottom 0
  left 0
  right 0
  background #F5F5F5
  .bmBtn
    height 45px
    line-height 45px
  .w4
    color #fff
    background #8B1616
</style> 