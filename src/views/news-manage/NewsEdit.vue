<template>
    <div>
      <el-page-header
        content="编辑新闻"
        title="新闻管理"
        @back="handleBack()"
      ></el-page-header>
  
      <el-card>
        <el-form
        ref="newsFormRef"
        :model="newsForm"
        :rules="newsFormRules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="title">
          <el-input v-model="newsForm.title" />
        </el-form-item>
  
        <el-form-item label="内容" prop="content">
          <editor @event="handleEdit" :content="newsForm.content" v-if="newsForm.content"/>
        </el-form-item>
  
        <el-form-item label="类别" prop="category">
          <el-select
            v-model="newsForm.category"
            placeholder="Select"
            style="width: 100%"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              class="options"
            />
          </el-select>
        </el-form-item>
  
        <el-form-item label="封面" prop="cover">
          <!-- 把头像地址给子组件传递过去 -->
          <Upload :avatar="newsForm.cover" @avatarChange="handleChange"/>
        </el-form-item>
  
        <el-form-item>
                <el-button type="primary" @click="submitForm()">更新新闻</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  
    </div>
  </template>
  
  <script setup>
  import {ref,reactive,onMounted} from 'vue'
  import editor from '@/components/editor/Editor.vue'
  import Upload from '@/components/upload/Upload'
  import upload from '@/utils/upload'
  import axios from 'axios'
  import {useRouter,useRoute} from 'vue-router'
  const router = useRouter()
  const route = useRoute()
  
  const newsFormRef = ref()
  let newsForm = reactive({
    title:"",
    content:"",
    category:2, //1.最新动态 2典型案例 3通知公告
    cover:"",
    file:null, 
    isPublish:0 //0-未发布 1-已经发布
  })
  
  const newsFormRules = reactive({
    title:[
      {required:true,message:"请输入标题",trigger:"blur"}
    ],
    content:[
      {required:true,message:"请输入内容",trigger:"blur"}
    ],
    category:[
      {required:true,message:"请选择分类",trigger:"blur"}
    ],
    cover:[
      {required:true,message:"请上传图片",trigger:"blur"}
    ]
  })
  const options = [
    {
      label:"最新动态",
      value:1
    },
    {
      label:"典型案例",
      value:2
    },
    {
      label:"通知公告",
      value:3
    }
  ]
  
  const handleEdit = (val)=>{
    const content = Array.from(val)
    newsForm.content = content
  }
  
  const handleChange = (file)=>{
    newsForm.cover = URL.createObjectURL(file)
    newsForm.file = file
  }
  
  const submitForm = ()=>{
    newsFormRef.value.validate(async (valid)=>{
      if(valid){
        await upload("/adminapi/news/list",newsForm)
        router.back()
      }
    })
  }

  //跳转页面
  const handleBack = ()=>{
    router.back()
  }

  //取当前页面数据
  onMounted(async ()=>{
    const res = await axios.get(`/adminapi/news/list/${route.params.id}`)
    Object.assign(newsForm,res.data.data[0])
  })
  </script>
  
  <style lang="scss" scoped>
  .el-card{
    margin-top:20px;
    .el-form{
      margin-top:20px;
    }
  }
  </style>