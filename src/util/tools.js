import Cookies from 'js-cookie'

const tools = {}

// 设置cookie
tools.SetCookie = (key, value = '') => {
  Cookies.set(key, value)
}

// 读取cookie
tools.GetCookie = (key) => {
  if (Cookies.get(key)) {
    return Cookies.get(key)
  } else {
    return ''
  }
}

// 设置sessionStorage
tools.SetItem = (key, value = '') => {
  let str = JSON.stringify(value)
  sessionStorage.setItem(key, str)
}

// 读取sessionStorage
tools.GetItem = (key) => {
  let item = sessionStorage.getItem(key)
  if (item) {
    return JSON.parse(item)
  } else {
    return false
  }
}

// 将函数置空
tools.SetEmptyFunc = () => {
  return false
}

export default tools
