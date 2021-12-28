<template>
  <div class="bg w-full h-auto grid place-items-center text-center">
  <div class="flex flex-col gap-6 text-center items-center justify-center h-80">
  <h1 class="text-8xl font-bold whitespace-pre-wrap">
    One app, all <br>
things money
  </h1>

  <p class="text-black text-xl">
    From easy money management, to travel perks and investments. Open your account in a flash
  </p>

      <button class="h-[2.25rem] bg-black text-white rounded-xl text-base px-4 py-2  w-44">
      Get a free account 
    </button>
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

}
.h-80{
    height: 80vh;
}
</style>