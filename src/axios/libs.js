import instance from './axios'

// 防抖函数
// const debounce = fn => {
//   let timer = null
//   return function() {
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn.apply(this, arguments)
//     }, 200)
//   }
// }

// 封装get/post
async function ajax (url, method, params = {}, type = 'json') {
  let loaddata = method.toLocaleLowerCase() === 'get' ? 'params' : 'data'
  try {
    let res = await instance({
      method,
      url,
      [loaddata]: params,
      responseType: type
    })
    return new Promise(resolve => {
      resolve(res.data)
    })
  } catch (e) {
    console.log(e)
  }
}

export default ajax
