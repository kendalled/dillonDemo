<template>
  <div class="flex bg-gray-100 h-screen px-1 py-1">
    <ImageGroup />
  </div>
</template>

<script>
import ImageGroup from '~/components/ImageGroup.vue'

export default {
  components: {
    ImageGroup
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
