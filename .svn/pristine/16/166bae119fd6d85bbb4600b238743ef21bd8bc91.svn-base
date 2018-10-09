<template lang='jade'>
#addUser
  .px3
    .flex.py3.handle-border-bottom.align-center
      .flex-max.c9 就诊人
      input(v-model="userName",name="user")
    .flex.py3.handle-border-bottom.align-center
      .flex-max.c9 性别
      PopupRadio(:options="options",v-model="sex")
    .flex.py3.handle-border-bottom.align-center
      .flex-max.c9 年龄
      input(v-model="age",name="age")
      span 岁
    .flex.py3.handle-border-bottom.align-center
      .flex-max.c9 身份证号
      input(v-model="idCard")
    .flex.py3.handle-border-bottom.align-center
      .flex-max.c9 电话号码
      input(v-model="numb")
</template>
<script>
import { PopupRadio } from 'vux'
export default {
  data () {
    return {
      userName: '',
      sex: '男',
      age: '',
      idCard: '',
      numb: '',
      options:['男','女']
    }
  },
  components: {
    PopupRadio
  }
}
</script>

<style lang="stylus" scoped>
#addUser
  input
    text-align right
    font-size 16px
    color #333
  input[name]
    width 50px
  input[sex]
    width 20px
  input[age]
    width 50px
  & >>> .weui-cell
    padding 0
  & >>> .vux-cell-value
    color #333
</style>