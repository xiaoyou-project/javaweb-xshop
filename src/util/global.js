import axios from 'axios'
import QS from 'qs' // 可以把对象转换为post请求中的对象

export default {
    install(Vue) {
        // 全局函数
        Vue.prototype.tools = {
            async requests(url, data, type) { // async 是异步
                try {
                    // 判断请求类型
                    if (type === 'get') { // await 请求是同步
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
        Vue.prototype.setCookie = setCookie;
        Vue.prototype.getCookie = getCookie;
        Vue.prototype.delCookie = delCookie;
    }
}
//获取cookie、
export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    // console.log("获取cookie,现在循环")
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        // console.log(c)
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//设置cookie,增加到vue实例方便全局调用
export function setCookie (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    // console.info(cname + "=" + cvalue + "; " + expires);
    document.cookie = cname + "=" + cvalue + "; " + expires;
    // console.info(document.cookie);
}

//删除cookie
export function delCookie (name) {
    this.setCookie(name, "", -1);
}
