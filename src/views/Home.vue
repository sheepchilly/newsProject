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
        <div class="oneLiner-item" v-for="item in bodyOneList" :key="item.url">
          <div class="imgBig">
        <div class="oneLiner-img" :style="{backgroundImage: `url(http://localhost:3000${item.url})`}"></div>
        </div>
            <div class="oneLiner-time">{{ item.time }}</div>
            <div class="linerBottom">
            <div class="oneLiner-h1">{{item.title}}</div>
            <!-- 富文本编辑器上传到服务器的p标签可以用v-html去除，也可以用正则表达式 -->
            <!-- <div class="oneLiner-h2" v-html="item.text"></div> -->
            <div class="oneLiner-h2">{{ item.subtitle.replace(/<[^>]+>/g, '') }}</div>
            </div>
        </div>
      </div>
    </div>

    <div class="container-body">
      <div class="twoLiner" >
        <div class="oneLiner-item" v-for="item in bodyTwoList" :key="item.url">
          <div class="imgBig">
            <div class="oneLiner-img" :style="{backgroundImage: `url(http://localhost:3000${item.url})`}"></div>
        </div>
            <div class="oneLiner-time">{{ item.time }}</div>
            <div class="linerBottom">
            <div class="oneLiner-h1">{{item.title}}</div>
            <div class="oneLiner-h2">{{item.subtitle.replace(/<[^>]+>/g, '')}}</div>
            </div>
        </div>
      </div>
    </div>

    <div class="container-black">
      <div class="blackList">
      <div class="black-left">
        <div class="black-left-text" ref="blackTextOne" @mouseenter="blackChangeOne">
            <h1>连接用户生活</h1>
            <h3>让生活更便捷更多彩</h3>
            <img :src="(require('../assets/icon/right-white.png'))" class="textIcon"/>
        </div>
        <div class="black-left-text" ref="blackTextTwo" @mouseenter="blackChangeTwo">
            <h1>连接企业与科技</h1>
            <h3>数字化助手，助力产业升级</h3>
            <img :src="(require('../assets/icon/right-white.png'))" class="textIcon"/>
        </div>
        <div class="black-left-text" ref="blackTextThree" @mouseenter="blackChangeThree">
            <h1>连接现在与未来</h1>
            <h3>探索面向未来的创新科技</h3>
            <img :src="(require('../assets/icon/right-white.png'))" class="textIcon"/>
        </div>
      </div>
    </div>

      <div class="black-right">

        <div class="black-rightImg" v-if="blackImgChange == 0">
          <div class="right-one" v-for="(item,index) in rightOneImg" :key="index">
            <img :src="require('../assets/black/'+item.url)" class="right-one-img"/>
            <div class="right-one-title">{{ item.title }}</div>
          </div>
        </div>

        <div class="black-rightImg" v-if="blackImgChange == 1">
          <div class="right-one" v-for="(item,index) in rightTwoImg" :key="index">
            <img :src="require('../assets/black/'+item.url)" class="right-one-img"/>
            <div class="right-one-title">{{ item.title }}</div>
          </div>
        </div>

        <div class="black-rightImg" v-if="blackImgChange == 2">
          <div class="right-one" v-for="(item,index) in rightThreeImg" :key="index">
            <img :src="require('../assets/black/'+item.url)" class="right-one-img"/>
            <div class="right-one-title">{{ item.title }}</div>
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
import {ref,reactive,onMounted} from 'vue'
import axios from 'axios'

const bodyList = reactive([])
let bodyOneList = ref([])
let bodyTwoList = ref([])
const bodyThreeList = ref(["bigBanner1.jpg","bigBanner2.jpg","bigBanner3.jpg"])
const rightOneImg = ref([
  {url:'black1-1.jpg',title:"通信与社交"},
  {url:'black1-2.jpg',title:'数字与内容'},
  {url:'black1-3.jpg',title:'金融科技与服务'},
  {url:'black1-4.jpg',title:'工具'}
])
const rightTwoImg = ref([
  {url:'black2-1.jpg',title:"通信与社交"},
  {url:'black2-2.jpg',title:'数字与内容'},
  {url:'black2-3.jpg',title:'金融科技与服务'},
  {url:'black2-4.jpg',title:'金融科技与服务'},
])
const rightThreeImg = ref([
  {url:'black3-1.jpg',title:"通信与社交"},
  {url:'black3-2.jpg',title:'数字与内容'},
  {url:'black3-3.jpg',title:'金融科技与服务'},
  {url:'black3-4.jpg',title:'金融科技与服务'},
])
const blackImgChange = ref(0)
const blackTextOne = ref(null)
const blackTextTwo = ref(null)
const blackTextThree = ref(null)
const isLeave = ref(false)

const blackChangeOne = ()=>{
  blackImgChange.value = 0
}
const blackChangeTwo = ()=>{
  blackImgChange.value = 1
}
const blackChangeThree = ()=>{
  blackImgChange.value = 2
}

onMounted(()=>{
  getBodyList()
})

const getBodyList = async()=>{
  let result = await axios.get('/webapi/index/getList')
  let data = result.data.data
  
  let list1 = data.slice(0,3)
  bodyOneList.value = list1

  let list2 = data.slice(3,6)
  bodyTwoList.value = list2

  //别忘了reactive要用push+扩展运算符追加数据，而ref只需要.value就可以
  bodyList.push(...data)
}


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
      height: 100%;
      background-size: 384px 250px;
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
        background: transparent !important;
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
      background-size: 384px 250px;
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

.container-black{
  background: #1B1F25;
  color: #FFF;
  width: 100%;
  margin-bottom: 60px;
  height: 620px;
  position:relative;
  display: flex;
  justify-content: space-between;
  .blackList{
      padding-top: 50px;
      width: 400px;
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;

    .black-left-text{
    width: 290px;
    font-style:italic;
    color:rgb(141,143,146);
    position: relative;
    transition: all 0.3s;
    &:hover{
      transform: translate(10%,0);
      color:#fff;
      .textIcon{
        visibility: visible;
      }
      h1::before{
        content:"";
        display:block;
      }
    }
    .textIcon{
      width: 70px;
      height:40px;
      margin-top: 10px;
      visibility: hidden;
    }
    h1::before{
      content: "";
      background: #0052D9;
      width: 6px;
      height:38px;
      position: absolute;
      top: 0;
      left:-24px;
      display: none;
      transition:all ease 0.3s;
    }
    h1{
      padding-left: 20px;
      margin-top: 40px;
      font-size:35px;
      }
    h3{
      font-weight:400;
    }
  }
  }
  .black-right{
    // flex:2;
    .black-rightImg{
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      width: 800px;
      height: 610px;
      .right-one{
        position: relative;
      .right-one-img{
        width: 395px;
        height: 306px;
      }
      .right-one-title{
        position:absolute;
        bottom:35px;
        left:25px;
        color:#fff;
        font-size:25px;
        font-style: italic;
        font-weight: bold;
      }
    }
    }
  }

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