<template lang="jade">
	.modalHint(
		v-if='isShow'
	)
		.bg-white.rounder
			.p2.round-min.content {{content}}
</template>

<script>
export default {
	data () {
		return {
		}
	},
	computed: {
		isShow () {
			console.log(this.$store.state.isShow)
			return this.$store.state.isShow
		},
		content () {
			return this.$store.state.content
		}
	}
}
</script>
<style lang='stylus' scoped>
.modalHint
	position: absolute;
	left: 50%;
	top: 50%;
	transform translate(-50%, -50%)
	border-radius 5px
	z-index 1001
	.content
		background:hsla(0,0%,7%,.5)
		color #fff
		line-height: 1.5
</style>

