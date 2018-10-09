<template lang="jade">
.sendEvaluate
  .flex.p3.handle-border-bottom.bg-white
    img.mr2(src="../../assets/images/tou.png" width="30" height="23")
    .f16 胡庆余堂玉仁玫白膏
  .p3.bg-white
    XTextarea(:max=200,show-counter=false,:height=130,placeholder="说说商品的优点和美中不足的地方吧")
  .flex.px3.py2.align-center.bg-white
    img.mr2(src="../../assets/images/add.png" width="50" height="50")
    .f14.c9 添加商品图片
  .bg.py1
  .px3.bg-white.pb4
    .py2 商品评价
    .text-center.my4
      rater(v-model="data")
  .fixed.left0.right0.px3.bottom10
    button.w10.bg-primary.white.f16 发表
</template>
<script>
import { XTextarea,Rater } from 'vux'
export default {
  components:{
    XTextarea,
    Rater
  },
  props:{},
  data(){
    return {
      data: '5'
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
.sendEvaluate
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  background #f5f5f5
  &>>>.vux-rater-inner
    font-size 40px
  &>>>.vux-rater-box
    margin-right 20px !important
  &>>>.weui-cell
    padding 0
button
  height 45px
  line-height 45px
.bottom10
  bottom 10px
</style>