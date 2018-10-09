import Vue from 'vue'

// 引入插件
import App from './App'
import FastClick from 'fastclick'
import router from '@/plugins/router'
import component from '@/plugins/component'
import inject from '@/plugins/inject'
import store from '@/store'

Vue.use(inject)
Vue.use(component)
Vue.config.productionTip = false

// 添加 Fastclick 移除移动端点击延迟
FastClick.attach(document.body)
const app = new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
// Object.getPrototypeOf(app).$setHint = function (obj) {
// 	app.$store.commit('setHint', obj)
// }