import axios from "axios";
import {VueAxios} from './axios'
import {message} from "ant-design-vue";
import storage from 'store'
import 'ant-design-vue/dist/antd.css'

// 创建axios实例
const request = axios.create({
    // Api 请求的默认前缀
    baseURL: window.g.baseUrl,
    timeout: 6000
})

// 异常拦截处理器
const errorHandler = (error) => {
    if (error.response) {
        if (error.response.status === 401) {
            message.error('授权验证失败')
            // token 验证失败
            const token = storage.get('Access-Token')
            if (token) {
                storage.remove('Access-Token')
            }
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } else {
            message.error(error.response.statusText)
        }
    }
    return Promise.reject(error)
}

request.interceptors.request.use(config => {
    const token = storage.get('Access-Token')
    // 如果token 存在
    // 让每个请求携带自定义 token
    if (token) {
        config.headers['Access-Token'] = token
    }
    return config
}, errorHandler)

request.interceptors.response.use((response) => {
    if ('success' in response.data) {
        if (!response.data.success) {
            message.error(response.data.message)
            return Promise.reject(response)
        } else {
            return response.data.data
        }
    } else {
        return response
    }
}, errorHandler)

const installer = {
    vm: {},
    install(app) {
        app.use(VueAxios, request)
    }
}

export default request

export {
    installer as VueAxios,
    request as axios
}