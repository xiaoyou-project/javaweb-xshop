import axios from 'axios'
import QS from 'qs'

export default {
    install(Vue) {
        // 全局函数
        Vue.prototype.tools = {
            async requests(url, data, type) {
                try {
                    // 判断请求类型
                    if (type === 'get') {
                        return (await axios.get(url, { params: data })).data
                    } else if (type === 'post') {
                        return (await axios.post(url, QS.stringify(data), { headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' }})).data
                    } else {
                        return null
                    }
                } catch (e) {
                    return null
                }
            }
        }
        // 全局变量
        Vue.prototype.G = {
            SERVER: 'http://127.0.0.1:2333'
        }
    }
}
