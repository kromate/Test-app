<template>
  <div :class="['bg-primary fixed z-50 top-0 inset-x-0 w-full h-[7vh] items-center flex', cssClass ]">
      <slot/>
  </div>
</template>

<script>
export default {
props:{
    cssClass:{
        type:String,
        default:'',
        required:false
    }
}
}
</script>
