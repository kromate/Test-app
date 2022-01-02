<template>
  <div class="w-full flex flex-col items-center ">

  <div class="md:py-20 pb-20 text-center">
<p class="md:text-xl text-lg font-bold text-gray">
  Everyday essentials
</p>
<h3 class="font-bold text-black md:text-6xl  text-4xl mt-4">
  Send, spend and save smarter
</h3>

<p class="md:text-xl text-base px-8 mt-6">
  Make day-to-day spending a breeze with all things money in one place
</p>
  </div>


  <div class="card   bg-blue-600 mb-12 rounded-3xl flex flex-col gap-6 justify-between items-start p-10">
    <div></div>
    <div>
<h3 class="md:text-4xl text-2xl text-white font-semibold w-96x mb-4">
  Pay and get paid, hassle-free
</h3>
<p class="text-white text-xl">
  Send and request money with a tap, split bills <br> easily with anyone in 30+ countries
</p>
    </div>


<div class="flex gap-5 text-white md:text-xl text-sm hover:bg-blue justify-start px-4 py-1  rounded-full ">
  <span>Explore easy payments</span>
  <img src="../../assets/icons/rightArrow.svg" alt="right-arrow">
</div>
  </div>
</div>
</template>

<script>
export default {
    name: "AboutPage"

}
</script>

<style scoped>
.card{
  background-image: url("  https://revolut.com/_next/image?url=https%3A%2F%2Fassets.revolut.com%2Fwebsite%2Fassets%2Fretail%2Fhome-V4%2FPayments.png%3Fauthuser%3D0&w=3840&q=75");
    background-position: center bottom;
    background-size: cover;
    width: 62.5rem;
    max-width: 90vw;
    min-height: 32.75rem;


}


@media only screen and (min-width: 764px){

.w-96x{
  width: 450px;
  
}
}

</style>