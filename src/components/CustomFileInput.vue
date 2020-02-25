<template>
  <div class="flex w-auto h-auto">
    <div :class="[uploading ? 'opacity-0' : 'opacity-100']" class="flex w-full h-auto items-center justify-center mb-0">
      <label class="w-full flex flex-col items-center px-4 bg-blue-500 text-gray-100 rounded tracking-wide border cursor-pointer hover:bg-blue-600 hover:text-white transition-colors py-1">
        <span class="font-semibold text-sm">Select file(s)</span>
        <section class="text-left h-auto flex flex-col w-full justify-start">
          <div class="flex w-full h-auto">
            <p class="text-xs font-bold uppercase tracking-tight text-gray-700 hidden">{{ file }}<svg xmlns="http://www.w3.org/2000/svg" class="flex-none inline-block w-4 ml-4" viewBox="0 0 24 24" fill="green">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              /></svg></p></div>
        </section>
        <input @change="changeSweg" type="file" name="File(s)" class="hidden">
      </label>
    </div>
    <FileLoader v-show="uploading" />
  </div>
</template>

<script>
import FileLoader from '~/components/FileLoader'
import { storage } from '~/plugins/firebase'
export default {
  name: 'CustomFileInput',
  components: {
    FileLoader
  },
  data () {
    return {
      file: '',
      uploading: false
    }
  },
  methods: {
    changeSweg (event) {
      this.uploading = true
      let url = ''
      const vm = this
      this.file = event.target.files[0]
      const storageRef = storage.ref()
      const thisRef = storageRef.child(this.file.name)
      thisRef.put(this.file).then(function (snapshot) {
        // gets download url to update client and post to firestore upon saving
        snapshot.ref.getDownloadURL().then(function (e) {
          url = e.toString()
          vm.$emit('file', url)
          vm.uploading = false
        })
      })
    }
  }
}
</script>
