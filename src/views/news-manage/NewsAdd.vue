<template>
  <div>
    <el-page-header
      content="创建新闻"
      icon=""
      title="新闻管理"
    ></el-page-header>

    <el-card>
      <el-form
      ref="newsFormRef"
      :model="newsForm"
      :rules="newsFormRules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="newsForm.username" />
      </el-form-item>

    </el-form>
  </el-card>

  </div>
</template>

<script setup>
import {ref,reactive} from 'vue'

const newsFormRef = ref()
const newsForm = reactive({
  title:"",
  content:"",
  category:1, //1.最新动态 2典型案例 3通知公告
  cover:"",
  file:null
})

</script>

<style lang="scss" scoped>

</style>