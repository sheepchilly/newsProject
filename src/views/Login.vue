<template>
    <div class="box">
        <div class="container2">
        <div class="form-box" ref="form_box">
            <!-- 注册 -->
            <div class="register-box hidden" ref="register_box">
                <h1>register</h1>
                <input type="text" placeholder="用户名" v-model="username">
                <input type="password" placeholder="密码" v-model="password">
                <input type="password" placeholder="确认密码" v-model="confirmPassword">
                <button @click="handleregist">注册</button>
            </div>
            <!-- 登录 -->
            <div class="login-box" ref="login_box">
                <h1>login</h1>
                <input type="text" placeholder="用户名" v-model="username">
                <input type="password" placeholder="密码" v-model="password">
                <button @click="handleLogin">登录</button>
            </div>
        </div>
        <div class="con-box left">
            <h2>欢迎来到<span>新知道</span></h2>
            <p>快来看看当下最新的<span>新闻/商品</span>吧</p>
            <img src="../assets/img/sun.png" alt="">
            <p>已有账号</p>
            <button @click="login">去登录</button>
        </div>
        <div class="con-box right">
            <h2>欢迎来到<span>新知道</span></h2>
            <p>快来看看当下最新的<span>新闻/商品</span>吧</p>
            <img src="../assets/img/night.png" alt="">
            <p>没有账号？</p>
            <button @click="register">去注册</button>
        </div>
    </div>

    <el-dialog v-model="dialogVisible" title="提示" width="30%" draggable>
    <span>{{confirmText}}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>

    </div>
</template>

<script setup>
import {ref,nextTick} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'
import { ElMessage } from 'element-plus'
const router = useRouter()

let form_box = ref(null)
let login_box = ref(null)
let register_box = ref(null)

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const dialogVisible = ref(false)
const confirmText = ref('')

const register =(()=>{
    form_box.value.style.transform='translateX(80%)';
    login_box.value.classList.add('hidden');
    register_box.value.classList.remove('hidden');
    username.value = ''
    password.value = ''
})

const login = (()=>{
    form_box.value.style.transform='translateX(0%)';
    register_box.value.classList.add('hidden');
    login_box.value.classList.remove('hidden');
    username.value = ''
    password.value = ''
    confirmPassword.value = ''
})

const handleLogin = (async()=>{
    if(username.value.length !== 0 && password.value.length !== 0){
       const result =  await axios.post('/webapi/user/login',{
        username:username.value,
        password:password.value
    })
    console.log(result.data.code)
       if(result.data.code == 20000){
            router.push('/')
       }else{
        dialogVisible.value = true
        confirmText.value = '您输入的账号或者密码错误'
        nextTick(()=>{
            username.value = ''
            password.value = ''
        })
       }
    }else{
        dialogVisible.value = true
        confirmText.value = '账号或密码为空，请重新输入！'
        username.value = ''
        password.value = ''

    }
})

const handleregist = (async ()=>{
    if(username.value.length !== 0 && password.value.length !== 0 && confirmPassword.value.length !== 0){
        if(password.value === confirmPassword.value){
            let result = await axios.post('/webapi/user/register',{
            username:username.value,
            password:password.value
        })
        if(result.data.code == -2){
            dialogVisible.value = true
            confirmText.value = '用户名已存在，请确认后再次输入'
            username.value = ''
            password.value = ''
            confirmPassword.value = ''
        }else{
            ElMessage({
                message: '注册成功',
                type: 'success',
            })
            login()
            password.value = ''
            confirmPassword.value = ''
        }
        }else{
            dialogVisible.value = true
            confirmText.value = '两次输入的密码不一致，请重试'
            password.value = ''
            confirmPassword.value = ''
        }
    }else{
        
    }
})
</script>

<style lang="scss" scoped>
.box{
    height: 100vh;
    /* 弹性布局 水平+垂直居中 */
    display: flex ;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    background: linear-gradient(200deg,#f3e7e9,#e3eeff);
}
.container2{
    background-color: #fff;
    width: 650px;
    height: 415px;
    border-radius: 5px;
    /* 阴影 */
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
    /* 相对定位 */
    position: relative;
}
.form-box{
    /* 绝对定位 */
    position: absolute;
    top: -10%;
    left: 5%;
    background-color: #d3b7d8;
    width: 320px;
    height: 500px;
    border-radius: 5px;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    /* 动画过渡 加速后减速 */
    transition: 0.5s ease-in-out;
}
.register-box,.login-box{
    /* 弹性布局 垂直排列 */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.hidden{
    display: none;
    transition: 0.5s;
}
h1{
    text-align: center;
    margin-bottom: 25px;
    /* 大写 */
    text-transform: uppercase;
    color: #fff;
    /* 字间距 */
    letter-spacing: 5px;
}
input{
    background-color: transparent;
    width: 70%;
    color: #fff;
    border: none;
    /* 下边框样式 */
    border-bottom: 1px solid rgba(255,255,255,0.4);
    padding: 10px 0;
    text-indent: 10px;
    margin: 8px 0;
    font-size: 14px;
    letter-spacing: 2px;
}
input::placeholder{
    color: #fff;
}
input:focus{
    color: #a262ad;
    outline: none;
    border-bottom: 1px solid #a262ad80;
    transition: 0.5s;
}
input:focus::placeholder{
    opacity: 0;
}
.form-box button{
    width: 70%;
    margin-top: 35px;
    background-color: #f6f6f6;
    outline: none;
    border-radius: 8px;
    padding: 13px;
    color: #a262ad;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
}
.form-box button:hover{
    background-color: #a262ad;
    color: #f6f6f6;
    transition: background-color 0.5s ease;
}
.con-box{
    width: 50%;
    /* 弹性布局 垂直排列 居中 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* 绝对定位 居中 */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.con-box.left{
    left: -2%;
}
.con-box.right{
    right: -2%;
}
.con-box h2{
    color: #8e9aaf;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 4px;
}
.con-box p{
    font-size: 12px;
    letter-spacing: 2px;
    color: #8e9aaf;
    text-align: center;
}
.con-box span{
    color: #d3b7d8;
}
.con-box img{
    width: 150px;
    height: 150px;
    opacity: 0.9;
    margin: 40px 0;
}
.con-box button{
    margin-top: 3%;
    background-color: #fff;
    color: #a262ad;
    border: 1px solid #d3b7d8;
    padding: 6px 10px;
    border-radius: 5px;
    letter-spacing: 1px;
    outline: none;
    cursor: pointer;
}
.con-box button:hover{
    background-color: #d3b7d8;
    color: #fff;
}
</style>