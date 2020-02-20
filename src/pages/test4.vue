<template>
  <ul class="mt-64">
    <li>
      <label>
        <input v-model="selected1" type="checkbox" name="ghost">
        <div class="icon-box">
          <img :src="require('~/static/ghost.png')" class="w-12 h-12">
        </div>
      </label>
    </li>
    <li>
      <label>
        <input v-model="selected2" type="checkbox" name="hadouken">
        <div class="icon-box">
          <img :src="require('~/static/hadouken.png')" class="w-12 h-12">
        </div>
      </label>
    </li>
  </ul>
</template>

<style scoped>
ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 20px;
}
ul li {
  position: relative;
  list-style: none;
  text-align: center;
  margin: 15px;
}
ul li label {
  position: relative;
  cursor: pointer;
}
ul li label input[type="checkbox"] {
  position: absolute;
  opacity: 0;
}
ul li label :checked ~ .icon-box {
  box-shadow: inset -2px -2px 5px white, inset 3px 3px 5px rgba(0, 0, 0, 0.1);
}
ul li label :checked ~ .icon-box .fa {
  transform: scale(0.95);
}
ul li label .icon-box {
  width: 60px;
  height: 60px;
  background: #ebf5fc;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -2px -2px 5px white, 3px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
ul li label .icon-box .fa {
  font-size: 30px;
  color: #6a9bd8;
}
</style>

<script>
export default {
  // stuff
  data () {
    return {
      selected1: true,
      selected2: false
    }
  },
  watch: {
    selected1 () {
      if (this.selected1) {
        this.selected2 = false
      }
    },
    selected2 () {
      if (this.selected2) {
        this.selected1 = false
      }
    }
  }
}
</script>
