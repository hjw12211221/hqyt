<template lang='jade'>
#report.px3
  sele-user
  .py2.my2.f16.wordColor 报告单解读范围：
  //- .c9.f12.pb3.line20 血常规、尿常规、大便常规、甲状腺指标、骨密度、儿科微元素、妇科的分泌物、TCT（液基薄层细胞检测）、肿瘤指标、生化、B超、X线
  XTextarea(:max=200,show-counter=true,:height=150,placeholder="血常规、尿常规、大便常规、甲状腺指标、骨密度、儿科微元素、妇科的分泌物、TCT（液基薄层细胞检测）、肿瘤指标、生化、B超、X线")
  .c9.f12.py3 为保护您的隐私，请不要输入姓名、手机号等隐私信息
  .imgBox
    img(src="../assets/images/add.png")
  .bmBtn.fixed.bottom0.left0.right0.flex.bg-white.handle-border-top
    .w6.mx4
      span.c3.f16.mr3 1元
      del.cc.f12 原价99元
    router-link.w4.text-center(to="/pay") 立即购买
</template>
<script>
import { XTextarea } from 'vux'
export default {
  data () {
    return {
    }
  },
  components: {
    XTextarea 
  },
  mounted () {
  },
  methods:{
  }
}
</script>

<style lang="stylus" scoped>
#report
  padding-bottom 45px
  .Inputs
    input::-webkit-input-placeholder
      font-size 15px
      color #999
#report >>> .vux-x-textarea
  border-top 1px solid #D8D8D8
  border-bottom 1px solid #D8D8D8
#report >>> .weui-textarea::-webkit-input-placeholder
  /* WebKit browsers */
  color #ccc
  font-size 12px
#report >>> .vux-x-textarea:before
  border-top 1px solid #fff

.db
  color #D8D8D8
.bmBtn
  height 45px
  line-height 45px
  .w4
    color #fff
    background #8B1616
.imgBox
  img
    width 100px
</style>