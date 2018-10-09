<template lang="jade">
.hosList
  .p3
    .hos.mb2.flex.align-center.justify-center(v-for="x in 5")
      img.mx2(src="../assets/images/hos.png" width="80")
      .bar.white.flex.column.text-center.justify-around 彭埠馆
      .flex-max.p2
        .f15 杭州市江干区新塘街道新中宇维萨123号
        .mt4.flex
          .flex-max.c6.f12 距离您1.25公里
          button 点我导航
</template>

<script>
export default {
  data(){
    return {
    }
  },
  mounted(){

  },
  methods:{
    
  }
}
</script>
<style lang="stylus" scoped>
.hos
  height 130px
  background-image url('../assets/images/bg-hos.png')
  background-size cover
  background-position center
  .bar
    width 29px
    height 79px
    background-image url('../assets/images/hos-bar.png')
    background-size cover
    background-position center
button
  width 75px
  height 25px
  line-height 25px
  border 1px solid #8D1410
  color #8D1410
  background rgba(0,0,0,0)
</style>