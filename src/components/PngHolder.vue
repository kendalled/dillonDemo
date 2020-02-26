<template>
  <div class="product__photo">
    <div class="photo-container shadow-lg">
      <div class="photo-main">
        <div class="controls mt-4 flex items-center justify-end">
          <svg @click="openModal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 mr-4 icon-mail cursor-pointer"><path class="primary" d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z" /><path class="primary" d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z" /></svg>
        </div>
        <img
          v-for="(pic, q) in imgs"
          :key="q"
          :src="pic"
          v-show="selected === pic"
          :class="[q === 1 ? 'mt-20' : 'mt-8']"
          class="w-auto h-auto ml-4 shadowed"
          alt="green apple slice"
        >
        <div class="absolute bg-red-700 border-4 border-red-700 shadow rounded-r-lg font-bold text-white px-8 py-2 text-sm tracking-relaxed" style="margin-top: 20rem; margin-left: 0rem;">
          SALE
        </div>
      </div>
      <div class="photo-album">
        <ul>
          <li
            @click="clickHandler(img)"
            v-for="(img, j) in imgs"
            :key="j"
            :class="[img === selected ? 'border-gray-600' : 'w-16']"
            class="w-16 h-auto border-2 hover:border-blue-600 transition-colors cursor-pointer"
            draggable="false"
          >
            <img :src="img" alt="green apple" class="object-cover -mt-1 h-12 w-auto" draggable="false">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PngHolder',
  props: {
    'imgs': {
      type: Array,
      default () {
        return [
          require('~/static/pac.png'),
          require('~/static/pac2.png'),
          require('~/static/pac3.png')
        ]
      }
    }
  },
  data () {
    return {
      selected: this.imgs[0]
    }
  },
  methods: {
    openModal () {
      this.$emit('modal')
    },
    clickHandler (stringy) {
      this.selected = stringy
      console.log('worked (individual)!')
    }
  }
}
</script>

<style lang="scss" scoped>
.primary {
  fill: #f1f1f1;
}
/* ----- Photo Section ----- */
.product__photo {
  position: relative;
}
.photo-container {
  position: absolute;
  left: -2.5rem;
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
/* kendall */
.photo-main {
  border-radius: 6px 6px 0 0;
  background-color: #9be010;
  background: radial-gradient(#667EEA, #4C51BF);
}
.photo-main img {
  position: absolute;
  left: -.2rem;
  top: 3rem;
  max-width: 90%;
  backface-visibility: hidden;
}
.photo-album {
  padding: 0.7em 1rem;
  border-radius: 0 0 6px 6px;
  background-color: #fff;
}
.photo-album ul {
  display: flex;
  justify-content: space-around;
}
.photo-album li {
  float: left;
  padding: 7px;
  border-radius: 3px;
}
</style>
