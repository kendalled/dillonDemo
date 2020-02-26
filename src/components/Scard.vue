<template>
  <div class="productRoot -mt-4">
    <section class="product max-w-lg bg-white rounded py-10">
      <div v-for="(page, i) in info.pages" :key="i" v-show="page.active" class="product__photo">
        <div class="photo-container shadow-lg">
          <div class="photo-main">
            <div class="controls mt-4 flex items-center justify-end">
              <svg @click="openModal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 mr-4 icon-mail"><path class="primary" d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z" /><path class="primary" d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z" /></svg>
            </div>
            <transition
              name="fade"
              mode="out-in"
            >
              <img
                v-for="(pic, q) in page.data"
                :src="pic"
                :key="q"
                v-if="selected === pic"
                class="w-auto ml-4 shadowed"
                style="height: auto;"
                alt="green apple slice"
              >
            </transition>
            <span class="absolute ml-40 mt-12 bg-white rounded-full text-gray-800 px-4 py-4 text-center border-4 border-orange-400 cursor-pointer focus:outline-none shadow transition-colors"><p class="text-2xl font-semibold">100's</p><p class="text-lg font-semibold -mt-1 text-gray-700"> of titles!</p></span>
          </div>
          <div class="photo-album">
            <ul>
              <li
                @click="clickHandler(img)"
                v-for="(img, j) in page.data"
                :key="j"
                :class="[img === selected ? 'border-gray-600' : 'w-auto']"
                class="w-auto border-2 hover:border-blue-600 transition-colors cursor-pointer"
                draggable="false"
              >
                <img :src="img" alt="green apple" class="-mt-1 h-12 w-auto" draggable="false">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="product__info">
        <div class="title">
          <h1>{{ info.title }}</h1>
          <span>SKU: 123235</span>
        </div>
        <div class="my-0">
          <div class="block mt-4 opacity-0">
            <span class="text-6xl text-gray-300 -mt-6 ml-4 z-10">$</span> <span class="ml-10 z-20 fixed font-black text-gray-800 text-4xl">299.99</span>
          </div>
          <div class="absolute ml-16 -mt-8 hidden">
            <span class="px-8 ml-1 font-semibold text-green-500 text-base">25% off!</span>
          </div>
          <div class="absolute -mt-32 text-right">
            <span class="mt-10 z-20 fixed font-semibold text-gray-600 text-xl pr-0">$<span class="font-semibold ml-1">329.99</span></span><div style="margin-top:3.25rem;" class="absolute w-24 h-1 -ml-1 rounded bg-red-600 opacity-50" />
          </div>
          <div class="absolute -mt-20">
            <span style="font-size: 4rem; font-weight:600;" class="hidden absolute text-gray-700 -mt-6 z-10">$</span> <span class="ml-0 mt-3 z-20 fixed font-bold text-gray-700 text-3xl">$<span class="font-semibold ml-1">249.99</span></span>
          </div>
        </div>
        <div class="variant">
          <h3 class="mb-4 font-semibold text-sm text-gray-800">
            Select an option:
          </h3>
          <ul>
            <li
              @click="clickHandler2(i)"
              v-for="(img, i) in info.choices"
              :key="i"
              :class="[i === optionSet ? 'border-gray-600' : 'w-auto']"
              class="mx-1 border-2 shadow-md"
              draggable="false"
            >
              <img :src="img" :class="[i === 2 ? 'w-12 ml-0' : 'w-auto']" alt="red ghost" draggable="false">
            </li>
          </ul>
        </div>
        <div class="description">
          <h3 class="mb-4 font-semibold text-sm text-gray-800">
            Features:
          </h3>
          <ul v-for="(feature, i) in info.features" :key="i" class="list-reset text-gray-700 font-semibold mb-2 px-2">
            <li class="flex items-center mb-3 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" class="flex-none w-6 mr-2 fill-current text-blue-600" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                /></svg>
              {{ feature }}
            </li>
          </ul>
        </div>
        <a :href="info.link" class="px-20 text-lg font-semibold py-3 rounded shadow bg-blue-600 text-gray-100 text-center">
          See More
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Scard',
  props: {
    'info': {
      type: Object,
      default () {
        return { title: 'Retro Arcade Cabinets',
          choices: [ require('~/static/ghost.png'), require('~/static/hadouken.png') ],
          features: ['Classic arcade controls', '100\'s of classic games', 'Customizable art panels', 'Hand-crafted wooden cabinet'],
          link: 'https://pooltablestore.com/games-arcade-machines/arcade-machines/',
          pages: [
            {
              ind: 0,
              pid: 'p0',
              active: true,
              title: 'pac-man',
              data:
          [
            require('~/static/pac.png'),
            require('~/static/pac2.png'),
            require('~/static/pac3.png')
          ]
            },
            {
              ind: 1,
              pid: 'p1',
              active: false,
              title: 'street fighter',
              data:
          [
            require('~/static/sf.png'),
            require('~/static/sf2.png'),
            require('~/static/sf3.png')
          ]
            }
          ] }
      }
    }
  },
  data () {
    return {
      optionSet: 0,
      selected: this.info.pages[0].data[0]
    }
  },
  watch: {
    optionSet () {
      if (this.optionSet === 0) {
        this.selected = require('~/static/pac.png')
      } else if (this.optionSet === 1) {
        this.selected = require('~/static/sf.png')
      }
      const pages = this.info.pages
      for (let i = 0; i < pages.length; i++) {
        if (i !== this.optionSet) {
          pages[i].active = false
        } else {
          pages[i].active = true
        }
      }
    }
  },
  methods: {
    openModal () {
      this.$emit('open')
    },
    clickHandler (stringy) {
      this.selected = stringy
      console.log('worked (individual)!')
    },
    clickHandler2 (val) {
      this.optionSet = val
      console.log('worked (game style)!')
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s ease-in-out
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}
.primary {
  fill: #fff;
}
.secondary {
  fill: #888;
}
/* ----- Variables ----- */
/* ----- Global ----- */
* {
  box-sizing: border-box;
}
html, body {
  height: 100%;
}
body {
  display: grid;
  grid-template-rows: 1fr;
  background-color: #01e37f;
}
img {
  max-width: 100%;
}
/* ----- Product Section ----- */
.product {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  min-width: 600px;
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
  background: radial-gradient(#F6E05E, #ECC94B);
}
.photo-main img {
  position: absolute;
  left: -4.5rem;
  top: 3rem;
  max-width: 94%;
  backface-visibility: hidden;
}
.shadowed {
    -webkit-filter: drop-shadow(1px 20px 10px rgba(0,0,0,0.4));
    filter: drop-shadow(1px 20px 10px rgba(0,0,0,0.4));
    -ms-filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')";
    filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')";
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
/* ----- Informations Section ----- */
.product__info {
  padding: 0.8em 0;
}
.title h1 {
  margin-bottom: 0.1rem;
  color: #4c4c4c;
  font-size: 1.5rem;
  font-weight: 700;
}
.title span {
  font-size: 0.7rem;
  color: #a6a6a6;
}
.variant {
  overflow: auto;
}
.variant h3 {
  margin-bottom: 1.1rem;
}
.variant li {
  float: left;
  width: 48px;
  height: 48px;
  padding: 3px;
  border-radius: 3px;
  cursor: pointer;
}
.variant li:not(:first-child) {
  margin-left: 0.1rem;
}
.description {
  clear: left;
  margin: 2em 0;
}
/*.description ul {
  font-size: 0.8rem;
  list-style: disc;
  margin-left: 1rem;
}
.description li {
  text-indent: -0.6rem;
  margin-bottom: 0.5rem;
}*/
.buy--btn {
  padding: 1.5em 3.1rem;
  border: none;
  border-radius: 7px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: #ff3f40;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;
}
.buy--btn:active {
  transform: scale(0.97);
}
/* ----- Footer Section ----- */
footer {
  padding: 1rem;
  text-align: center;
  color: #fff;
}
footer a {
  color: #4c4c4c;
}
footer a:hover {
  color: #ff3f40;
}

</style>
