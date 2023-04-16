<template>
  <el-aside width="auto">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#2d3a4b"
      text-color="#fff"
      :collapse="$store.state.isCollapsed"
      :router="true"
      :default-active="route.fullPath"
    >
      <el-menu-item index="/index">
        <el-icon><home-filled color="white" /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/center">
        <el-icon><avatar color="white" /></el-icon>
        <span>个人中心</span>
      </el-menu-item>

      <el-sub-menu index="/user-manage" v-admin>
        <template #title>
          <el-icon><user-filled color="white" /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user-manage/addUser">添加用户</el-menu-item>
          <el-menu-item index="/user-manage/addlist">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <el-sub-menu index="/news-manage">
        <template #title>
          <el-icon><message-box color="white" /></el-icon>
          <span>新闻</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/news-manage/addNews">创建新闻</el-menu-item>
          <el-menu-item index="/news-manage/newsList">新闻列表</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <el-sub-menu index="/product-manage">
        <template #title>
          <el-icon><reading color="white" /></el-icon>
          <span>产品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/product-manage/addproduct"
            >添加产品</el-menu-item
          >
          <el-menu-item index="/product-manage/productlist"
            >产品列表</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import {
  HomeFilled,
  Avatar,
  UserFilled,
  MessageBox,
  Reading,
  Pointer,
} from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { useStore } from 'vuex'
const route = useRoute();
const store = useStore();

const vAdmin = {
  //指令一挂载的时候判断
  mounted(el) {
    //判断role=1时才显示，role=2时删掉节点
    console.log(el)
    if(store.state.userInfo.role !== 1 ){
      el.parentNode.removeChild(el)
    }
  },
}
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  .el-menu {
    height: 100vh;
    border: none !important; //去掉侧边栏的白色线
  }
}
</style>