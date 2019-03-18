import ajax from '@/axios/libs'

/**
 * index
 */
// 同步功能获取服务器数据
const GET_OGGSERVERID = data => {
  return ajax('/ogg_serve/get/id', 'post', data)
}

const GET_OGGSERVERINFO = data => {
  return ajax('/ogg_serve/get/info', 'post', data)
}

// 同步功能获取域数据
const GET_REGOINSERVER = () => {
  return ajax('/regoin_group/get', 'get')
}

// 同步功能获取服务器状态数据
const GET_OGGSTATICS = data => {
  return ajax('/ogg_group/statics', 'get', data)
}

// 同步功能获取服务器系统数据
const GET_OGGSYSTEM = data => {
  return ajax('/system/dir/statics', 'get', data)
}

// 同步功能监控进程检验
const CHECK_ENTEROGG = data => {
  return ajax('/ogg/serve/enter/check', 'post', data)
}

// 同步功能获取单个服务器参数
const GET_ONESERVER = data => {
  return ajax('/ogg_serve/get/one', 'get', data)
}

// 同步功能删除服务器
const DELETE_SERVER = data => {
  return ajax('/ogg_serve/delete', 'post', data)
}

// index-server-config
// 同步功能新建连接测试
const CHECK_OGGSERVER = data => {
  return ajax('/ogg/serve/check', 'post', data)
}

// 同步功能新建服务
const ADD_OGGSERVER = data => {
  return ajax('/ogg_serve/add', 'post', data)
}

// 同步功能修改服务
const PUT_OGGSERVER = data => {
  return ajax('/ogg_serve/put', 'post', data)
}

// 同步功能获取所有进程
// const GET_INFOALL = async function (data) {
//   store.commit('changeRequestUrl')
//   let res = await ajax('/info/all/data/id', 'post', { user_id: data.user_id })
//   store.commit('changeRequestUrl', false)
//   return ajax('/info/all/data/info', 'post', Object.assign(data, { info_all_has: res }))
// }

// 同步功能获取进程域
const GET_REGOIN = data => {
  return ajax('/regoin_group/get', 'get', data)
}

// 同步功能获取进程域下的进程
// const GET_REGOININFO = async function (data) {
//   store.commit('changeRequestUrl')
//   let res = await ajax('/info/all/regoin/id', 'post', { user_id: data.user_id })
//   store.commit('changeRequestUrl', false)
//   return ajax('/info/all/regoin/info', 'post', Object.assign(data, { info_all_has: res }))
// }

// 同步功能刷新进程
const REFRESH_INFO = data => {
  return ajax('/info_all/refresh', 'post', data)
}

// 同步功能新建进程
const ADD_GROUP = data => {
  return ajax('/group/new', 'post', data)
}

// 同步功能进程读取配置文件
const READ_GROUPSET = data => {
  return ajax('/group_arg/set/read', 'get', data)
}

// 同步功能进程保存配置文件
const SAVE_GROUPSET = data => {
  return ajax('/group_arg/set/put', 'post', data)
}

// 同步功能进程恢复配置文件
const RECOVER_GROUPSET = data => {
  return ajax('/group_arg/set/recover', 'post', data)
}

// 同步功能进程下载表格
const DOWNLOAD_GROUPTABLE = data => {
  return ajax('/download/table', 'get', data, 'blob')
}

// 同步功能进程下载表格模板
const DOWNLOAD_TABLETEMP = data => {
  return ajax('/download/template', 'get', data, 'blob')
}

// 同步功能进程获取进程日志
const GET_GROUPREPORT = data => {
  return ajax('/view/report', 'post', data)
}

export default {
  GET_OGGSERVERID,
  GET_OGGSERVERINFO,
  GET_REGOINSERVER,
  GET_OGGSTATICS,
  GET_OGGSYSTEM,
  CHECK_ENTEROGG,
  GET_ONESERVER,
  DELETE_SERVER,
  CHECK_OGGSERVER,
  ADD_OGGSERVER,
  PUT_OGGSERVER,
  // GET_INFOALL,
  GET_REGOIN,
  // GET_REGOININFO,
  REFRESH_INFO,
  ADD_GROUP,
  READ_GROUPSET,
  SAVE_GROUPSET,
  RECOVER_GROUPSET,
  DOWNLOAD_GROUPTABLE,
  DOWNLOAD_TABLETEMP,
  GET_GROUPREPORT
}
