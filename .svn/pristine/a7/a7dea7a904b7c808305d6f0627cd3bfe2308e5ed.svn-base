import bookApi from '@/plugins/api.js'
import { ENV_CONFIG } from '@/config/index'

class Jsdk {
	constructor () {
		this.wxid = ENV_CONFIG.wxid
		this.AppID = ENV_CONFIG.AppID
		this.baseApi = ENV_CONFIG.baseApi
	}

	jssdk (share) {	//	分享
    bookApi('ddyy.system.wechat.jsapiticket.get', {
      appid: util.wxid,
      reqUrl: share.link
    }, '2').then((res) => {
			var config = res.data.obj
			wx.config(config)
			wx.ready(function() {
				//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
				wx.onMenuShareTimeline({
					title: share.title, // 分享标题
					link: share.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: share.imgUrl, // 分享图标
					success: function() {
							// 用户确认分享后执行的回调函数
					},
					cancel: function() {
							// 用户取消分享后执行的回调函数
					}
				})
				//获取“分享给朋友”按钮点击状态及自定义分享内容接口
				wx.onMenuShareAppMessage({
					title: share.title, // 分享标题
					desc: share.desc, // 分享描述
					link: share.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: share.imgUrl, // 分享图标
					type: 'link', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function() {
							// 用户确认分享后执行的回调函数
					},
					cancel: function() {
							// 用户取消分享后执行的回调函数
					}
				})
				// 获取“分享到QQ”按钮点击状态及自定义分享内容接口
				wx.onMenuShareQQ({
					title: share.title, // 分享标题
					desc: share.desc, // 分享描述
					link: share.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: share.imgUrl, // 分享图标
					success: function() {
							// 用户确认分享后执行的回调函数
					},
					cancel: function() {
							// 用户取消分享后执行的回调函数
					}
				})
				// 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
				wx.onMenuShareQZone({
					title: share.title, // 分享标题
					desc: share.desc, // 分享描述
					link: share.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: share.imgUrl, // 分享图标
					success: function() {
							// 用户确认分享后执行的回调函数
					},
					cancel: function() {
							// 用户取消分享后执行的回调函数
					}
				})
			})
			wx.error(function(res) {
					// util.jssdk(share)
					// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
			})
    })
	}

	initData () {	//	授权
    let URI = window.location.href
		let REDIRECT_URI = encodeURIComponent(URI)
		let _this = this
    let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + _this.wxid + '&redirect_uri=' + REDIRECT_URI + '&response_type=code&scope=snsapi_userinfo&state=STATE&component_appid=' + _this.AppID + '&#wechat_redirect'
    if (window.navigator.userAgent.toLocaleLowerCase().indexOf('micromessenger') >= 0) {
			let code = _this.getQstr('code')
			if (code) {
				bookApi('ddyy.book.user.login.mpwechat', {
					code: code,
					appId: _this.wxid
				}).then((res) => {
					if (res.data.code == 0) {
						_this.setVal('weChat', res.data.obj)
							ocation.replace(URI)
					} else {
						location.href = url
					}
				})
			} else {
				location.href = url
			}
    } else {
			// if (_this.getQstr('debug') == 1) {
			// 不用微信打开
			var app_user = {
				"createTime": 1490327245417,
				// "openid": "o_DBNt1iDJea_JgpWUrxwxzOQWG4",
				"openid": "o7ZJjv95-qwVSpKeJ5OewBS_L3cM",
				"userAreaname": "中国 湖北 潜江",
				"userAvatar": "http://wx.qlogo.cn/mmopen/o8hX2eDaLnSLx780DXgj1s71HOWPtdMEhExtA5NtHZBEXorQ3pa7OhR1NY9OmW3KL7G1Z4kW8QOf0ySyZG8qHHNIYX1tXfYP/0",
				"userId": 15,
				"userNickname": "请勿打扰",
				"userSex": "1"
			}
			_this.setVal('weChat', app_user)
					// }
					// location.href = url
    }
	}
}
export default Jsdk