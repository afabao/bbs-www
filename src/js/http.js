import axios from 'axios'//引入axios
import QS from 'qs'//引入qs模块，用来序列化post数据类型
import {Toast} from 'vant'
import store from 'vuex'


//环境切换
if(process.env.NODE_ENV == 'development'){
  axios.defaults.baseURL == ''
}else if(process.env.NODE_ENV == 'production'){
  axios.defaults.baseURL == ''
}

//设置请求超时
axios.defaults.timeout = 10000;

//post请求头设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

//请求拦截设置
axios.interceptors.request.use(
  config => {
    // 每次发送请求前判断token是否存在
    //如果存在，则统一在header上加上token
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    console.log('获取token')
    console.log(config)
    console.log(window.localStorage.token)
    config.headers.Authorization = window.localStorage.token;
    return config;
  },
  error => {
    alert(error)
    return Promise.error(error)
  }
)

//响应拦截设置
axios.interceptors.response.use(
  response=>{
    //如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if(response.status == 200){
      return Promise.resolve(response);
    }else{
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  error => {
    if(error.response.status){
      //TODO...返回非200的操作
    }
  }
)

//封装get/post请求
export function get(url,params){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err=>{
      reject(err.data)
    })
  })
}

export function post(url,params){
  return new Promise((resolve,reject) =>{
    axios.post(url,params)
      .then(res=>{
        resolve(res.data)
      })
      .catch(err=>{
        reject(err.data)
      })
  })
}



