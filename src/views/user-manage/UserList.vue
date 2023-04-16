<template>
  <div>
    <el-page-header
      content="用户列表"
      icon=""
      title="用户管理"
    ></el-page-header>

    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="username" label="用户名" width="180" />
        <el-table-column label="头像" width="180">
          <template #default="scope">
            <div v-if="scope.row.avatar">
              <el-avatar
                :src="'http://localhost:3000' + scope.row.avatar"
                :size="50"
              ></el-avatar>
            </div>
            <div v-else>
              <el-avatar
                :size="50"
                :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
              />
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="role" label="角色">
          <template #default="scope">
            <el-tag
              class="ml-2"
              :type="scope.row.role === 1 ? 'success' : 'warning'"
              >{{ scope.row.role === 1 ? "管理员" : "编辑" }}</el-tag
            >
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)"
              >编辑</el-button
            >

            <el-popconfirm
              title="确认要删除吗?"
              confirm-button-text="确定"
              cancel-button-text="取消"
              @confirm="handleDelete(scope.row)"
            >
              <template #reference>
                <el-button size="small" type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog v-model="dialogVisible" title="编辑用户" width="30%" class="dialog">
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
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleEditConfirm">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
  
  <script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

const tableData = ref([]);
const dialogVisible = ref(false);

const userFormRef = ref();
let userForm = reactive({
  username: "",
  password: "",
  role: 2, //1-管理员 2-编辑
  introduction: ""
});
const userFormRules = reactive({
  username: [{ required: true, message: "请输入名字", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  role: [{ required: true, message: "请选择权限", trigger: "blur" }],
  introduction: [{ required: true, message: "请输入简介", trigger: "blur" }],
});
const options = [
  { value: 1, label: "管理员" },
  { value: 2, label: "编辑" },
];

onMounted(() => {
  getTableData();
});

const getTableData = async () => {
  const res = await axios.get("/adminapi/user/list");
  tableData.value = res.data.data.result;
};

//编辑按钮的回调
const handleEdit = async (data) => {
  const res = await axios.get(`/adminapi/user/list/${data._id}`)
  // userForm = reactive(res.data.data.result[0])
  Object.assign(userForm,res.data.data.result[0])

  dialogVisible.value = true;
};

//删除按钮的回调
const handleDelete = async (data) => {
  const { _id } = data;
  await axios.delete(`/adminapi/user/list/${_id}`);
  getTableData();
};

//编辑里弹出框确认的回调
const handleEditConfirm = () =>{
  userFormRef.value.validate( async valid=>{
    if(valid){
      await axios.post('/adminapi/user/list/',userForm)
      getTableData();
      dialogVisible.value = false
    }
  })
}
</script>
  
  <style lang="scss" scoped>
.el-card {
  margin-top: 20px;
}
</style>