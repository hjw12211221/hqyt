<template lang="jade">
#imgConsult
	.px3.pb3
		sele-user(@isfocus="focus" @isblur="blur")
	//- .px3
	//- 	.py2.c9 点击标签快速咨询病情（非必选）
	//- 	.flex.wrap.align-center.btnList
	//- 		.item.c9.px1(@click="sele(x,index)",:class="x.selec ? 'bg-primary white border-primary':'border'",v-for="(x,index) in diaseList") {{x.name}}
	XTextarea(:max=200,show-counter=true,:height=130,placeholder="详细描述您的病情症状，曾经做过什么检查、用药情况，目前病情是否加重还是缓解，想要获得医生的什么帮助（最少输入10个字）" @on-focus="focus(true)")
	.bg.py1
	.py2.px3.flex.align-center
		.imgBox.mr2
			img(src="../assets/images/add.png")
		.imgRight
			.c6.f14 添加照片（非必选）
			.f12.c9.my2 请上传病情或者检查图片，方便医生确认
			.f12.c9 照片尽自己和医生可见
	router-link.btnBottom.px3.left0.right0.block(to="/pay",:class="isFixed ? 'static' : ''")
		.btn.white 提交
	//- .bottomMask(v-show="show")
	//- 	transition(name="fade")
	//- 		.maskContent.bg-white.px3.f16(v-show="show")
	//- 			.p3.flex.handle-border-bottom
	//- 				.flex-max.c9 姓名
	//- 				input.text-right(type="text" v-model="name")
	//- 			.p3.flex.handle-border-bottom
	//- 				.flex-max.c9 性别
	//- 				PopupRadio(:options="options",v-model="sex")
	//- 			.p3.flex.handle-border-bottom
	//- 				.flex-max.c9 年龄
	//- 				input.text-right(type="number" v-model="age")
	//- 			.btnBottom.px3
	//- 				.btn.white(@click="show=false") 确认
</template>
<script>
import { XTextarea,PopupRadio } from 'vux'
export default {
	components:{
		XTextarea,
		PopupRadio
	},
	data () {
		return {
			show: false,
			name: '张晓',
			sex: '男',
			options: ['男','女'],
			age: 22,
			diaseList: [
				{selec: false,name:'痛经'},
				{selec: false,name:'月经不调'},
				{selec: false,name:'更年期综合症'},
				{selec: false,name:'月经病'},
				{selec: false,name:'卵巢囊肿'},
				{selec: false,name:'子宫肌瘤'},
				{selec: false,name:'妇科炎症'},
				{selec: false,name:'带下症'}
			],
			seleList: [],
			isFixed: false
		}
	},
	methods: {
		sele (val,index) {
			if (val.selec) {
				val.selec=false
				this.seleList.map((item,index) => {
					if (val.name == item.name) {
						this.seleList.splice(index,1)
					}
				})
			} else {
				val.selec=true
				if (this.seleList.length >2) {
					this.diaseList.map((item,idx)=>{
						if (item.name == this.seleList[0].name) {
							item.selec = false
						}
					})
					this.seleList.splice(0,1)
				}
				this.seleList.push(val)
			}
		},
		focus (val) {
			if (navigator.userAgent.indexOf('Android')>-1 ||navigator.userAgent.indexOf('Adr')>-1) {
				// alert('安卓机')
				this.isFixed = val
			}
		},
		blur (val) {
			this.isFixed = val
		}
	}
}
</script>
<style lang="stylus" scoped>
.static
	position relative !important 
	top 120px
	padding 0 15px
#imgConsult
	// position absolute 
	// top 0
	// bottom 0
	// left 0 
	// right 0
	& >>> .weui-cell:before
		height 0
		border none
	& >>> .weui-cell
		padding 0
	.btnList
		height 74px
		overflow hidden
		.item
			margin-right 15px
			margin-bottom 15px
		.border 
			border 1px solid #DAC9A6
	& >>> .weui-textarea
		padding 10px 15px
	& >>> .weui-textarea-counter
		padding 5px 15px
	& >>> .weui-textarea::-webkit-input-placeholder
		/* WebKit browsers */
		color #ccc
		font-size 14px
	.btnBottom
		position fixed 
		bottom 15px
		.btn
			background #8B1616
			border-radius 0
	.maskContent
		position absolute
		top 0
		bottom 0
		left 0
		right 0
		input 
			width 80px
			font-size 16px
	.fade-enter-active{
		animation-name: slideInUp;
		animation-duration: .2s;
		animation-fill-mode: both
	}
	.fade-leave-active {
		animation-name: slideOutDown;
		animation-duration: .5s;
		animation-fill-mode: both
	}
	@keyframes slideInUp {
		0% {
			transform: translate3d(0,100%,0);
			visibility: visible
		}
		to {
			transform: translateZ(0)
		}
	}
	@keyframes slideOutDown {
		0% {
			transform: translateZ(0)
		}
		to {
			visibility: hidden;
			transform: translate3d(0,100%,0)
		}
	}
#imgConsult >>> .vux-cell-value
	color #333 
</style>