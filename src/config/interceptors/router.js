import store from '@/store/index'
import {setTitle} from '@/utils/common'

// 全局前置钩子函数
export function routerBeforeEachFunc (to, from, next) {
	store.commit('updateLoadingStatus', {isLoading: true})
	if (to.meta.title) {
		setTitle(to.meta.title)
	}
	next()
}

// 全局后置钩子函数
export function routerAfterEachFunc (to, from) {
	store.commit('updateLoadingStatus', {isLoading: false})
}