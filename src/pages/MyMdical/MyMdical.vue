<template lang="jade">
.myMdical
  .box(v-for="x in 4")
    .flex.py2.px3.align-center.handle-border-bottom
      img.circle.mr2(src="../../assets/images/tou.png" width="30" height="30")
      .flex-max.f16 黄丽华
      .c9 已发货
    .flex.py2.px3
      .flex-max.f14 症状简介：
      .f14.omit 不易入睡不易入睡
    .flex.py2.px3
      .flex-max.f14 诊断建议：
      .f14.omit 不易入睡不易入睡
    .f14.py2.px3 药方：
    .flex.py2.px3(v-for="x in 3")
      .w4.text-center
        .f14 当归
      .w6.text-right
        .f14 100g  ¥100.00
    .flex.py2.px3
      .flex-max.f14 合计：
      .f14.omit 270g ￥300.00
    .flex.py2.px3
      .flex-max.f14 服药方式：
      .f14.omit 内服、代煎、热服
    .flex.py2.px3
      .flex-max.f14  医嘱：
      .f14.omit 无
    .text-right.px3.pb4
      button.conform.f16.c9 确认收货
    .bg.py1
</template>
<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="stylus" scoped>
.conform
  border: 1px solid #E5E5E5;
  border-radius: 100px;
  padding 5px 20px
  background #fff
</style>