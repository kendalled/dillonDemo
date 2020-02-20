<template>
  <div>
    <form action="https://formspree.io/mzbrlqjg" method="POST" class="flex">
      <input type="hidden" name="_next" value="https://kendalled.github.io/dillonDemo/thanks">
      <input ref="input" type="email" name="email" class="appearance-none rounded-l-lg rounded-r-none px-4 py-2 border-t mr-0 border-b border-l text-gray-800 border-gray-400 bg-white text-sm focus:outline-none transition-colors" placeholder="your@mail.com">
      <button class="px-3 rounded-r-lg -ml-1 text-xs bg-green-600 text-white font-bold py-3 uppercase border-green-600 border-t border-b border-r">
        Subscribe
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Email',
  props: {
    'focusMe': {
      type: Boolean,
      default: false
    }
  },
  watch: {
    focusMe (oldVal, newVal) {
      if (newVal) {
        this.$refs.input.focus()
      } else {
        this.$refs.input.blur()
      }
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    }
  }
}
</script>
