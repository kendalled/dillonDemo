<template>
  <hooper :vertical="true" :itemsToShow="1" :centerMode="true" style="height: 70vh">
    <slide v-for="i in 4" :key="i" :index="i" class="bg-white">
      <p class="w-full text-center font-bold">
        slide {{ i }}
      </p>
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'App',
  components: {
    Hooper,
    Slide
  }
}
</script>

<style scoped>
/* .hooper-slide.is-current {
  transform: scale(1.2); */
</style>
