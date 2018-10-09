<template lang='jade'>
#appointment
  .px3.py2.gray.bg-white
    .flex.py2
      .flex-max 医院
      .gray 浙江省中医院
    .flex.py2
      .flex-max 科室
      .gray 皮肤伤口造口
    .flex.py2
      .flex-max 医生
      .gray 普通号
    .flex.py2
      .flex-max 挂号费
      .gray 10元
    .flex.py2
      .flex-max 就诊时间
      .gray 2018-08-05 周三 08：00
  .bg.py1
  .px3.gray.bg-white
    router-link.flex.py2.align-center.handle-border-bottom(to="/seleUser")
      .flex-max.gray 选择就诊人
      .gray 张三丰
      i.db(class="icon iconfont icon-xiangyou-copy")
    .flex.py2.align-center.handle-border-bottom
      .flex-max 身份证号
      .gray 362522*******0013
    .flex.py2.align-center.handle-border-bottom
      .flex-max 手机号
      .gray 188****321
    .flex.py2
      input.flex-max.bg-white.f3.border.rounder.text-center.gray(placeholder="请输入验证码" v-model="mycode")
      .refesh
        code-canvas(@getCode="getcode")
  .px3.btnBottom
    .btn.white(@click="submit") 提交
  .f5.gray.py4.bg.text-center.underline  <<预约规则>>
</template>
<script>
import { GetCode } from '../service/index.js'
export default {
  data () {
    return {
      mycode: '',
      code:''
    }
  },
  components: {

  },
  mounted () {
  },
  methods: {
    getcode (val) {
      this.code = val
    },
    submit () {
      let mycode = this.mycode.toUpperCase()
      if (this.mycode == '') {
        console.log('验证码不能为空')
        this.$store.commit('setHint',{'val':'验证码不能为空'})
        // alert('1111111')
      } else if (mycode == this.code) {
        this.$router.push('/myOrder')
      }else {
        console.log('验证码不一致')
        this.$store.commit('setHint',{val:'验证码不一致'})
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
#appointment
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  background #f5f5f5
  .border
    border 1px solid #eee
  .refesh
    width 127px
    min-width 85px
  .btnBottom
    margin-top 50px 
    .btn
      background #8B1616
      border-radius 0
  .underline
    text-decoration underline
</style>