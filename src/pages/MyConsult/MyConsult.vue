<template lang="jade">
.myConsult
  .list(v-for="x in 5")
    .flex.py2.px3.handle-border-bottom.align-center
      img.circle.mr2(src="../../assets/images/tou.png" width="30" heigth="30")
      .flex-max.f16 黄丽华
      .c9.f16 已完成
    .f14.handle-border-bottom.py2.px3
      .omit2 感谢医生！我的病情恢复的很稳定。感谢医生！我的病情恢复的很稳定。感谢医生！我的病情恢复的很稳定。情恢复的很稳定
    .py2.c9.f12.px3 2018-09-09  问医生
    .py1.bg
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
  methods:{}

}
</script>
<style lang="stylus" scoped>
</style>