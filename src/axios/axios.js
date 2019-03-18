import axios from 'axios'
import util from './../util/util'
import { Message } from 'iview'

const BASE_URL = `http://${util.api_ip}${util.api_locale}`
const TIME_OUT = 2 * 60 * 1000
const RETRY_COUNT = 2
const RETRY_DELAY_TIME = 1000

// 创建axios实例
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  },
  retry: RETRY_COUNT,
  retryDelay: RETRY_DELAY_TIME
})

// 请求队列
const queue = []

// 拼接请求的路径和方法，若相同则视为同名请求
const methods = config => {
  return `${config.url}_${config.method}`
}

// axios内置中断请求的方法
const cancelToken = axios.CancelToken

// 中断同名请求
const removeQueue = config => {
  for (let i in queue) {
    const task = queue[i]
    if (task.token === methods(config)) {
      task.cancel()
      queue.splice(i, 1)
    }
  }
}

// 请求的拦截器
instance.interceptors.request.use(config => {
  removeQueue(config)
  config.cancelToken = new cancelToken((c) => {
    queue.push({
      token: methods(config),
      cancel: c
    })
  })
  return config
}, err => {
  console.log(err)
  return Promise.reject(err)
})

// 响应的拦截器
instance.interceptors.response.use(undefined, err => {
  let config = err.config
  if (!config || !config.retry) return Promise.reject(err)
  config.__retryCount = config.__retryCount || 0
  if (config.__retryCount >= config.retry) {
    Message.error('网络连接失败，请刷新重试')
    return Promise.reject(err)
  }
  config.__retryCount += 1
  let backoff = new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, config.retryDelay)
  })
  return backoff.then(() => {
    return instance(config)
  })
})

export default instance