<template lang='jade'>
#myOrder
  .px3
    .flex.py3.handle-border-bottom
      .flex-max 就诊人：赵钱孙
      .primary 代就诊
    .py3.handle-border-bottom
      .f16.c3.mb2 预约医院：胡庆余堂中医门诊
      .f16.c3.mb2 预约科室：中医妇科
      .f16.c3.mb2 预约医生：张王李
      .f16.c3.mb2 就诊时间：2018-08-20  周日  08：30  上午第5号
      .f16.c3.mb2 实际挂号费：
        span.primary 80元
      .f16.c3.mb2 支付方式：微信支付（已支付）
      .f16.c9 凭预约短信就诊
    .bottomBtn.text-right.py2
      span.text-center.c9 取消预约
  .bg.py1
  .px3
    .flex.py3.handle-border-bottom
      .flex-max 就诊人：赵钱孙
      .primary 代就诊
    .py3.handle-border-bottom
      .f16.c3.mb2 预约医院：胡庆余堂中医门诊
      .f16.c3.mb2 预约科室：中医妇科
      .f16.c3.mb2 预约医生：张王李
      .f16.c3.mb2 就诊时间：2018-08-20  周日  08：30  上午第5号
      .f16.c3.mb2 实际挂号费：
        span.primary 80元
      .f16.c3.mb2 支付方式：微信支付（已支付）
      .f16.c9 凭预约短信就诊
    .bottomBtn.text-right.py2
      span.text-center.c9 取消预约
  .bg.py1
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
#myOrder
  .bottomBtn
    span
      display inline-block
      width 90px
      height 25px
      line-height 25px
      border 1px solid #999
      border-radius 20px
</style>