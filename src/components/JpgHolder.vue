<template>
  <div class="wrapper shadow-xl">
    <div class="container">
      <div class="top overflow-hidden">
        <img class="object-cover h-full object-center" :src="selected" />
      </div>
      <div class="product__photo">
          <div class="photo-container absolute ml-10">
            <div class="photo-album">
              <ul>
                <li
                  @click="clickHandler(img)"
                  v-for="(img, j) in imgs"
                  :key="j"
                  :class="[img === selected ? 'border-gray-600' : 'w-16']"
                  class="w-16 h-16 border-2 border-gray-400 hover:border-blue-600 transition-colors cursor-pointer"
                  draggable="false"
                >
                  <img :src="img" alt="green apple" class="object-cover -mt-1 h-16 w-16" draggable="false">
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JpgHolder',
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
.photo-album {
  height: full;
  padding: 1.16rem 1rem;
  border-radius: 0 0 6px 6px;
  background-color: #fff;
}
.photo-album ul {
  display: flex;
  justify-content: space-around;
}
.photo-album li {
  overflow:hidden;
  float: left;
  border-radius: 3px;
}
html, body{
  background: #E3E3D8;
  font-family: sans-serif;
  padding: 25px;
}

.wrapper{
  width: 300px;
  height: 500px;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  transform: translateX(-2rem);

  .container{
    width:100%;
    height:100%;
    .top{
      height: 80%;
      width:100%;
    }
    .bottom{
      width: 200%;
      height: 20%;
      transition: transform 0.5s;
      &.clicked{
        transform: translateX(-50%);
      }
      h1{
          margin:0;
          padding:0;
      }
      p{
          margin:0;
          padding:0;
      }
      .left{
        height:100%;
        width: 50%;
        background: #f4f4f4;
        position:relative;
        float:left;
      }
    }
  }

}
</style>
