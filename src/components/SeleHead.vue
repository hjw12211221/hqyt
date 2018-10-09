<template lang='jade'>
.selecHead.fixed.top0.left0.right0.bg-white
  .flex.align-center
    .w33.text-center(@click="selec(1)")
      span.f16.wordColor.mr2.c9(:class="num==1&&isMask==true?'primary':''") {{areName}}
      i.db(class="icon iconfont icon-sanjiaoxing-down" v-if="num!=1")
      i.primary(class="icon iconfont icon-sanjiaoxing-up" v-if="num==1&&isMask==true")
    .w33.text-center(@click="selec(2)")
      span.f16.wordColor.mr2.c9(:class="num==2&&isMask==true?'primary':''") {{keptName}}
      i.db(class="icon iconfont icon-sanjiaoxing-down" v-if="num!=2")
      i.primary(class="icon iconfont icon-sanjiaoxing-up" v-if="num==2&&isMask==true")
    .w33.text-center(@click="selec(3)")
      span.f16.wordColor.mr2.c9(:class="num==3&&isMask==true?'primary':''") {{postName}}
      i.db(class="icon iconfont icon-sanjiaoxing-down" v-if="num!=3")
      i.primary(class="icon iconfont icon-sanjiaoxing-up" v-if="num==3&&isMask==true")
  .mask(v-if="isMask",@click="isMask=false;num=0")
    .are.bg-white(v-if="num==1")
      .item.handle-border-bottom(v-for="x in areList",:class="x.name==areName?'primary':'c3'") {{x.name}}
    .kept.bg-white(v-if="num==2")
      .item.handle-border-bottom(v-for="x in keptList",:class="x.name==keptName?'primary':'c3'") {{x.name}}
    .post.bg-white(v-if="num==3")
      .item.handle-border-bottom(v-for="x in postList",:class="x.name==postName?'primary':'c3'") {{x.name}}
</template>
<script>
export default {
  data () {
    return {
      num: 0,
      isMask: false,
      areName: '彭埠馆',
      keptName: '选择科室',
      postName: '医生职称',
      areList:[
        {name: '彭埠馆'},
        {name: '银泰馆'},
        {name: '庆春馆'},
        {name: '彭埠馆'},
        {name: '银泰馆'},
        {name: '庆春馆'},
      ],
      keptList:[
        {name: '儿科'},
        {name: '妇科'},
        {name: '骨科'},
        {name: '皮肤科'},
        {name: '神经内科'},
        {name: '消化科'},
        {name: '传染科'}
      ],
      postList:[
        {name: '不限'},
        {name: '主任医师'},
        {name: '副主任医师'},
        {name: '主治医师'},
        {name: '其他'}
      ]
    }
  },
  components: {
  },
  methods: {
    selec (index) {
      if (this.isMask&&this.num == index) {
        this.isMask = false
        this.num = 0
      } else {
        this.isMask = true
        this.num = index
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.selecHead
  z-index 10
  height 50px
  line-height 50px
  border-bottom 1px solid #e5e5e5
  .db
    color #D8D8D8
  .mask
    margin-top 50px
    z-index 1001
    .are,.kept,.post
      max-height 50%
      overflow auto
      .item
        padding-left 30px
</style>