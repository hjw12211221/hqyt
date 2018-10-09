<template lang='jade'>
#sourceList
  .bg.flex.align-center.py3
    .w33.text-center 序号
    .w33.text-center 时间
    .w33.text-center 选择
  .flex.align-center.py3.handle-border-bottom(v-for="(x,index) in 5",@click="selec(index)")
    .w33.text-center 01
    .w33.text-center 8：00
    .w33.text-center
      i.light.f1(class="icon iconfont icon-weixuanzhongkuang" v-if="index!=num")
      i.primary.f1(class="icon iconfont icon-xuanzhongduigou" v-else)
</template>
<script>
export default {
  data () {
    return {
      num:-1
    }
  },
  components: {
  },
  methods: {
    selec (num) {
      this.num = num
      this.$router.push('/appointment')
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>