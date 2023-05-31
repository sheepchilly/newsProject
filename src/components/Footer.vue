<template>
  <div class="footer">
    <div class="footer-header">
      <div class="header-title">关注我们</div>
      <div class="header-icon" v-for="(item, index) in iconList" :key="index">
        <img :src="require('../assets/icon/' + item)" class="iconImg" />
      </div>
    </div>

    <div class="footer-body">
      <div class="body-left">
        <div class="bodyListOne">
          <div class="bodyListOne-title">加入我们</div>
          <ul>
            <li>社会招聘</li>
            <li>校园招聘</li>
            <li>国际招聘</li>
          </ul>
        </div>
        <div class="bodyListTwo">
          <div class="bodyListOne-title">联系我们</div>
          <ul>
            <li>客户服务</li>
            <li>合作洽谈</li>
            <li>媒体以及投资者</li>
          </ul>
        </div>
        <div class="bodyListThree">
          <div class="bodyListOne-title">法律信息</div>
          <ul>
            <li>服务协议</li>
            <li>隐私政策</li>
            <li>知识产权</li>
          </ul>
        </div>
      </div>
      <div class="body-right">
        <img :src="require('../assets/icon/company.png')" class="right-img" />
        <div class="right-text">折一枚针</div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-one">
        <div>法律声明</div>
        <div>阳光准则</div>
        <div>网站地图</div>
        <div>凡心所向，素履所往，生如逆旅，一苇以航</div>
        <div>人生如逆旅，我亦是行人</div>
        <div>诸君，共勉</div>
      </div>
    </div>
    <div class="footer-two">
      <div>Copyright © 2023-5-9 Chilly.All Rights Reserved.折一枚针</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const iconList = ref(["wechat.png", "weibo.png", "tw.png", "facebook.png"]);
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 440px;
  .footer-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 30px;
    font-size: 25px;
    height: 88px;
    line-height: 88px;
    .header-title {
      color: #707070;
    }
    .header-icon {
      margin: 30px;
      display: flex;
      align-items: center;
      .iconImg {
        width: 30px;
        height: 30px;
      }
    }
  }
  .footer-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      list-style-type: none;
      padding: 10px 0;
      font-size: 18px;
    }
    .body-left {
      margin-left: 30px;
      width: 40%;
      display: flex;
      justify-content: space-between;
      color: #707070;
      .bodyListOne-title {
        margin: 20px 0;
        font-size: 25px;
      }
    }
    .body-right {
      margin-right: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      .right-img {
        width: 100px;
        height: 100px;
      }
      .right-text {
        color: #0052d9;
        font-size: 50px;
        font-weight: bold;
      }
    }
  }
  .footer-bottom {
    display: flex;
    .footer-one {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 30px;
      div {
        margin-top: 50px;
        padding-right: 30px;
        font-size: 18px;
        color: #707070;
      }
    }
  }
  .footer-two {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
    div {
      margin-top: 30px;
      padding-right: 30px;
      font-size: 15px;
      color: #707070;
    }
  }
}
</style>