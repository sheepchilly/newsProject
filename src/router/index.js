import {createRouter,createWebHashHistory} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [
    {
        path:"/",
        name:'home',
        component:()=>import('@/views/Home.vue')
    },
    {
        path:"/news",
        name:'news',
        component:()=>import('@/views/News.vue')
    },
    {
        path:"/news/:id",
        name:'new',
        component:()=>import('@/views/New.vue')
    },
    {
        path:"/product",
        name:"product",
        component:()=>import('@/views/Product.vue')
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

//全局路由守卫用来加载进度条
router.beforeEach((to,from,next)=>{
    NProgress.start();
    next();
})

router.afterEach((to,from,next)=>{
    NProgress.done()
})

export default router