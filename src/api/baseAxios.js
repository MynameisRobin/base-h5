
import Axios from './axios'
import { Toast  } from 'vant';
class MApi {
	constructor({
		serviceUrl,
		method = 'get',
		config = {},
		transformOptions}) {
		this.method = method;
		this.serviceUrl = serviceUrl;
		this.options = Object.assign({}, config, {url: serviceUrl, method});
		this.transformOptions = transformOptions;
	}

	exec(params) {
		return this.request(params);
	}

	request(params) {
		let options;
		if (this.method === 'get') {
			options = {
				params
			}
		} else {
			options = {
				data: params
			}
		}
		const requestOptions = Object.assign({}, this.options, options);
		return new Promise((resolve, reject) => {
      const axiosOptions = this.transformOptions ? this.transformOptions(requestOptions) : requestOptions;
			Axios(axiosOptions).then(async (res) => {
				const { code, message } = res;
				if (code === 200) {
					resolve(res)
				} else {
					Toast.error(message || '网络开小差，请稍后再试！');
					reject(res)
				}
			}).catch(error => {
				Toast.error('网络开小差，请稍后再试！');
				reject(error);
			})
		})
	}
}

export default MApi;
