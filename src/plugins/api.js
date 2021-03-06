import axios from './axios'
import {AJAX_BASE_CONFIG, ENV_CONFIG} from '@/config'

const bookApi = (service, postData, type) => {
	const url = type === '2' ? ENV_CONFIG.baseApi : ENV_CONFIG.HOST
	return axios.post(url, {
		service,
		...AJAX_BASE_CONFIG,
		...postData
	}).catch((err) => {
		return {data: {msg: err,code: -1}}
	})
}

export default bookApi