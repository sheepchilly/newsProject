import axios from 'axios'


//请求拦截器
  axios.interceptors.request.use(config=>{
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}` //必须要加Bearer,因为这是JWT的规范

    return config;
  },(err)=>{
    //判断status
    const {status} = err.response
    if(status === 401){
      //js原生的重定向
      window.location.href="#/login";
    }
    console.log(err.response)
    return Promise.reject(err);
  })

  //响应拦截器
  axios.interceptors.response.use(response=>{
    const {authorization} = response.headers
    localStorage.setItem('token',authorization)
    return response
  },err=>{
    console.log(err.response)
    return Promise.reject(err)
  })


// #regin;
//   // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   });
// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 2xx 范围内的状态码都会触发该函数。
//     // 对响应数据做点什么
//     return response;
//   }, function (error) {
//     // 超出 2xx 范围的状态码都会触发该函数。
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   });
//#endregin;