<template lang='jade'>
#docInfo
  .header.flex.align-center
    .pic.mr3
      img(src="../../assets/images/tou.png")
    .flex-max.white
      .name.f20.mb1 华佗
      .from.f14 胡庆余堂【彭埠馆】
  .p3.handle-border-bottom
    .title.f16 医生简介
  .info.p3.c9.f14.handle-border-bottom
    | 1982年毕业于浙江医科大学医学系，一直从事妇产科临床、教学和科研工作，有扎实的理论基础和丰富的临床经验，在围产医学和胎儿医学等方面有较深的造诣，擅长于产科妊娠合并症、并发症及难产的诊断和处理。多次组织和指导产科重症、疑难病例、极重危病例的抢救工作，成绩显著。产科各类手术灵巧、麻利，技巧性高，
  .p3.handle-border-bottom
    .title.f16 医生擅长
  .flex.wrap.f12.px3.py2
    .item 月经不调
    .item 痛经
    .item 乳腺增生
    .item 子宫肌瘤
    .item 妇科炎症
    .item 不孕不育
    .item 月子病
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
.header
  height 100px
  background-image url('../../assets/images/doc_home.png')
  background-position 50% 50%
  background-size cover
  .pic
    margin-left 35px
    width 60px
    height 60px
    background-image url('../../assets/images/rock.png')
    background-position 50% 50%
    background-size cover
    background-repeat no-repeat
    img
      margin 3px 0 0 3px
      width 54px
      height 54px
      border-radius 50%
.p3
  .title
    position relative
    text-indent 10px
    &:before
      content ''
      display inline-block
      position absolute
      left 0px
      top 2px
      width 4px
      height 18px
      background #8B1616
.item
  background-image: url('../../assets/images/border.png');
  padding: 2px 6px;
  margin-left 10px
  margin-bottom 13px
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-size: 12px;
  color: #952a2a;
</style>