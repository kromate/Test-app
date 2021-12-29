<template>
  <Header/>

  <div class="w-full  grid place-items-center h-80x">
      <div class="w-full flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold text-center mb-16">
          Welcome Back
      </h1>

      <form class="flex flex-col gap-6" @submit.prevent="submit">
          <div class="flex flex-col">
              <label for="email" class="font-bold mb-2">
                  Email Address
              </label>

              <input v-model="email" type="email" class="bg-transparent border border-gray rounded-md h-12 w-96 px-4" required/>
              <p class="mt-1 text-red-600">{{global.emailError}}</p>
             
          </div>
          
          <div class="flex flex-col">
              <label for="email" class="font-bold mb-2">
                  Password <span class="text-gray font-normal">. Forgot ?</span>
              </label>

              <input v-model="password" type="password" class="bg-transparent border border-gray rounded-md h-12 w-96 px-4" required/>
               <p class="mt-1 text-red-600">{{global.passwordError}}</p>
          </div>

          <button class="bg-purple-900 text-white font-semibold py-3 rounded-md" type="submit">
              Login to Eligible Pay
          </button>
          
      </form>
      </div>



  </div>

  <Loader v-if="global.loading"/>
</template>

<script>
import { ref } from 'vue';
import Header from '../components/Header.vue'
import { useLogin } from '../composables/useAuth';
import Loader from '../components/Loader.vue';

export default {
name: "LogIn",
  components: { Header, Loader },
  
  setup(){

const email = ref('')
const password = ref('')

    const {submit, global} = useLogin(email, password)


  
 
 

 return {
    submit , email, password, global
 }
  }
}
</script>

<style scoped>
.h-80x{
    height: 80vh;
}
.w-96{
    width: 500px !important;
}
</style>


//