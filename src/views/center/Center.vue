<template>
  <div>
    <el-page-header
      content="个人中心"
      icon=""
      title="致一科技后台管理系统"
    ></el-page-header>

    <el-row :gutter="20" class="el-row">
      <el-col :span="8">
        <el-card class="box-card">
          <el-avatar :size="80" :src="avatarUrl" />
          <h3>{{ store.state.userInfo.username }}</h3>
          <h5>{{ store.state.userInfo.role === 1 ? "管理员" : "编辑" }}</h5>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>个人信息</span>
            </div>
          </template>
          <!-- ref用于表单校验，rules是校验规则 -->
          <el-form
            ref="userFormRef"
            :model="userForm"
            :rules="userFormRules"
            label-width="120px"
            class="demo-ruleForm"
            status-icon
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="userForm.username" />
            </el-form-item>

            <el-form-item label="性别" prop="gender">
              <el-select
                v-model="userForm.gender"
                placeholder="保密"
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
              <Upload :avatar="userForm.avatar" @avatarChange="handleChange"/>     
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm()">更新</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { computed, ref, reactive } from "vue";
import { useStore } from "vuex";
import { ElMessage } from 'element-plus';
import upload from '@/utils/upload'
import Upload from '@/components/upload/Upload'
const store = useStore();

const avatarUrl = computed(() =>
  store.state.userInfo.avatar
    ? "http://localhost:3000"+store.state.userInfo.avatar
    : `https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png`
);

const { username, gender, introduction, avatar } = store.state.userInfo;
//表单校验
const userFormRef = ref();
const userForm = reactive({
  username,
  gender,
  introduction,
  avatar,
  file: null,
});
const userFormRules = reactive({
  username: [{ required: true, message: "请输入名字", trigger: "blur" }],
  gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
  introduction: [{ required: true, message: "请输入简介", trigger: "blur" }],
  avatar: [{ required: true, message: "请上传头像", trigger: "blur" }],
});
//性别选择
const options = [
  {
    value: 0,
    label: "保密",
  },
  {
    value: 1,
    label: "男",
  },
  {
    value: 2,
    label: "女",
  },
];

const handleChange = (file) => {
  //URL.createObjectURL创建URL对象
  userForm.avatar = URL.createObjectURL(file);
  userForm.file = file;
  console.log(userForm.avatar,'center')
};

//更新提交
const submitForm = () => {
  userFormRef.value.validate(async (valid) => {
    if (valid) {
      //在这里是用了自己封装的方法upload，传递了一个地址和表单数据
      const res = await upload("/adminapi/user/upload",userForm)
      //在upload函数的成功回调中已经.data了一次，所以这里不需要res.data.data就可以拿到数据
          if(res.ActionType==="ok"){
            store.commit('changeUserInfo',res.data)
            ElMessage.success('更新成功！');
          }
    }
  });
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-top: 20px;
  .box-card {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>