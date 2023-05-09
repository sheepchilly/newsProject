<template>
  <div class="container">
    <div class="header">
      <div class="headerIndex">
        <p class="headerIndex-p">使命</p>
        <div class="headerIndex-div">激发创造</div>
        <div class="headerIndex-div">丰富生活</div>
      </div>
    <el-carousel height="calc(100vh - 59px)" autoplay="true">
      <el-carousel-item :key="1">
        <div class="center">
          <h2>以科技，融合数字与实体经济</h2>
          <h5>推动数字化的实体经济发展是具有远瞻性的使命</h5>
        </div>
        <div :style="{backgroundImage:`url(${require('@/assets/banner1.png')})`}"></div>
      </el-carousel-item>
      <el-carousel-item :key="2">
        <div class="center">
          <h2>以创新，迈向绿色未来</h2>
          <h5>做好集团领先能力，做强绿色价值链，做大绿色生态</h5>
        </div>
        <div :style="{backgroundImage:`url(${require('@/assets/banner2.png')})`}"></div>
      </el-carousel-item>
      <el-carousel-item :key="3">
        <div class="center">
          <h2>用行动，奔赴热土之上</h2>
          <h5>持续以扎扎实实的投入和探索，给乡村带去实实在在的帮助</h5>
        </div>
        <div :style="{backgroundImage:`url(${require('@/assets/banner3.png')})`}"></div>
      </el-carousel-item>
      <el-carousel-item :key="4">
        <div class="center">
          <h2>集团携手行业伙伴开放专利，以数字化助力碳减排</h2>
          <h5>中国产业互联网发展联盟碳中和专业委员会及开放技术联盟成立。</h5>
        </div>
        <div :style="{backgroundImage:`url(${require('@/assets/banner4.jpg')})`}"></div>
      </el-carousel-item>
      <el-carousel-item :key="5">
        <div class="center">
          <h2>游戏技术助益现实世界创新发展</h2>
          <h5>游戏发展至今，其价值和意义远不止娱乐。增强现实和虚拟现实等游戏技术已成为解决现实世界问题的新方法。</h5>
      </div>
        <div :style="{backgroundImage:`url(${require('@/assets/banner5.jpg')})`}"></div>
      </el-carousel-item>
    </el-carousel>
  </div>

      
    <div>
      zheshi
    </div><div>
      zheshi
    </div><div>
      zheshi
    </div><div>
      zheshi
    </div><div>
      zheshi
    </div><div>
      zheshi
    </div><div>
      zheshi
    </div><div>
      zheshi
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.el-carousel div{
    width: 100%;
    height: 100%;
    background-size: cover;
}

.header{
  position: relative;
  .headerIndex{
    width:250px;
    height:200px;
    background:white;
    z-index:999;
    position:absolute;
    top:0;
    left:100px;
    border-radius: 0 0 80px;
    display:flex;
    flex-direction: column;
    .headerIndex-p{
      margin-top: 30px;
      margin-left: 30px;
      margin-bottom: 10px;
      color: gray;
      font-size: 20px;
    }
    .headerIndex-div{
      margin-left: 30px;
      font-size: 40px;
      font-weight:500;
    }
  }
  .center{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    color:white;
    text-align: center;
    }
}
</style>