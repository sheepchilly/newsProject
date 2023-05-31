<template>
  <div class="navbar">
    <img src='@/assets/icon/company.png' class="bannerImg">

    <el-menu
    :default-active="route.fullPath"
    :router = "true"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    style="width:100%;"
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/news">新闻中心</el-menu-item>
    <el-menu-item index="/product">产品与服务</el-menu-item>

    <el-dropdown>
    <div class="right">致一科技官网</div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>加入我们</el-dropdown-item>
        <el-dropdown-item @click="handleClick">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  </el-menu>

  </div>
</template>

<script setup>
import {useRoute,useRouter} from 'vue-router'
const route = useRoute()
const router = useRouter()

const handleClick =()=>{
    router.push('Login')
}

const handleSelect = ()=>{
  
}
</script>


<style lang="scss" scoped>
.navbar{
  background: white;
    position:sticky;
    top:0px;
    z-index:1000;
    overflow:hidden;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    .bannerImg{
      width:30px;
      height:30px;
      margin: 0 20px 0 50px;
      
    }
}
.right{
    position: fixed;
    top: 0;
    right: 20px;
    width: 100px;
    height: 60px;
    line-height: 60px;
}
</style>