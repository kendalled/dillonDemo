<template>
  <div class="rooted flex w-full h-screen bg-green-700 justify-center items-center">
    <CarouselDemo style="border-radius: 10px; overflow: hidden;" />
  </div>
</template>

<script>
import CarouselDemo from '~/components/CarouselDemo'
export default {
  components: { CarouselDemo }
}
</script>

<style scoped>
.rooted {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%231a422e' fill-opacity='0.25' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
