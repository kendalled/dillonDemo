<template>
  <div class="rooted flex w-full h-screen bg-green-700 justify-center items-center">
    <CarouselDemo :extra="doc" style="border-radius: 10px; overflow: hidden;" />
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase'
import CarouselDemo from '~/components/CarouselDemo'
export default {
  components: { CarouselDemo },
  layout: 'Default',
  data () {
    return {
      doc: []
    }
  },
  async asyncData ({ app, params, error }) {
    const blogref = fireDb.collection('items')
    let data
    try {
      data = []
      await blogref.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data())
          data.push(doc.data())
        })
      })
    } catch (e) {
    // TODO: error handling
      console.log(e)
    }
    return {
      doc: data
    }
  }
}
</script>

<style scoped>
body {
  background-color: #2F855A !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%231a422e' fill-opacity='0.25' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
html {
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #2F855A !important;
}
.rooted {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%231a422e' fill-opacity='0.25' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
