<template>
  <div>
    <el-carousel
      height="calc(100vh - 59px)"
      direction="vertical"
      :autoplay="true"
      interval="3000"
      v-if="looplist.length"
      class="bottomCarousel"
    >
      <el-carousel-item v-for="item in looplist" :key="item._id">
        <div class="item" :style="{backgroundImage: `url(http://localhost:3000${item.cover})`}">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <h1>{{ item.title }}</h1>
              </div>
            </template>
            <div class="header">{{item.introduction}}</div>
            <div class="detail">{{item.detail}}</div>

            <div class="more">
                <span>更多信息，请访问：</span>
                <br>
                <a href="#" style="text-decoration: none;">http://127.0.0.1:3000  </a>  
            </div>
          </el-card>
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-empty description="暂无产品" v-else></el-empty>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const looplist = ref([]);

onMounted(async () => {
  const res = await axios.get("/webapi/product/list");
  looplist.value = res.data.data;
  console.log(res.data.data);
});
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  height: 100%;
  background-size: cover;
}
.box-card{
    padding: 0 30px;
    width: 35%;
    height: 100%;
    background-color: rgba(255,255,255,0.6);
    position: relative;
    .header{
      margin-top:50px;
      font-size:20px;
      font-weight:bold;
    }
    .detail{
      margin-top:20px;
    }
    .more{
        position: absolute;
        bottom: 50px;
    }
}
.bottomCarousel{
  overflow: hidden;
  position:relative;
    .el-carousel__item:nth-child(2n) {
        background-color: white;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: white;
    }
    ::v-deep .el-carousel__indicators {// 指示器
        left: unset;
        transform: unset;
        right: 1%;
    }
    ::v-deep .el-carousel__button {// 指示器按钮
        width: 10px;
        height: 10px;
        border: none;
        background-color: gray;
        
    }
    ::v-deep .is-active .el-carousel__button {// 指示器激活按钮
        // width:30px;
        height:20px;
        background: #0052D9;
    }
}
</style>