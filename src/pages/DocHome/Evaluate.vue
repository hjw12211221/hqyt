<template lang="jade">
.evaluate
  .p2.barList.handle-border-bottom.flex.wrap.f14
    .item.mr3.mb3.bg.c9.round20.px2.py1 全部(100) 
    .item.mr3.mb3.bg.c9.round20.px2.py1 腹痛(100) 
    .item.mr3.mb3.bg.c9.round20.px2.py1 体寒(100)
    .item.mr3.mb3.bg.c9.round20.px2.py1 脾湿(100)
    .item.mr3.mb3.bg.c9.round20.px2.py1 糖尿病(100)
    .item.mr3.mb3.bg.c9.round20.px2.py1 失眠(100)
    .item.mr3.mb3.bg.c9.round20.px2.py1 失眠(100)
    .item.mr3.mb3.bg.c9.round20.px2.py1 腹痛(100) 
    .item.mr3.mb3.bg.c9.round20.px2.py1 体寒(100)
  router-link.block.list.mx3.py3.handle-border-bottom(v-for="x in 5", to="/sendEvaluate")
    .flex.align-center
      .num.f12.mr2 123****2222
      i.icon.iconfont.icon-yduixingxingshixin.yellow.f12.mr1(v-for="x in 5")
    .my2.f12
      span.c9 确诊疾病：
      span 阴虚质，体寒
    .f14.my2 好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃
    .flex
      .w33
        img.w9(src="../../assets/images/pic1.png")
      .w33
        img.w9(src="../../assets/images/pic1.png")
      .w33
        img.w9(src="../../assets/images/pic1.png")
    .bg.f14.p2.mt3 商家回复：这里是回复回复回复回复回复回复回复回 复回复回复回复回复回复回复回复回复回复回复回复回复回复回复。
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
</style>