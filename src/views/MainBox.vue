<template>
  <el-container>
    <SideMenu />
    <el-container direction="vertical">
      <TopHeader />
      <el-main>
      <router-view >
      </router-view>
    </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import SideMenu from "../components/mainbox/SideMenu.vue"
import TopHeader from "../components/mainbox/TopHeader.vue"

</script>

<style  lang="css" scoped>
.el-main{
  /* auto显示滚动条 */
    overflow: auto; 
    /* calc：指定元素的长度，动态计算长度值（允许对属性值进行动态计算）
       calc(100vh - 60px) 表示整个浏览器窗口高度减去60px的大小（这里减去60px是减去顶部header的） */
    height: calc(100vh - 60px);
}
</style>