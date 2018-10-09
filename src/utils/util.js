import bookApi from '@/plugins/api.js'
import Login from './isLogin'

import { ENV_CONFIG } from '@/config/index'

class BaseUtil extends Login {
	constructor () {
		super()
		this.name = ENV_CONFIG.name
	}
	getVal (name) { // 获取本地永久存储
		let db = window.localStorage
		return JSON.parse(db.getItem(this.name + name))
	}

	setVal (name, value) {	//	存储数据
		let db = window.localStorage
		db.setItem(this.name + name, JSON.stringify(value))
	}

	getQstr  (name) { // 获取地址栏参数
		let reg = new RegExp('' + name + '=([^&]+?)(#|&|$)', 'i')
		let url = window.location.href
		let index = url.indexOf('?')
		let r = url.substr(index).match(reg)
		if (r != null) return unescape(r[1])
		return null
	}

	remove (name) {
    let db = window.localStorage
    db.removeItem(this.name + name)
	}

	setTitle (t) {	//	设置标题
    document.title = t
    var i = document.createElement('iframe')
    i.src = ''
    i.style.display = 'none'
    i.onload = () => {
			setTimeout(() => {
				i.remove()
			}, 9)
    }
    document.body.appendChild(i)
	}

	strConceal (str) {	//	隐藏身份证
    if (str.length > 7) {
			var start = str.substring(0, 3)
			var stop = str.substring(str.length - 4, str.length)
			var content = str.substring(3, str.length - 4)
			var content = content.replace(/./g, "*")
			str = start + content + stop
			return str
    } else {
      return str
    }
	}
	getAge = function (str) {    
		var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/) 
		if(r == null) return false;     
		var d = new Date(r[1], r[3]-1, r[4]);     
		if (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4])   
		{   
			var Y = new Date().getFullYear();   
			return((Y - r[1]) + "岁");   
		}   
		return("输入的日期格式错误！")  
	}   
	formatDate = function(now, state) {	//	获取年月日
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    if (month < 10) {
      month = '0' + month
    }
    if (date < 10) {
    	date = '0' + date
    }
    if (hour < 10) {
      hour = '0' + hour
    }
    if (minute < 10) {
      minute = '0' + minute
    }
    if (second < 10) {
      second = '0' + second
    }
    if (state == 1) {
      return year + "-" + month + "-" + date + " " + hour + ":" + minute
    } else if (state == 2) {
      return hour + ":" + minute
    } else if (state == 3) {
      return month + "-" + date
    } else if (state == 4) {
      return month + "-" + date + " " + hour + ":" + minute
    } else if (state == 5) {
      return year + '年' + (+month) + '月' + (+date) + '日'
    } else {
      return year + "-" + month + "-" + date
    }
	}

	week (number) {	//获取日期
    switch (number) {
			case 1:
				return '周一'
				break
			case 2:
				return '周二'
				break
			case 3:
				return '周三'
				break
			case 4:
				return '周四'
				break
			case 5:
				return '周五'
				break
			case 6:
				return '周六'
				break
			default:
				return '周日'
    }
	}
}

const util = new BaseUtil()

export default util