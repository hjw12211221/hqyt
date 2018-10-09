<template lang="jade">
.chart
  .text-center.my4
    span.px3.py1.bg-d5.white.f14 2018-01-01  12:12
  .flex.px3.mb4
    img.circle.mr2(src="../assets/images/tou.png" width="35"  height="35")
    .chatleft.py2.px3.f14.bg-white.round 医生您好！我来报到了。医生您好！我来报到了。医生您好！我来报到了。
  .flex.px3.justify-end.mb4
    .chatright.py2.px3.f14.bg-blue.round 医生您好！我
    img.circle.ml2(src="../assets/images/tou.png" width="35" height="35")
  .fixed.left0.right0.bottom0
    .px3
      .input.w10.needsclick(contenteditable="true" @input="onInput" @click="setClient")
    .flex 
      .w5.py2.justify-center.flex.align-center.relative
        img.mr2(src="../assets/images/addimg.png" width="20")
        .f12.c9 添加图片
      .w5.py2.justify-center.flex.align-center
        img.mr2(src="../assets/images/kaifang.png" width="20")
        .f12.c9 申请开方 
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      content: ''
    }
  },
  mounted(){},
  methods:{
    onInput (e) {
      // this.content = e.target.textContent.replace(/(^\s*)|(\s*$)/g, '')
      
    },
    setClient () {
      setTimeout(() => {
        document.documentElement.scrollTop = 10000
        document.body.scrollTop = 10000
			}, 300)
    }
  },
}
</script>
<style lang="stylus" scoped>
.chart
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  background #F5F5F5
  .bg-blue
    background #97C7F4
  .bg-d5
    background #D5D5D5
  .input
    height 30px
    max-height 60px
    overflow-y auto
    padding 5px
    background #fff
    -webkit-overflow-scrolling: touch;
  .input:empty::before {
    content: attr(placeholder)
  }
  .chatright
    position relative
    &::after
      content ''
      display inline-block
      position absolute
      right -15px
      top 13px
      width 0
      height 0
      border-top 5px solid transparent
      border-bottom 5px solid transparent
      border-left 8px solid #97C7F4
      border-right 8px solid transparent
  .chatleft
    position relative
    &::before
      content ''
      display inline-block
      position absolute
      left -15px
      top 13px
      width 0
      height 0
      border-top 5px solid transparent
      border-bottom 5px solid transparent
      border-left 8px solid transparent
      border-right 8px solid #fff
</style>