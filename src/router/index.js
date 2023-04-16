import { createRouter, createWebHashHistory } from 'vue-router'
import RoutesConfig from './config'
import store from '../store/index'
const routes = [
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/Login.vue')
  },
  {
    path:'/mainbox',
    name:'mainbox',
    component:()=>import('@/views/MainBox.vue')
  }
  //mainbox的嵌套路由，后面根据动态权限添加
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//全局前置路由守卫:在每次路由跳转之前都会执行这个函数
router.beforeEach((to,from,next)=>{
  if(to.name=="login"){
    next();
  }else{
    //未授权，就重定向到login
    if(!localStorage.getItem("token")){
      next({
        path:'/login'
      })
    }else{
      //这里的if是判断是不是第一次进来
      if(!store.state.isGetterRouter){
        //删除所有的嵌套路由（删掉mainbox路由）
        router.removeRoute("mainbox")

        ConfigRouter();
        next({
        path:to.fullPath //fullPath是完整路径，可以识别当前页面路由的完整地址，当地址发生改变(包括参数改变)则重新渲染页面
      })
      }else{
        //如果授权（已经登录过了） next()
        next()
      }
    }
  }
})

//动态创建路由
const ConfigRouter = ()=>{
  //hasRoute() 检查路由是否存在
  if(!router.hasRoute("mainbox")){
    router.addRoute({
        path:'/mainbox',
        name:'mainbox',
        component:()=>import('@/views/MainBox.vue')
    })
  }

  //用forEach遍历把路由权限导入进来（和上面的写法是一样的，只不过把路由封装到了config文件夹下就不用一个一个写了）
  RoutesConfig.forEach(item=>{
    checkPromission(item) && router.addRoute('mainbox',item)
  })
  //改变isGetterRouter=true,用commit向mutation提交数据
  store.commit('changeGetterRouter',true);
}

//鉴权方法
const checkPromission = (item)=>{
  if(item.requireAdmin){
    //判断当前用户的vuex中role信息是否为 1-管理员
    return store.state.userInfo.role === 1
  }
  return true
}

export default router
