<template>
  <el-row>
    <el-col :span="17" :offset="1">
      <div>
        <h2>{{ currentNews.title }}</h2>
        <div class="time">{{ whichTime(currentNews.editTime) }}</div>
        <el-divider>
          <el-icon><star-filled /></el-icon>
        </el-divider>
        <div class="content" v-html="currentNews.content"></div>
      </div>
    </el-col>


    <el-col :span="4" :offset="1" :pull="1">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span style="font-size:16px;font-weight:bold;">最近新闻</span>
          </div>
        </template>
        <div v-for="item in topNews" :key="item._id" class="text item" stype="padding:14px;" @click="handleChange(item._id)">
            <span class="titlespan">{{ item.title }}</span>
                  <div class="bottom">
                    <time class="time">{{ whichTime(item.editTime) }}</time>
                  </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, ref,watchEffect,onBeforeUnmount } from "vue";
import axios from "axios";
import { useRoute,useRouter } from "vue-router";
import moment from "moment";
import { StarFilled } from "@element-plus/icons-vue";

moment.locale("zh-cn");

const route = useRoute();
const router = useRouter()

const currentNews = ref({});
const topNews = ref([])

//watchEffect监视属性变化
const stop = watchEffect(async()=>{
  if(!route.params.id) return; 
  const { id } = route.params;
  const res = await axios.get(`/webapi/news/list/${id}`);
  const res2 = await axios.get(`/webapi/news/toplist?limit=4`);
  topNews.value = res2.data.data
  currentNews.value = res.data.data[0];
});
//页面卸载的时候移除监视
onBeforeUnmount(()=>{
    console.log('onbeforeunmount')
    stop()
})

//时间格式化
const whichTime = (time) => {
  return moment(time).format("YYYY MMMDD hh:mm:ss");
};

const handleChange = (id)=>{
    router.push(`/news/${id}`)
}
</script>

<style v-loading="scss" scoped>
.el-row {
  margin-top: 20px;
}
.time {
  font-size: 13px;
  color: gray;
  margin-top: 10px;
}
</style>