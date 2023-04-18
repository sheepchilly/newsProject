<template>
  <div>
    <el-page-header
      content="编辑产品"
      icon=""
      title="产品管理"
    ></el-page-header>

    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="产品名称" width="300" />

          <el-table-column prop="introduction" label="产品描述" width="300"  class="intro"/>

        <el-table-column label="更新时间" width="180">
          <template #default="scope">
            {{ formatTime.getTime(scope.row.editTime) }}
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template #default="scope">
            <el-button :icon="Edit" circle @click="handleEdit(scope.row)"/>

            <el-popconfirm
              title="确认要删除吗?"
              confirm-button-text="确定"
              cancel-button-text="取消"
              @confirm="handleDelete(scope.row)"
            >
              <template #reference>
                <el-button type="danger" :icon="Delete" circle />
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog
      v-model="dialogVisible"
      title="预览新闻"
      width="60%"
      class="dialog"
    >
      <div>
        <h2>{{ previewData.title }}</h2>
        <div class="preTime">
          {{ formatTime.getTime(previewData.editTime) }}
        </div>
        <el-divider>
          <el-icon><star-filled /></el-icon>
        </el-divider>
        <div v-html="previewData.content" class="content"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import formatTime from "@/utils/formatTime";
import { Edit, Delete , StarFilled } from "@element-plus/icons-vue";
import {useRouter} from 'vue-router'
const router = useRouter()

const tableData = ref([]);
const previewData = ref([]);
const dialogVisible = ref(false);

onMounted(() => {
  getTableData();
});

const getTableData = async () => {
  await axios.get(`/adminapi/product/list`).then((res) => {
    tableData.value = res.data.data;
    // console.log(res)
  });
};

//删除按钮
const handleDelete = async (data) => {
  const {_id} = data
  await axios.delete(`/adminapi/product/delete/${_id}`)
  getTableData();
};


//编辑按钮
const handleEdit = (item)=>{
  //路由跳转到editnews/:id
  router.push(`/product-manage/editproduct/${item._id}`)
}
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 20px;
  .el-table-column{
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
}
.preTime {
  font-size: 12px;
  color: gray;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>