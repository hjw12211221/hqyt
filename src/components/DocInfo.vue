<template lang='jade'>
div
	.hall-item.pt3
		.mt2.flex
			.omit.flex-max 张仲景的肾脏预防疗养在线讲堂。
			.ml3
				icon-svg.font(iconClass='xingxing' v-if='true')
				icon-svg.font.select(iconClass='star' v-else)
		.hall-banner.my2
		//- .hall-doc-info.flex.relative
		//- 	.doc-icon.mr2
		//- 	.doc-info
		//- 		.doc-name
		//- 			span.pr2 张仲景
		//- 			span.c9.f12 中医内科主任医师
		//- 		.doc-address.c9.f12.mt1 胡庆余堂（彭埠门诊部）
		//- 	.doc-live.absolute.f12.c9 共有5节课
		.py3.handle-border-top.flex.relative
			.mr2.tab-video.f5 视频
			.f4.omit.flex-max 如何预防肾脏疾病？
			.tab-time.f12.c9 12分钟
		.py3.handle-border-top.flex.relative(@click='$router.push("/doc-article")')
			.mr2.tab-article.f5 文章
			.f4.omit.flex-max 防治心脑血管疾病，管理血脂
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
	.hall-banner
		height 150px
		background red
	.doc-icon
		height 35px
		width 35px
		background-color red
	.hall-doc-info
		margin-bottom 15px
		.doc-live
			right 15px
			top 50%
			margin-top -7px
	.tab-video
		padding 0 5px
		color #D57B7B
		border 1px solid #D57B7B
	.tab-article
		padding 0 5px
		border 1px solid #DAC9A6
		color #DAC9A6
 
</style>