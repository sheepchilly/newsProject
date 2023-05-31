<template>
    <div>
        <el-page-header
      content="添加首页新闻"
      title="首页管理"
      @back="handleBack()"
    ></el-page-header>

    <el-card>
      <el-form
      ref="indexFormRef"
      :model="indexForm"
      :rules="indexFormRules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="首页新闻标题" prop="title">
        <el-input v-model="indexForm.title" />
      </el-form-item>

      <el-form-item label="新闻副标题" prop="subtitle">
        <el-input v-model="indexForm.subtitle" />
      </el-form-item>

      <el-form-item label="首页新闻描述" prop="text">
        <editor @event="handleEdit" :content="indexForm.text" style="position:relative;z-index:0;" v-if="indexForm.text"/>
      </el-form-item>

      <!-- 这里要用日期选择器 （5-9日留） -->
      <el-form-item label="新闻详细时间" prop="time">
        <el-date-picker
        v-model="indexForm.time"
        type="date"
        placeholder="请选择时间"
      />
      </el-form-item>

      <el-form-item label="首页新闻图片" prop="url">
        <!-- 把头像地址给子组件传递过去 -->
        <Upload :avatar="indexForm.url" @avatarChange="handleChange"/>
      </el-form-item>

      <el-form-item>
              <el-button type="primary" @click="handleSubmit">修改新闻</el-button>
      </el-form-item>
    </el-form>
  </el-card>


    </div>
</template>

<script setup>
import {reactive, ref,onMounted} from 'vue'
import {useRouter,useRoute} from 'vue-router'
import Upload from '@/components/upload/Upload'
import upload from '@/utils/upload'
import editor from '@/components/editor/Editor.vue'
import formatTime from '@/utils/formatTime'
import axios from 'axios'
const router = useRouter();
const route = useRoute();

const indexFormRef = ref([])
const indexForm = reactive({
    title:'',
    subtitle:'',
    text:'',
    time:'',
    url:'',
    file:null,
    rolePerson:''
})
const indexFormRules = reactive({
    title:[
        {required:true,message:"请输入标题",trigger:"blur"}
    ],
    subtitle:[
        {required:true,message:"请输入副标题",trigger:"blur"}
    ],
    text:[
        {required:true,message:"请输入内容",trigger:"blur"}
    ],
    time:[
        {required:true,message:"请选择时间",trigger:"blur"}
    ],
    url:[
        {required:true,message:"请上传图片",trigger:"blur"}
    ],

})

const handleChange = ((file)=>{
    indexForm.url = URL.createObjectURL(file)
    indexForm.file = file
})

const handleEdit = (val)=>{
  const content = Array.from(val)
  indexForm.text = content
}

const handleSubmit = ()=>{
  indexFormRef.value.validate(async valid=>{
    if(valid){
      indexForm.time = formatTime.getTimePoint(indexForm.time)
      indexForm.rolePerson = localStorage.getItem('token')
      indexForm._id = route.params.id
      await upload('/adminapi/index/updateList',indexForm)
      router.back()
    }
  })
}

//在onMounted中做数据回显
onMounted(async()=>{
  const res = await axios.get(`/adminapi/index/getList/${route.params.id}`)
    Object.assign(indexForm,res.data.data[0])
    console.log(indexForm)
})

const handleBack = ()=>{
  router.back()
}

</script>

<style lang="scss" scoped>
.el-card{
  margin-top:20px;
  .el-form{
    margin-top:20px;
  }
}
::v-deep .el-picker-panel{
  position:relative;
  z-index: 1;
}
</style>