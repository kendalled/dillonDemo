<template>
  <div class="slider">
    <div class="slides overflow-x-scroll overflow-y-hidden">
      <div id="slide1">
        <Scard @open="showOpen" />
      </div>
      <!-- :id="'slide-' + (i+1).toString()" -->
      <div v-for="(slide, i) in slideData" :key="i" :id="'slide' + (i + 2)">
        <Scard2 @open="showOpen" v-if="i !== 1" :info="slide" class="SCARD32" />
        <!-- <Scard3 @open="showOpen" :info="slide" v-else /> -->
      </div>
      <client-only>
        <div v-for="(slide) in extra" :key="slide.title">
          <Scard3 @open="showOpen" :info="slide" />
        </div>
      </client-only>
    </div>
    <Modal :open="openModal" @close="openModal = false" class="modal">
      <h1 class="text-center font-bold text-gray-800 text-xl">
        Subscribe for weekly deals.
      </h1>
      <p class="text-gray-700 text-base -mt-1 mb-4">
        We won't spam you, we promise.
      </p>
      <Email />
      <p class="text-center text-xs text-gray-600 mt-2">
        You may unsubscribe at any time
      </p>
    </Modal>
    <img :src="require('~/static/ptslogo2.png')" class="absolute -mt-20 ml-2 h-12 w-auto opacity-50">
    <!-- old tabbbar location, maybe put alerts / messages? -->
  </div>
</template>

<script>
import Modal from '~/components/Modal'
import Email from '~/components/Email'
import Scard from '~/components/Scard'
import Scard2 from '~/components/Scard2'
import Scard3 from '~/components/Scard3'
export default {
  name: 'CarouselDemo',
  components: { Modal, Email, Scard, Scard2, Scard3 },
  props: {
    'extra': {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      openModal: false,
      selected: 'slide1',
      slideData: [
        {
          title: 'Dart Boards',
          features: ['Rustic look', 'Lifetime warranty', 'Digital scoreboard', 'Hand-crafted wooden cabinet'],
          link: 'https://pooltablestore.com/games-arcades/darts/',
          page: {
            ind: 0,
            pid: 'p0',
            active: true,
            title: 'pac-man',
            data:
          [
            require('~/static/dart.png'),
            require('~/static/dart2.png'),
            require('~/static/dart3.png')
          ]
          }
        }
      ]
    }
  },
  methods: {
    showOpen () {
      this.openModal = true
      console.log('open modal!')
    }
  }
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .slider {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .slides {
    display: flex;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    /*
    scroll-snap-points-x: repeat(300px);
    scroll-snap-type: mandatory;
    */
  }
  .slides::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .slides::-webkit-scrollbar-thumb {
    background: #1f1f1f;
    border-radius: 10px;
  }
  .slides::-webkit-scrollbar-track {
    background: transparent;
  }
  .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100vw;
    height: 100vh;
    margin-right: 50px;
    padding-left: 3rem;
    border-radius: 10px;
    background: transparent;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /*
  .slides > div:target {
    transform: scale(0.8);
  } maybe remove */
  /*img {*/
  /*  object-fit: cover;*/
  /*  position: absolute;*/
  /*  top: 0;*/
  /*  left: 0;*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*}*/

  .slider > span >  a {
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    background: white;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 0 0.5rem 0;
    position: relative;
  }
  .slider > a:active {
    top: 1px;
  }
  .slider > a:focus {
    background: #aaa;
  }

  /* Don't need button navigation
  @supports (scroll-snap-type) {
    .slider > a {
      display: none;
    }
  } */
</style>
