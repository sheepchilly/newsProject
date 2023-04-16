<template>
  <div>
    <el-page-header
      content="首页"
      icon=""
      title="企业门户管理系统"
    ></el-page-header>
    <el-card class="box-card"> 
      <el-row>
        <el-col :span="4" class="col">
          <el-avatar :size="80" :src="'http://localhost:3000'+avatarUrl" />
        </el-col>
        <el-col :span="20">
          <h3 style="line-height:100px">欢迎 {{store.state.userInfo.username}} 回来，{{welcomeText}}</h3>
        </el-col>
      </el-row>  
    </el-card>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>公司产品</span>
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore();

const avatarUrl = computed(()=> store.state.userInfo.avatar?store.state.userInfo.avatar:`https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png`)
const welcomeText = computed(()=> new Date().getHours()<12?'要开心呀':'你可能累了，喝杯拿铁提提神吧');
</script>

<style lang="scss" scoped>
.col{
  display:flex;
  justify-content: center;
  align-items: center;
}
.box-card {
  margin-top: 30px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>