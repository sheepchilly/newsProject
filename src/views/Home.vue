<template>
  <div class="container">
    <div class="header">
      <div class="headerIndex">
        <p class="headerIndex-p">使命</p>
        <div class="headerIndex-div">激发创造</div>
        <div class="headerIndex-div">丰富生活</div>
      </div>
      <el-carousel height="calc(100vh - 59px)" :autoplay="true">
        <el-carousel-item :key="1">
          <div class="center">
            <h2>以科技，融合数字与实体经济</h2>
            <h5>推动数字化的实体经济发展是具有远瞻性的使命</h5>
          </div>
          <div
            :style="{
              backgroundImage: `url(${require('@/assets/banner1.png')})`,
            }"
          ></div>
        </el-carousel-item>
        <el-carousel-item :key="2">
          <div class="center">
            <h2>以创新，迈向绿色未来</h2>
            <h5>做好集团领先能力，做强绿色价值链，做大绿色生态</h5>
          </div>
          <div
            :style="{
              backgroundImage: `url(${require('@/assets/banner2.png')})`,
            }"
          ></div>
        </el-carousel-item>
        <el-carousel-item :key="3">
          <div class="center">
            <h2>用行动，奔赴热土之上</h2>
            <h5>持续以扎扎实实的投入和探索，给乡村带去实实在在的帮助</h5>
          </div>
          <div
            :style="{
              backgroundImage: `url(${require('@/assets/banner3.png')})`,
            }"
          ></div>
        </el-carousel-item>
        <el-carousel-item :key="4">
          <div class="center">
            <h2>集团携手行业伙伴开放专利，以数字化助力碳减排</h2>
            <h5>中国产业互联网发展联盟碳中和专业委员会及开放技术联盟成立。</h5>
          </div>
          <div
            :style="{
              backgroundImage: `url(${require('@/assets/banner4.jpg')})`,
            }"
          ></div>
        </el-carousel-item>
        <el-carousel-item :key="5">
          <div class="center">
            <h2>游戏技术助益现实世界创新发展</h2>
            <h5>
              游戏发展至今，其价值和意义远不止娱乐。增强现实和虚拟现实等游戏技术已成为解决现实世界问题的新方法。
            </h5>
          </div>
          <div
            :style="{
              backgroundImage: `url(${require('@/assets/banner5.jpg')})`,
            }"
          ></div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="container-body">
      <div class="oneLiner" >
        <div class="oneLiner-item" v-for="(item,index) in bodyOneList" :key="item.url">
          <div class="imgBig">
          <img :src="require('../../../img/'+item.url)" class="oneLiner-img"/>
        </div>
            <div class="oneLiner-time">{{ item.time }}</div>
            <div class="linerBottom">
            <div class="oneLiner-h1">{{item.title}}</div>
            <div class="oneLiner-h2">{{item.text}}</div>
            </div>
        </div>
      </div>
    </div>

    <div class="container-body">
      <div class="twoLiner" >
        <div class="oneLiner-item" v-for="(item,index) in bodyTwoList" :key="item.url">
          <div class="imgBig">
          <img :src="require('../assets/'+item.url)" class="oneLiner-img"/>
        </div>
            <div class="oneLiner-time">{{ item.time }}</div>
            <div class="linerBottom">
            <div class="oneLiner-h1">{{item.title}}</div>
            <div class="oneLiner-h2">{{item.text}}</div>
            </div>
        </div>
      </div>
    </div>

    <div class="container-bottom">
      <el-carousel height="calc(100vh)"  :autoplay="true" class="bottomCarousel" arrow="never">
        <el-carousel-item v-for="(item,index) in bodyThreeList" :key="index">
          <div class="bottom-text">
            <h1>连接</h1>
            <h1>人才与发展</h1>
            <h3>激发活力，助力成长</h3>
            <img :src="(require('../assets/icon/right.png'))" class="textIcon"/>
          </div>
          <div :style="{backgroundImage: `url(${require('../assets/'+item)})`}"></div>
        </el-carousel-item>
  </el-carousel>
    </div>
  </div>
</template>

<script setup>
import {ref,reactive} from 'vue'


const bodyOneList = ref([
  {
    url:"itemOne1.jpg",
    time:"2023.04.26",
    title:"加速创新创造——腾讯产品背后的女性发明人",
    text:"女性发明人为腾讯的全球专利申请做出了重要贡献。在我们的6.2万份专利申请中，超过35%的申请凝结着她们的智慧与汗水。"
  },
  {
    url:"itemOne2.jpg",
    time:"2023.04.18",
    title:"带你穿越时空沉浸式云游文化遗址",
    text:"正值2023年“国际古迹遗址日”来临之际，腾讯与敦煌研究院联合打造的首个超时空参与式博物馆“数字藏经洞”于今日正式上线。"
  },
  {
    url:"itemOne3.jpg",
    time:"2023.04.17",
    title:"基于云的解决方案将助力全球自动驾驶升级迭代",
    text:"上海车展前夕，我们采访了腾讯智慧出行副总裁刘澍泉，讨论了基于云的解决方案在发展自动驾驶技术方面的重要性。"
  }
])
const bodyTwoList = ref([
{
    url:"itemTwo1.jpg",
    time:"2023.04.03",
    title:"汤道生：下一代互联网的三个趋势",
    text:"AI将成为互联网的核心驱动力，机器也会成为内容、甚至服务的供给者。供需关系亦将发生变化。"
  },
  {
    url:"itemTwo2.jpg",
    time:"2023.05.08",
    title:"科学减排再进一程：温室气体减排目标通过国际组织ST认证",
    text:"基于科学的温室气体减排近期目标已通过科学碳目标倡议（SBTi）认证。"
  },
  {
    url:"bodyOne2.jpg",
    time:"2023.05.08",
    title:"集团发布2022年度ESG报告：三管齐下，齐头并进",
    text:"过去一年中，集团在环境、社会及管治（ESG）方面均取得稳步进展。"
  }
])

const bodyThreeList = ref(["bigBanner1.jpg","bigBanner2.jpg","bigBanner3.jpg"])

</script>

<style lang="scss" scoped>
.container{
  background: rgb(251,251,251);
}
.el-carousel div {
  width: 100%;
  height: 100%;
  background-size: cover;
}

.header {
  position: relative;
  .headerIndex {
    width: 250px;
    height: 200px;
    background: white;
    z-index: 999;
    position: absolute;
    top: 0;
    left: 100px;
    border-radius: 0 0 80px;
    display: flex;
    flex-direction: column;
    .headerIndex-p {
      margin-top: 30px;
      margin-left: 30px;
      margin-bottom: 10px;
      color: gray;
      font-size: 20px;
    }
    .headerIndex-div {
      margin-left: 30px;
      font-size: 40px;
      font-weight: 500;
    }
  }
  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    color: white;
    text-align: center;
  }
}
.oneLiner :nth-child(1){
  background: skyblue;
}
.oneLiner :nth-child(2){
  background: #fff;
}
.oneLiner :nth-child(3){
  background: rgb(216,215,223);
}
.oneLiner{
  margin-top: 50px;
  margin-bottom: 50px;
  width:100%;
  height:600px;
  display: flex;
  justify-content:space-around;
  align-items:center;
  .oneLiner-item{
    margin-top:0;
    width:30%;
    height: 100%;
    //鼠标移上div，向上缓动并且添加阴影
    &:hover{
      margin-top: -10px;
      transition-duration: 300ms;
      -webkit-box-shadow: #ccc 0px 10px 10px;
      -moz-box-shadow: #ccc 0px 10px 10px;
      box-shadow: #ccc 5px 10px 10px;  
    }
    .imgBig{
      width:100%;
      height: 250px;
      overflow:hidden;
    }
    .oneLiner-img{
      width: 100%;
      height: 250px;
      &:hover{
        transform: scale(1.1);
        transition-duration: 300ms;
      }
    }
    .oneLiner-time{
      padding: 0px 30px;
      background: transparent;
      position: relative;
      top:30px;
      font-style: italic;
      font-size: 20px;
      line-height: 30px;
      height: 30px;
      display: inline-block;
      border:1px solid #0052D9;
      border-left: none;
      color: #0052D9;
    }
    .linerBottom{
      box-sizing: border-box;
      width:100%;
      height:312px;
      padding:24px;
      background: transparent;
      margin-top:30px;
      .oneLiner-h1{
        font-size:28px;
        background: transparent;
      }
      .oneLiner-h2{
        margin-top:30px;
        background: transparent;
        font-size:18px;
      }
      
    }
  }
}

.twoLiner{
  margin-top: 50px;
  margin-bottom: 50px;
  width:100%;
  height:600px;
  display: flex;
  justify-content:space-around;
  align-items:center;
  .oneLiner-item{
    margin-top:0;
    width:30%;
    height: 100%;
    //鼠标移上div，向上缓动并且添加阴影
    &:hover{
      margin-top: -10px;
      transition-duration: 300ms;
      -webkit-box-shadow: #ccc 0px 10px 10px;
      -moz-box-shadow: #ccc 0px 10px 10px;
      box-shadow: #ccc 5px 10px 10px;  
    }
    .imgBig{
      width:100%;
      height: 250px;
      overflow:hidden;
    }
    .oneLiner-img{
      width: 100%;
      height: 250px;
      &:hover{
        transform: scale(1.1);
        transition-duration: 300ms;
      }
    }
    .oneLiner-time{
      padding: 0px 30px;
      background: transparent;
      position: relative;
      top:30px;
      font-style: italic;
      font-size: 20px;
      line-height: 30px;
      height: 30px;
      display: inline-block;
      border:1px solid #0052D9;
      border-left: none;
      color: #0052D9;
    }
    .linerBottom{
      box-sizing: border-box;
      width:100%;
      height:312px;
      padding:24px;
      background: transparent;
      margin-top:30px;
      .oneLiner-h1{
        font-size:28px;
        background: transparent;
      }
      .oneLiner-h2{
        margin-top:30px;
        background: transparent;
        font-size:18px;
      }
      
    }
  }
}
.twoLiner :nth-child(1){
  background: rgb(216,215,223);
}
.twoLiner :nth-child(2){
  background: skyblue;
}
.twoLiner :nth-child(3){
  background: #fff;
}
.bottomItem{
  width: 100%;
  height: 100vh;
}
.bottomCarousel {
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
        right: 2%;
    }
    ::v-deep .el-carousel__button {// 指示器按钮
        width: 10px;
        height: 10px;
        border: none;
        background-color: white;
        
    }
    ::v-deep .is-active .el-carousel__button {// 指示器激活按钮
        width:30px;
        height:10px;
        background: #0052D9;
    }
}
.container-bottom{
  position: relative;
  .bottom-text{
    width: 250px;
    height: 250px;
    position: absolute;
    left:100px;
    top:100px;
    font-style:italic;
    &:hover{
        color:#0052D9;
      }
    .textIcon{
      width: 70px;
      margin-top: 10px;
    }
    h1{
      margin:20px 0;
      font-size:50px;
      }
    h3{
      font-weight:400;
    }
  }
}
</style>