<template lang='jade'>
#myCollec
  tab.head.flex.fixed.top0.left0.right0.handle-border-bottom(:line-width=2)
    tab-item.c9.f16(@on-item-click="onItemClick" selected) 收藏视频
    tab-item.c9.f16(@on-item-click="onItemClick") 收藏文章
    tab-item.c9.f16(@on-item-click="onItemClick") 收藏医生
  .main
    .p3.flex.wrap.justify-between(v-if="index==0")
      .item.mb2(v-for="x in 4")
        img(src="../assets/images/pic2.png")
        .f14.c3 跟着华佗认中药【一】
        .f12.c9
          span 实用
          span.mx2 必备
          span 中华名医
    .airtical.px3(v-if="index==1")
      .flex.py3.handle-border-bottom.align-center
        .title.mr2.f12.px1 文章
        .flex-max.f16.c3.omit 如何预防糖尿病？
      .flex.py3.handle-border-bottom.align-center
        .title.mr2.f12.px1 文章
        .flex-max.f16.c3.omit 防治心脑血管疾病，管理血脂防治心脑血管疾病，管理血脂
      .flex.py3.handle-border-bottom.align-center
        .title.mr2.f12.px1 文章
        .flex-max.f16.c3.omit 防治心脑血管疾病，管理血脂防治心脑血管疾病，管理血脂
    .doc(v-if="index==2")
      Doc-list(name="colleDoc")
</template>
<script>
import { Tab, TabItem } from 'vux'
export default {
  data () {
    return {
      index: 0
    }
  },
  components: {
    Tab,
    TabItem
  },
  methods: {
    onItemClick (index) {
      this.index = index
    }
  }
}
</script>

<style lang="stylus" scoped>
#myCollec
  .head
    height 45px
    & >>> .vux-tab-item
      font-size 16px
      color #999
    & >>> .vux-tab-selected
      color #8B1616
    & >>> .vux-tab-ink-bar
      margin 0 auto
      width 60px
      background #8B1616
  .main
    top 45px
    .item
      width 48%
      img
        width 100%
        height 111px
    .airtical
      .title
        color #DAC9A6
        border 1px solid #DAC9A6
    .doc >>> .main
      top 0
</style>