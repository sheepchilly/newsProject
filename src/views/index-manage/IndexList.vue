<template>
    <div>
        <el-page-header
      content="编辑新闻"
      icon=""
      title="新闻管理"
    ></el-page-header>

    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="新闻名称" width="300" show-overflow-tooltip/>

          <el-table-column prop="text" label="新闻内容" width="300"  class="intro" show-overflow-tooltip>
            <template #default="scope">
          <div v-html="scope.row.text"></div>
        </template>
    </el-table-column>

        <el-table-column label="新闻有关时间" width="180">
          <template #default="scope">
            {{ scope.row.time }}
          </template>
        </el-table-column>

        <el-table-column label="是否展示" width="100">
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

onMounted(()=>{
    getData();
})

const getData = async()=>{
    await axios.get('/adminapi/index/getList').then(res=>{
        tableData.value = res.data.data
    })
}

const handleDelete = async(data)=>{
    const {_id} = data
    await axios.delete(`/adminapi/index/delete/${_id}`).then(res=>{
        getData()
    })
}

const handleSwitchChange = async(data)=>{
    const {_id,isPublish} = data
    await axios.post(`/adminapi/index/ispublish`,{_id,isPublish}).then(res=>{
        
    })
}

const handleEdit = async(data)=>{
    const {_id} = data
    router.push(`/index-manage/editindex/${_id}`)
}

</script>

<style lang="scss" scoped>
.el-card{
  margin-top:20px;
  .el-form{
    margin-top:20px;
  }
}

</style>