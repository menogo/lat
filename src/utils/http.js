import axios from 'axios'
import weui from 'weui.js'

let loading = null

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API, // node 环境的不同，对应不同的API

  // 默认请求方式
  method: 'get',

  // 请求的超时时间
  timeout: 5000,

  // 设置默认请求头，使 post 请求发送的是 formdata 格式数据
  // Axios 的 header 默认的 Content-Type 是 'application/json;charset=UTF-8',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',

    // 如果后端需要使用 formdata 格式传输需要改成：
    // "Content-Type": "application/x-www-form-urlencoded"
  },

  // 允许请求携带 cookie
  // 如果后端设置了：`Access-Control-Allow-Origin: *`
  // Axios 设置 `withCredentials: true` 会报跨域出错，但是接口还是可以请求成功的！
  // 应该设为 `withCredentials: false`
  withCredentials: false,
})

// 发送请求前处理 request 的数据
axios.defaults.transformRequest = [
  function(data) {
    let newData = ''
    for (let k in data) {
      newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
    }
    return newData
  },
]

// request 拦截器
// 请求前起 Loading 也在这里处理
service.interceptors.request.use(
  config => {
    // 发送请求之前，要做的业务

    // 发起 Loading
    loading = weui.loading('加载中...')
    console.log('before send =>', config)

    return config
  },
  error => {
    // 错误处理代码

    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    // 数据响应之后，要做的业务
    // console.log('ajax compelete =>', response)

    // 关闭 Loading
    loading.hide()
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
