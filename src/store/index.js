import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    //判断是不是第一次
    isGetterRouter:false,
    //侧边栏是否折叠
    isCollapsed:false,
    //用户信息
    userInfo:{}
  },
  getters: {
  },
  mutations: {
    //这里是修改仓库里state的值
    changeGetterRouter(state,value){
      state.isGetterRouter=value
    },
    //控制侧边栏展开
    changeCollapsed(state,value){
      state.isCollapsed = !state.isCollapsed
    },
    //用户信息
    changeUserInfo(state,value){
      //先把老的展开，再把新的合并进来
      state.userInfo = {
        ...state.userInfo,
        ...value
      }
    },
    //清空用户信息
    clearUserInfo(state,value){
      state.userInfo = {} //把userInfo设置为空就算清空了
    } 
  },
  actions: {
  },
  modules: {
  },
  plugins:[createPersistedState({
    paths:["isCollapsed","userInfo"] //放在paths里的才会持久化
  })]
})
