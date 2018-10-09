import Vue from 'vue'
import {CONSOLE_REQUEST_ENABLE, CONSOLE_RESPONSE_ENABLE} from '../index.js'

// 请求成功钩子函数
export function requestSuccessFunc (requestObj) {
	CONSOLE_REQUEST_ENABLE && console.info('requestInterceptorFunc', `url: ${requestObj.url}`, requestObj)
	// 自定义请求拦截逻辑，可以处理权限，请求发送监控等
	// ...
	return requestObj
}

// 请求失败钩子函数
export function requestFailFunc (requestError) {
	// 自定义发送请求失败逻辑，断网，请求发送监控等
	// ...
	return Promise.reject(requestError)
}

// 响应成功钩子函数
export function responseSuccessFunc (responseObj) {
	CONSOLE_RESPONSE_ENABLE && console.info('responseInterceptorFunc', `headers: ${JSON.stringify(responseObj.headers)}`, responseObj)
	// 自定义响应成功逻辑，全局拦截接口，根据不同业务做不同处理，响应成功监控等
	const data = responseObj.data
	const {code} = data
	switch (code) {
	// 如果业务成功，直接进成功回调 ESlint你赢了
	case '0':
		return responseObj
	default:
		Vue.prototype.$setHint({val: data.msg})
		return Promise.reject(data.msg)
	}
}

// 响应失败钩子函数
export function responseFailFunc (responseError) {
	// 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理
	// ...
	return Promise.reject(responseError)
}