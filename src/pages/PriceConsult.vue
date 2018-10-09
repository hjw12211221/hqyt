<template lang="jade">
#priceConsult
	.px3.pb3
		sele-user
	.bg.py1
	.px3(v-if="!form")
		router-link.flex.align-center(to="/keptList")
			.flex-max.py2.c3.f16 选择咨询科室
			.mr1.c9 {{keptName}}
			i.c9(class="iconfont icon icon-xiangyou-copy")
		.flex.wrap.align-center.btnList.align-center
			.w25.mb3.item.text-center(v-for="(x,index) in diaseList",@click="sele(x,index)")
				span.f14.omit.c9(:class="keptName==x.name ? 'bg-primary white border-primary':'border'") {{x.name}}
	.px3(v-else)
		.py2.c3.f16 选择咨询体质
		.flex.wrap.align-center.btnList.align-center
			.w25.mb3.item.text-center(v-for="(x,index) in List",@click="sele(x,index)")
				span.f14.omit.c9(:class="testName==x.name ? 'bg-primary white border-primary':'border'") {{x.name}}
			//- .item.c9.px1(@click="sele(x,index)",:class="x.selec ? 'bg-primary white border-primary':'border'",v-for="(x,index) in diaseList") {{x.name}}
	.bg.py1
	XTextarea(:max=200,show-counter=true,:height=130,placeholder="详细描述您的病情症状，曾经做过什么检查、用药情况，目前病情是否加重还是缓解，想要获得医生的什么帮助（最少输入10个字）")
	.bg.py1
	.py1.px3.cc.f12 为保护您的隐私，请不要输入姓名、手机号等隐私信息
	.py2.px3.flex.align-center
		.imgBox.mr2
			img(src="../assets/images/add.png")
		.imgRight
			.c6.f14 添加照片（非必选）
			.f12.c9.my2 请上传病情或者检查图片，方便医生确认
			.f12.c9 照片尽自己和医生可见
	.bg.py1
	.py2.px3
		div
			span.f16.c3 选择咨询科室  
			span.f16.c9 最多人选  
			span.f16.c9 快速抢单
		.flex.py3
			.itemPrice.w25.text-center
				span(@click="selePrice(1)",:class="price==5 ? 'bg-primary white':''") 5元
			.itemPrice.w25.text-center
				span(@click="selePrice(2)",:class="price==10 ? 'bg-primary white':''") 10元
			.itemPrice.w25.text-center
				span(@click="selePrice(3)",:class="price==30 ? 'bg-primary white':''") 30元
			.itemPrice.w25.text-center
				span(@click="selePrice(4)",:class="price==50 ? 'bg-primary white':''") 50元
		.text-center.c9.f12.mt1.mb2 最多人选  快速抢单
	router-link.submit.flex.w10(to="/pay")
		.px3.w10
			.btn.w10.white 提交
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
			age: 22,
			diaseList: [
				{selec: false,name:'内科'},
				{selec: false,name:'外科'},
				{selec: false,name:'消化内科'},
				{selec: false,name:'神经内科'},
				{selec: false,name:'妇科'},
				{selec: false,name:'男科'},
				{selec: false,name:'皮肤科'},
				{selec: false,name:'呼吸科'}
			],
		List: [
			{selec: false,name:'平和型'},
			{selec: false,name:'气虚型'},
			{selec: false,name:'阳虚型'},
			{selec: false,name:'阴虚型'},
			{selec: false,name:'痰湿质'},
			{selec: false,name:'湿热型'},
			{selec: false,name:'气郁型'},
			{selec: false,name:'血瘀质'},
			{selec: false,name:'特禀质'}
		],
		testName: '',
		keptName: this.$store.state.keptName || '请选择症状',
		price: 5,
		form: this.$util.getQstr('from') == 'tesing' ? true : false
		}
	},
	mounted () {
		this.initDate()
	},
	methods: {
		initDate () {
			if (this.$util.getQstr('num')) {
				this.testName = this.List[this.$util.getQstr('num')].name
			}
		},
		sele (val,index) {
			if (this.form) {
				if (this.testName == val.name) {
				this.testName = ''
				} else {
					this.testName = val.name
				}
			} else {
				if (this.keptName == val.name) {
				this.keptName = '请选择科室'
				} else {
					this.keptName = val.name
				}
			}	
		},
		selePrice (num) {
			if (num ==1) {
				this.price = 5
			} else if (num ==2) {
				this.price = 10
			} else if (num ==3) {
				this.price = 30
			} else if (num ==4) {
				this.price = 50
			}
		}
	}
}
</script>
<style lang="stylus" scoped>	
#priceConsult
	position absolute 
	top 0
	bottom 0
	left 0 
	right 0
	& >>> .weui-cell
		padding 0
	.btnList
		.item
			span
				display inline-block
				width 76px
				height 25px
				line-height 25px
				border 1px solid #DAC9A6
				@media screen and (max-width: 320px){
					width 68px
				}
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
	.submit
		.btn
			background #8B1616
			border-radius 0
	.btnBottom
		position absolute 
		bottom 15px
		left 0
		right 0
		.btn
			background #8B1616
			border-radius 0
	.maskContent
		position fixed
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
#priceConsult >>> .vux-cell-value
	color #333 
.itemPrice
	span 
		display inline-block
		width 40px
		height 40px
		line-height 40px
		border 1px solid #979797
		border-radius 50%
		color #979797
</style>