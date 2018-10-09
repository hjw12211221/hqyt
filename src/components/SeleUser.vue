<template lang="jade">
#seleuser
  .py2.f16.wordColor 问诊人
  .Inputs.flex
    input.peopel.f16.c9(placeholder="问诊人" v-model="name" @focus="focus"  @blur="blur")
    .flex-max
      .flex.justify-end
        .sex.c9.mr3.flex.align-center
          span.c9.pr4 {{sex}}
          PopupRadio(:options="options",v-model="sex")
          i.db(class="icon iconfont icon-sanjiaoxing-down")
        .age.c9.flex.align-center(@click="isShow=true")
          span.c9.pr4{{ages}}
          Datetime(:show="isShow",@on-confirm="confirm" v-model='ages',:min-year=1900,:max-year=2018)
          i.db(class="icon iconfont icon-sanjiaoxing-down")
</template>
<script>
import { Datetime, PopupRadio } from 'vux'
export default {
  components:{
    Datetime,
    PopupRadio,
  },
  data () {
    return {
      isShow: false,
      name: '哈哈',
      ages: '23岁',
      sex: '男',
      options: ['男','女']
    }
  },
  methods:{
    confirm () {
      this.ages = this.$util.getAge(this.ages)
    },
    focus () {
      this.$emit('isfocus', true)
    },
    blur () {
      this.$emit('isblur', false)
    }
  }
}
</script>
<style lang="stylus" scoped>
.peopel
  width 120px
  height 40px
  line-height 40px
  border-bottom 1px solid #D8D8D8
.sex,.age
  position relative
  width 80px
  height 40px
  border-bottom 1px solid #D8D8D8  
.age >>> .weui-cell_access
  position absolute
  width 80px
  height 40px
  top 0px
  left 0px
  padding 0
  opacity 0
  color #999
  z-index 1
.sex >>> .weui-cell_access
  position absolute
  width 80px
  height 40px
  top 0px
  left 0px
  padding 0
  opacity 0
  color #999
  z-index 1
.db
  color #D8D8D8
</style>


