<template>
  <Header/>

  <div class="w-full h-128 flex flex-col items-center justify-center gap-7">
      <span class="text-xl font-bold text-center  ">
          You have successfully signed in
      </span>

           <button class="bg-purple-900 text-white font-semibold py-3 rounded-md w-48" @click="signOut">
            Sign OUt
          </button>
  </div>

  <loader v-if="false"/>
</template>

<script>
import Header from '../components/Header.vue'
import Loader from '../components/Loader.vue'
import { signOut } from '../composables/useAuth'
export default {
name:"HomePage",

  components: { Header, Loader },

  setup(){
      return{
          signOut
      }
  }
}
</script>

<style>

</style>