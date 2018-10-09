<template lang='jade'>
#seleUser
	.contanin
		swipeout(class="vux-1px-tb")
			swipeout-item(transition-mode="follow" v-for="i in 5",:key="i")
				div(slot="right-menu")
					swipeout-button.c3(class="edior",background-color="#E5E5E5") 编辑
					swipeout-button(background-color="#8B1616") 删除
				div(slot="content")
					.px3(solt="content")
						.flex.py3.handle-border-bottom
							.flex-max.gray 就诊人
							.f16.c3 赵钱孙  男  28岁
						.flex.py3.handle-border-bottom
							.flex-max.gray 身份证号
							.f16.c3 1234567899987654321
						.flex.py3.handle-border-bottom
							.flex-max.gray 电话号码
							.f16.c3 18888888888
					.bg.py1
	router-link.fixed.left0.right0.bottom0.bottomBtn(to="/addUser")
		.btn.bg-primary.white 添加就诊人
</template>
<script>
import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
export default {
  data () {
    return {

    }
  },
  components: {
    Swipeout,
    SwipeoutItem,
    SwipeoutButton
  }
}
</script>

<style lang="stylus" scoped>
.contanin
	padding-bottom 35px
	background #f5f5f5
#seleUser >>> .edior
	color #333
.bottomBtn
	.btn
		height 45px
		line-height 45px
		border-radius 0
</style>
