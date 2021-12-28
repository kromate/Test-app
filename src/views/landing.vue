<template>
<Header/>
<CTA/>
<About/>


</template>

<script >
import Header from '../components/Header.vue'
import About from '../components/home/About.vue'
import CTA from '../components/home/CTA.vue'
export default {
name: "LandingPage",
  components: { Header, CTA, About }
}

</script>

<style scoped>

</style>