import bookApi from '@/plugins/api.js'
import Jsdk from './jsdk'

import { ENV_CONFIG } from '@/config/index'

class Login extends Jsdk{
	constructor () {
		super()
		this.loginURL = ENV_CONFIG.loginURL
	}
	isLogin (url, val, cb) {	//	是否登录
		if (this.getVal('userInfo')) {
			return false
		}
    if (this.getQstr('patientId')) {
			bookApi('ddyy.book.patient.get.patid', {
					patientId: this.getQstr('patientId')
			}).then((res) => {
				if (res.data.code == 0) {
					var data = res.data.bookPatient
					if (data.patientCardNo) {
						data.patientAge = new Date().getFullYear() - data.patientCardNo.substring(6, 10)
					} else {
						data.patientAge = 0
					}
					// 信息是否完善
					if (!data.patientName) {
						val.isShow = true
					}
					this.setVal('userInfo', data)
					if (val) {
						val.userInfo = data
					}
					cb && cb()
				} else {
					val.$store.commit('setHint', {
						status: true,
						val: res.data.msg
					})
				}
				val.$store.state.isLoding = false
			})
    } else if (!this.getVal('userInfo')) {
        var url = encodeURIComponent(url)
        location.replace(this.loginURL + url)
    } else {
			val.userInfo = this.getVal('userInfo')
    }
	}
	runToLogin (val, cb) {
		this.isLogin(location.href, val, cb)
	}
}

export default Login