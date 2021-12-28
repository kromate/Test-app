<template>
  <header class="w-full sticky top-0 z-10 blur-lg ">
<div class="container flex py-4 max-w-5xl mx-auto justify-between items-center">
  <div class="flex gap-8">
<img src="../assets/icons/logo.svg" alt="logo" class="mr-4">
<span>
  Personal
</span>
<span>
  Business
</span>
<span>
  Company
</span>
  </div>

  <div class="flex items-center gap-4">
    <button class="h-[2.25rem] bg-white text-black rounded-xl text-base px-4 py-2  ">
      Log in
    </button>
    <button class="h-[2.25rem] bg-black text-white rounded-xl text-base px-4 py-2  ">
      Sign up
    </button>
  </div>
</div>
</header>
</template>

<script>
export default {
name: "HeaderComponent"
}
</script>

<style scoped>
header{
    background-color: rgba(241, 242, 244, 0.8);
    border-bottom: 1px solid rgb(223, 227, 231);

}
</style>