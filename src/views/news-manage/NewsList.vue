<template>
  <div>
    <el-page-header
      content="新闻列表"
      icon=""
      title="新闻管理"
    ></el-page-header>

    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题" width="300" />

        <el-table-column label="分类" width="150">
          <template #default="scope">
            {{ categoryFormate(scope.row.category) }}
          </template>
        </el-table-column>

        <el-table-column label="更新时间" width="180">
          <template #default="scope">
            {{ formatTime.getTime(scope.row.editTime) }}
          </template>
        </el-table-column>

        <el-table-column label="是否发布" width="180">
          <template #default="scope">
            <el-switch
              v-model="scope.row.isPublish"
              :active-value="1"
              :inactive-value="0"
              @change="handleSwitchChange(scope.row)"
            />
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              type="success"
              :icon="Star"
              circle
              @click="handlePerview(scope.row)"
            />
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
import { Edit, Delete, Star , StarFilled } from "@element-plus/icons-vue";
import {useRouter} from 'vue-router'
const router = useRouter()

const tableData = ref([]);
const previewData = ref([]);
const dialogVisible = ref(false);

onMounted(() => {
  getTableData();
});

const getTableData = async () => {
  await axios.get(`/adminapi/news/list`).then((res) => {
    tableData.value = res.data.data;
  });
};

//格式化分类信息
const categoryFormate = (category) => {
  const arr = ["最新动态", "典型案例", "通知公告"];
  return arr[category - 1];
};

//是否发布
const handleSwitchChange = async (item) => {
  await axios.put("/adminapi/news/publish", {
    _id: item._id,
    isPublish: item.isPublish,
  });
  getTableData();
};

//预览回调
const handlePerview = (data) => {
  previewData.value = data;
  dialogVisible.value = true;
};

//删除按钮
const handleDelete = async (data) => {
  const {_id} = data
  console.log(_id)
  await axios.delete(`/adminapi/news/delete/${_id}`)
  getTableData();
};


//编辑按钮
const handleEdit = (item)=>{
  //路由跳转到editnews/:id
  router.push(`/news-manage/editnews/${item._id}`)
}
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 20px;
}
.preTime {
  font-size: 12px;
  color: gray;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>