<template>
  <!-- action：提交的接口，show-file-list：上传成功后是否展示列表，auto-upload：是否自动上传 -->
  <el-upload
    class="avatar-uploader"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :show-file-list="false"
    :auto-upload="false"
    :on-change="handleChange"
  >
    <img v-if="props.avatar" :src="uploadAvatar" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
</template>

<script setup>
import {defineEmits,defineProps,computed} from 'vue'
import { Plus } from "@element-plus/icons-vue";

const props = defineProps({
    avatar:String
})
const emit = defineEmits(["avatarChange"])

//头像地址
const uploadAvatar = computed(()=>
    props.avatar.includes("blob")?props.avatar:'http://localhost:3000'+props.avatar
)

//选择完图片之后的回调
const handleChange = (file) => {
    emit("avatarChange",file.raw)
};
</script>

<style lang="scss" scoped>
 .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
::v-deep .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

::v-deep .el-upload:hover {
  border-color: var(--el-color-primary);
}

::v-deep .el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>