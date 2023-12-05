import axios, { AxiosResponse } from 'axios'

// import { request } from 'utils/request'
// console.log('---------')

axios.request({
  method: 'GET'
})
// 1.模拟Get请求
axios
  .get('http://123.207.32.32.8000/home/multidata')
  .then((res: AxiosResponse<unknown, unknown>) => {
    console.log('res', res)
  })
// //2. get请求并且传入参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'cc',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// // 3.post请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'cc',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// 4.axios的配置选项 ==全局的配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}
// 单独的配置
axios
  .get('/get', {
    params: {
      name: 'cc',
      age: 18
    },
    timeout: 5000,
    headers: {}
  })
  .then((res) => {
    console.log(res.data)
  })

// 3.post请求
axios
  .post('/post', {
    data: {
      name: 'cc',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// 4.axios.all  ===>多个请求一并返回
axios
  .all([
    axios.get('/get', { params: { name: 'cc', age: 18 } }),
    axios.post('/post', { data: { name: 'cc', age: 18 } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })

//axios拦截器
// fn1：请求发送成功
// fn2:请求发送失败会执行的函数
// interceptors 拦截器
axios.interceptors.request.use(
  (config) => {
    // config.url = '/get'
    //拦截的一些操作
    // 给请求添加token
    // isLoading动画
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)
// 数据响应成功(服务器正常返回了数据)
axios.interceptors.response.use(
  (res) => {
    // 响应成功的拦截
    return res.data
  },
  (err) => {
    // 服务器响应失败
    return err
  }
)

// new Promise<string>((resolve, reject) => {
//   resolve('123')
// }).then((res) => {
//   console.log('res', res.length)
// })
