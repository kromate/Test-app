
<template>
  <topbar :css-class="$route.name === 'landing' ? 'justify-center' : 'justify-between px-4' ">
    <span class="font-semibold text-lg text-white">
      {{$route.name === 'landing' ? 'Home' : 'Bus Alert'}}
    </span>

    <span v-if="$route.name !== 'landing' " class="text-white cursor-pointer" @click="router.push('/add')">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12.5H12.5V20C12.5 20.825 11.825 21.5 11 21.5C10.175 21.5 9.5 20.825 9.5 20V12.5H2C1.175 12.5 0.5 11.825 0.5 11C0.5 10.175 1.175 9.5 2 9.5H9.5V2C9.5 1.175 10.175 0.5 11 0.5C11.825 0.5 12.5 1.175 12.5 2V9.5H20C20.825 9.5 21.5 10.175 21.5 11C21.5 11.825 20.825 12.5 20 12.5Z" fill="currentColor"/>
</svg>

    </span>
  </topbar>
  <slot/>
  <bottom-nav/>
</template>

<script>
import BottomNav from '../components/BottomNav.vue'
import Topbar from '../components/Topbar.vue'
import {useRouter} from 'vue-router'
export default {
  components: { Topbar, BottomNav },
  setup(){
    const router = useRouter()
    return{
      router
    }
  }


}
</script>

<style>

</style>