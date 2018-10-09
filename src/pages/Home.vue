<template lang="jade">
#home.px3
	Input
	.banner
		swiper(:list="bannnerList" @on-index-change="" auto="auto" loop="loop")
		//- img(src='../assets/images/banner.png')
	.counlt.flex.mt4.justify-around
		router-link.nav(to="/lookDoc")
			img.block.w10(src="../assets/images/nav2.png")
		router-link.nav(to="/todayConsult")
			img.block.w10(src="../assets/images/nav1.png")
	.doorServer
		.title 门诊服务
		.flex.mt3
			router-link.w33.text-center(to="/hosList")
				img(src="../assets/images/sever1.png")
			router-link.w33.text-center(to="/seleDoc")
				img(src="../assets/images/sever2.png")
			router-link.w33.text-center(to="/searchHome")
				img(src="../assets/images/sever3.png")
	.webServer
		.title 网诊服务
		.flex.mt3.wrap
				router-link.mb2.w5.text-center(to="/againConsult")
					img.netImg(src="../assets/images/web1.png")
				router-link.mb2.w5.text-center(to="/report")
					img.netImg(src="../assets/images/web2.png")
				router-link.mb2.w5.text-center(to="/consultDoc")
					img.netImg(src="../assets/images/web3.png")
				router-link.mb2.w5.text-center(to="/selfTesting")
					img.netImg(src="../assets/images/web4.png")
	//- .combo
		.title 名医套餐
		.flex.py2.align-center
			.flex-max.mr2
				.titles.f14 李时珍的皮肤组合套餐（一次面诊加两次图文资讯）
				.flex.titleDown.align-center
					.flex-max
						span.price.red.mr2 ¥399
						del.f12.cc ¥1099
					.num.f12.c9.omit 购买人数:123人
			.pic
				img(src="../assets/images/pic1.png")
		.flex.py2.align-center
			.flex-max.mr2
				.titles.f14 李时珍的皮肤组合套餐（一次面诊加两次图文资讯）
				.flex.titleDown.align-center
					.flex-max
						span.price.red.mr2 ¥399
						del.f12.cc ¥1099
					.num.f12.c9.omit 购买人数:123人
			.pic
				img(src="../assets/images/pic2.png")
</template>
<script>
import { Swiper } from 'vux'
export default {
	components: {
		Swiper
	},
	data () {
		return {
			loop: true,
			auto: true,
			bannnerList:[
			{
				url: 'javascript:',
				img: require('../assets/images/banner.png')
			}, {
				url: 'javascript:',
				img: require('../assets/images/banner.png'),
				fallbackImg: require('../assets/images/banner.png'),
			}]
		}
	},
	mounted () {
	}
}
</script>
<style lang="stylus" scoped>
#home
	.banner
		height 140px
		&>>>.vux-swiper
			height 140px !important
		&>>>.vux-indicator
			right 0
			left 0
			text-align center
			.active
				background #952a2a
			a
				float none
		img
			width 100%
			height 100%
	.nav
		width 48%
		height 70px
		img
			height 100%
	.doorServer,.webServer,.combo
		margin 25px 0
		.title
			position relative
			text-indent 10px
			&:before
				content ''
				display inline-block
				position absolute
				left 0px
				top 1px
				width 4px
				height 18px
				background #8B1616
	.doorServer
		.w33
			img
				height 110px
	.webServer
		.w5
			.netImg
				width 160px
				@media screen and (max-width: 320px){
					width 140px
				}
	.combo
		.titles
			font-size 14px
			color #262323
		.pic
			img
				width 125px
		.titleDown
			margin-top 8px
			.price
				color #8B1616
</style>