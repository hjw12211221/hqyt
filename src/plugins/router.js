import Vue from 'vue'
import Router from 'vue-router'
import {ROUTER_DEFAULT_CONFIG} from '@/config'
import ROUTES from '@/routes'

// 路由默认配置
import {routerBeforeEachFunc, routerAfterEachFunc} from '@/config/interceptors/router'
Vue.use(Router)

// 注入默认配置和路由表
const routerInstance = new Router({
	...ROUTER_DEFAULT_CONFIG,
	routes: ROUTES
})

// 注入拦截器
routerInstance.beforeEach(routerBeforeEachFunc)
routerInstance.afterEach(routerAfterEachFunc)
export default routerInstance