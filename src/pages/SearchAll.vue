<template lang='jade'>
#searchAll
  .search.flex.align-center.bg-white.handle-border-bottom
    .flex-max.relative.mx3
      img.absolute.search-icon(src='../assets/images/search.png')
      input.w10.inputStyle(type='text' placeholder='搜索方名、主治功能等')
    .c9.f16.mr3(onclick="history.go(-1)") 取消
  .px3
    .py3.primary 热门搜索
    .flex.wrap.c9
      .item.mr3.mb3.border.px1 痛经
      .item.mr3.mb3.border.px1 月经不调
      .item.mr3.mb3.border.px1 更年期综合症
      .item.mr3.mb3.border.px1 痛经
      .item.mr3.mb3.border.px1 痛经
      .item.mr3.mb3.border.px1 痛经
      .item.mr3.mb3.border.px1 月子病
      .item.mr3.mb3.border.px1 妇科炎症
  .py1.bg
  .px3
    .flex.align-center
      .flex-max.py3.primary 历史搜索
      img(src="../assets/images/del.png" height="15")
    .flex.wrap.c9
      .item.mr3.mb3.border.px1 痛经
      .item.mr3.mb3.border.px1 月经不调
      .item.mr3.mb3.border.px1 更年期综合症
      .item.mr3.mb3.border.px1 痛经
      .item.mr3.mb3.border.px1 痛经
      .item.mr3.mb3.border.px1 痛经
      .item.mr3.mb3.border.px1 月子病
      .item.mr3.mb3.border.px1 妇科炎症
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
#searchAll
  .search
    height 50px
    line-height 50px
    .inputStyle
      height 25px
      line-height 25px
      background rgba(229, 229, 229, 0.8)
      padding-left 35px
      color #333
      font-size 16px
    .inputStyle::-webkit-input-placeholder
      font-size 14px
      color #ccc
    .search-icon
      top 50%
      left 8px
      margin-top -8px
  .border
    border 1px solid #DAC9A6
  .pin3
    padding-top 3px
    padding-bottom 3px
</style>