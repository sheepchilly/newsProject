const routes=[
    {
        path:'/index',
        component:()=>import('@/views/home/Home.vue')
    },
    {
        path:'/center',
        component:()=>import('@/views/center/Center.vue')
    },
    {
        path:'/user-manage/adduser',
        component:()=>import('@/views/user-manage/UserAdd.vue'),
        requireAdmin:true
    },
    {
        path:'/user-manage/addlist',
        component:()=>import('@/views/user-manage/UserList.vue'),
        requireAdmin:true
    },
    {
        path:'/news-manage/addnews',
        component:()=>import('@/views/news-manage/NewsAdd.vue')
    },
    {
        path:'/news-manage/newslist',
        component:()=>import('@/views/news-manage/NewsList.vue')
    },
    {
        path:'/news-manage/editnews/:id',
        component:()=>import('@/views/news-manage/NewsEdit.vue')
    },
    {
        path:'/product-manage/addproduct',
        component:()=>import('@/views/product-manage/ProductAdd.vue')
    },
    {
        path:'/product-manage/productlist',
        component:()=>import('@/views/product-manage/ProductList.vue')
    },
    {
        path:'/product-manage/editproduct/:id',
        component:()=>import('@/views/product-manage/ProductEdit.vue')
    },
    {
        //重定向到/index
        path:'/',
        redirect:'/index'
    },
    {
        //用户瞎输入的话显示notFound页面
        //pathMatch是一个用来指定路由匹配策略的字符串。可选项有 prefix（默认值）和 full。
        path:'/:pathMatch(.*)*',
        name:"Notfound",
        component:()=>import('@/views/notfound/NotFound.vue')
    }
]

export default routes