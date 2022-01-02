<template>
  <div class="bg w-full h-auto grid place-items-center text-center mx-auto">
   
  <div class="flex flex-col gap-6 text-center items-center md:justify-center h-80">
     <div class="bg1 !h-6 md:hidden"/>
  <h1 class="md:text-8xl text-4xl font-bold whitespace-pre-wrap">
    One app, all <br>
things money
  </h1>

  <p class="text-black md:text-xl text-base px-8">
    From easy money management, to travel perks and investments. Open your account in a flash
  </p>

<router-link to="/login">
     <button class="h-[2.25rem] bg-black text-white rounded-xl text-base px-4 py-2  w-44">
      Get a free account 
    </button>
</router-link>
 
  </div>


</div>
</template>

<script>
export default {
name:"CTA"
}
</script>

<style scoped>
.bg{
  background-image: url("https://assets.revolut.com/website/assets/retail/home-V4/Hero.jpg?authuser=0");
    background-position: center top;
    background-size: cover;
    height: auto;
    width: 100%;
}
.bg1{
  background-image: url("https://assets.revolut.com/website/assets/retail/home-V4/Hero_Mobile.png?authuser=0");
    background-position: center top;
    background-size: cover;
    height: max(250px, 40vw);
    width: 100%;
}
.h-80{
    height: 80vh;
}

@media only screen and (max-width: 764px){
  .h-80{
    height: 75vh;
}

}
</style>