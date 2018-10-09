<template lang='jade'>
.bottomMask.mask(v-show="show" @click="hiden")
    transition(name="fade")
      .maskContent.bg-white.px3(v-show="show")
        .handle-border-bottom.py2
          .f16.c12 胡庆余堂【彭埠门诊部】
          .c9.f14.mt2 地址：杭州市彭埠新中宇维萨
        .flex.py2.align-center(v-for="x in 4", @click="jump")
          .flex-max.f14
            span.date 2018-05-24
            span.week.mx1 周一
            span.time 上午   
          img(src="../assets/images/order.png") 
</template>
<script>
export default {
  props:{
    show:Boolean
  },
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    hiden () {
      this.$emit('hiden',false)
    },
    jump () {
      this.$router.push('/sourceList')
    }
  }
}
</script>

<style lang="stylus" scoped>
.maskContent
  position absolute
  bottom 0
  left 0
  right 0
  .flex-max
    img
      width 50px
.c12
  color #121212
.fade-enter-active{
  animation-name: slideInUp;
  animation-duration: .2s;
  animation-fill-mode: both
}
.fade-leave-active {
  animation-name: slideOutDown;
  animation-duration: .5s;
  animation-fill-mode: both
}
@keyframes slideInUp {
  0% {
    transform: translate3d(0,100%,0);
    visibility: visible
  }
  to {
    transform: translateZ(0)
  }
}
@keyframes slideOutDown {
  0% {
    transform: translateZ(0)
  }
  to {
    visibility: hidden;
    transform: translate3d(0,100%,0)
  }
}
</style>