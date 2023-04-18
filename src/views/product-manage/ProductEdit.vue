<template>
    <div>
      <el-page-header
        content="编辑产品"
        title="产品管理"
        @back="handleBack()"
      ></el-page-header>
  
      <el-card>
        <el-form
        ref="productFormRef"
        :model="productForm"
        :rules="productFormRules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="产品名称" prop="title">
          <el-input v-model="productForm.title" />
        </el-form-item>
  
        <el-form-item label="产品简要描述" prop="introduction">
          <el-input v-model="productForm.introduction" type="textarea" />
        </el-form-item>
  
        <el-form-item label="产品详细描述" prop="detail">
          <el-input v-model="productForm.detail" type="textarea" />
        </el-form-item>
  
        <el-form-item label="产品图片" prop="cover">
          <!-- 把头像地址给子组件传递过去 -->
          <Upload :avatar="productForm.cover" @avatarChange="handleChange"/>
        </el-form-item>
  
        <el-form-item>
                <el-button type="primary" @click="submitForm()">编辑产品</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  
  
    </div>
  </template>
  
  <script setup>
  import {useRouter,useRoute} from 'vue-router'
  import {ref,reactive,onMounted} from 'vue'
  import Upload from '@/components/upload/Upload'
  import upload from '@/utils/upload'
  import axios from 'axios'
  
  const router = useRouter()
  const route = useRoute()
  
  const productFormRef = ref([])
  const productForm = reactive({
      title:"",
      introduction:"",
      detail:"",
      cover:"",
      file:null,
  })

  onMounted(()=>{
    getData()
  })
   
  const getData = async ()=>{
    const _id = route.params.id
    const res = await axios.get(`/adminapi/product/list/${_id}`)
    Object.assign(productForm,res.data.data[0])
  }
  
  const productFormRules = reactive({
    title:[
      {required:true,message:"请输入标题",trigger:"blur"}
    ],
    introduction:[
      {required:true,message:"请输入简要描述",trigger:"blur"}
    ],
    detail:[
      {required:true,message:"请输入详细描述",trigger:"blur"}
    ],
    cover:[
      {required:true,message:"请上传图片",trigger:"blur"}
    ]
  })
  
  const handleChange = (file)=>{
    productForm.cover = URL.createObjectURL(file)
    productForm.file = file
  }
  
  const submitForm = ()=>{
    productFormRef.value.validate( async valid=>{
        if(valid){
            await upload('/adminapi/product/list',productForm)
            router.back()
        }
    })
  }

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
  
  </style>