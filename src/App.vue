<template>
  <div class="appcontainer">
    <Navbar v-if="hasLogin"/>
    <router-view></router-view>
    <Footer v-if="hasLogin" />
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import {computed} from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
const Route = useRoute()

const hasLogin = computed(()=>{
  if(Route.name === 'Login')
    return false
  return true
})

</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body{
  background: rgb(251,251,251);
}
 ::-webkit-scrollbar {
   width: 0 !important;
 }
 ::-webkit-scrollbar {
   width: 0 !important;height: 0;
}
</style>