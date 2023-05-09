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

