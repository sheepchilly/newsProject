<template>
  <div>
    <el-page-header
      content="添加用户"
      icon=""
      title="用户管理"
    ></el-page-header>

    <el-card>
      <el-form
      ref="userFormRef"
      :model="userForm"
      :rules="userFormRules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userForm.username" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="userForm.password" type="password" />
      </el-form-item>

      <el-form-item label="角色" prop="role">
        <el-select
          v-model="userForm.role"
          placeholder="Select"
          style="width: 100%"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="个人简介" prop="introduction">
        <el-input v-model="userForm.introduction" type="textarea" />
      </el-form-item>

      <el-form-item label="头像" prop="avatar">
        <!-- 把头像地址给子组件传递过去 -->
        <Upload :avatar="userForm.avatar" @avatarChange="handleChange" />
      </el-form-item>

      <el-form-item>
              <el-button type="primary" @click="submitForm()">提交</el-button>
      </el-form-item>
    </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Upload from '@/components/upload/Upload'
import upload from '@/utils/upload'
import {useRouter} from 'vue-router'
const router = useRouter()

const userFormRef = ref();
const userForm = reactive({
  username: "",
  password: "",
  role: 2, //1-管理员 2-编辑
  introduction: "",
  avatar: "",
  file: null,
  gender:0
});
const userFormRules = reactive({
  username: [{ required: true, message: "请输入名字", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  role: [{ required: true, message: "请选择权限", trigger: "blur" }],
  introduction: [{ required: true, message: "请输入简介", trigger: "blur" }],
  avatar: [{ required: true, message: "请上传头像", trigger: "blur" }],
});
const options = [
  { value: 1, label: "管理员" },
  { value: 2, label: "编辑" },
];

const handleChange = (file) => {
  userForm.avatar = URL.createObjectURL(file);
  userForm.file = file;
};

const submitForm = ()=>{
  userFormRef.value.validate(async valid=>{
    if(valid){
      //提交数据到后端 (提交后要跳转页面，所以用async和await，因为await后面的代码都是异步的)
      await upload('/adminapi/user/add',userForm)

      router.push( `/user-manage/addlist`)
    }
  })
}

</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 20px;
}
.demo-ruleForm{
  margin-top: 20px;
}
</style>