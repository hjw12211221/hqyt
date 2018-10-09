<template lang='jade'>
#myHome
  .header
    .pic.mx-auto
      img.circle(src="../assets/images/tou.png")
    .name.white.f20.text-center 诸葛孔明
  .flex.wrap.align-center
    router-link.w33.text-center(to="/myOrder")
      img(src="../assets/images/my1.png")
      .title.text-center.white.mt2.f16 我的预约
    router-link.w33.text-center(to="/myConsult")
      img(src="../assets/images/my2.png")
      .title.text-center.white.mt2.f16 我的咨询
    .w33.text-center
      img(src="../assets/images/my3.png")
      .title.text-center.white.mt2.f16 我的订单
    router-link.w33.text-center(to="/myCollec")
      img(src="../assets/images/my4.png")
      .title.text-center.white.mt2.f16 我的收藏
    .w33.text-center
      img(src="../assets/images/my5.png")
      .title.text-center.white.mt2.f16 购物车
    router-link.w33.text-center(to="/myMdical")
      img(src="../assets/images/my6.png")
      .title.text-center.white.mt2.f16 我的药方
     .w33.text-center
      img(src="../assets/images/my7.png")
      .title.text-center.white.mt2.f16 常用就诊人
    .w33.text-center
      img(src="../assets/images/my8.png" )
      .title.text-center.white.mt2.f16 我的优惠券
    router-link.w33.text-center(to="/set")
      img(src="../assets/images/my9.png")
      .title.text-center.white.mt2 设置
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
#myHome
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  background-image url('../assets/images/bg.png')
  background-size cover
  background-position center
  .header
    margin 30px 0 50px
    .pic
      width 60px
      height 60px
      background-image url('../assets/images/rock.png')
      background-size cover
      background-position center
      img
        width 54px
        height 54px
        margin 3px 0 0 3px
    .name
      margin-top 13px
  .w33
    margin-bottom 40px
    img
      width 40px
</style>