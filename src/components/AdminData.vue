<template>
  <div class="container mx-auto px-4 sm:px-4 antialiased font-sans">
    <div class="py-8">
      <div>
        <h2 class="text-xl text-gray-800 font-semibold leading-tight">
          Showcase Items
        </h2>
      </div>
      <div class="my-2 flex sm:flex-row flex-col" />
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Link
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  msrp
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  price
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  photos
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Features
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="elem in data" v-if="data.length > 0">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10 hidden">
                      <img
                        class="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                      >
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap font-semibold">
                        {{ elem.title }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-blue-500 whitespace-no-wrap underline hover:no-underline cursor-pointer">
                    {{ elem.link }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm max-w-xs overflow-hidden">
                  <p class="text-gray-600 font-semibold whitespace-no-wrap">
                    {{ elem.msrp }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm max-w-xs overflow-hidden">
                  <p class="text-green-600 font-semibold whitespace-no-wrap">
                    {{ elem.price }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm max-w-xs overflow-hidden">
                  <p class="text-gray-900 whitespace-no-wrap">
                    <span class="font-semibold">{{ elem.page.data.length }}/3</span> photos
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm max-w-xs overflow-hidden">
                  <p class="text-gray-900 whitespace-no-wrap">
                    <span class="font-semibold">{{ elem.features.length }}</span> features
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ elem.id }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    @click="modalOpener(elem)"
                    aria-hidden
                    class="relative inline-flex -tems-center bg-green-200 px-5 py-1 font-bold text-green-600 hover:text-white leading-tight rounded-full hover:bg-green-600 transition-colors cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 mr-2 icon-edit fill-current"><path class="primary" d="M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z" /><rect
                      width="20"
                      height="2"
                      x="2"
                      y="20"
                      class="secondary"
                      rx="1"
                    /></svg>
                    <span>edit</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          "
          >
            <span class="text-xs xs:text-sm text-gray-900">
              This is placeholder text
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
              >
                Prev
              </button>
              <button
                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal :open="modalOpen" @close="modalOpen = false" class="modal">
        <div @click="modalOpen = false" class="cursor-pointer z-50 flex w-full justify-end -mt-4">
          <svg
            class="fill-current text-gray-600 hover:text-blue-700 transition-colors"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
        </div>
        <h1 v-if="modalOpen" class="-mt-2 mb-2 text-center font-semibold text-lg text-gray-800">
          Editing: {{ opened.id }}<span :class="[need ? 'text-red-700' : 'hidden']">*</span>
        </h1>
        <div v-show="!base" class="flex flex-wrap -mx-3 mt-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="title">
              Title
            </label>
            <input
              id="title"
              v-model="opened.title"
              v-if="opened.title"
              @input="needSaved"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Dart Boards"
            >
            <!-- <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> -->
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="link">
              Link
            </label>
            <input
              id="link"
              v-model="opened.link"
              v-if="opened.link"
              @input="needSaved"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="url"
              placeholder="https://pooltablestore.com"
            >
          </div>
        </div>
        <div v-show="!base" class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="msrp">
              msrp
            </label>
            <input
              id="msrp"
              v-model="opened.msrp"
              v-if="opened.msrp"
              @input="needSaved"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="399.99"
            >
            <!-- <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> -->
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="price">
              price
            </label>
            <input
              id="price"
              v-model="opened.price"
              v-if="opened.price"
              @input="needSaved"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="399.99"
            >
          </div>
        </div>
        <span v-show="base" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left w-full">Images</span>
        <div v-show="base" class="flex justify-start mb-4 w-full">
          <div v-for="(img, j) in opened.page.data" v-if="!filesChanged" @click="chooseImg(j)" :class="[j === picIndex ? 'border-blue-500' : 'border-gray-400']" class="border-2 overflow-hidden rounded w-16 h-16 mr-4 cursor-pointer">
            <img :src="img" class="inline-block w-auto h-16 object-cover" draggable="false">
          </div>
          <div v-for="(img, j) in opened.page.data" v-if="filesChanged" @click="chooseImg(j)" :class="[j === picIndex ? 'border-blue-500' : 'border-gray-400']" class="border-2 overflow-hidden rounded w-16 h-16 mr-4 cursor-pointer">
            <img :src="img" class="inline-block w-auto h-16 object-cover" draggable="false">
          </div>
          <div class="flex-col w-1/2 h-auto">
            <CustomFileInput @file="newFile" />
            <button @click="openPrev" class="focus:outline-none mt-2 text-gray-700 border-b-2 font-semibold text-sm py-0 w-full hover:border-blue-400 transition-colors hover:text-blue-600 pb-1">
              preview
            </button>
          </div>
        </div>
        <div class="flex w-full h-auto justify-between">
          <button v-if="base" @click="base = false" class="focus:outline-none flex-shrink-0 border-2 border-blue-200 text-blue-500 font-semibold hover:text-blue-800 hover:border-blue-600 text-sm py-1 px-2 rounded transition-colors" type="button">
            back
          </button>
          <button v-if="!base" @click="base = true" class="focus:outline-none flex-shrink-0 border-2 border-blue-200 text-blue-500 font-semibold hover:text-blue-800 hover:border-blue-600 text-sm py-1 px-2 rounded transition-colors" type="button">
            edit photos
          </button>
          <button @click="saveData(opened)" class="flex-shrink-0 bg-blue-500 font-semibold hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-5 rounded transition-colors" type="button">
            Save
          </button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase'
import CustomFileInput from '~/components/CustomFileInput'
import Modal from '~/components/Modal'
export default {
  name: 'AdminData',
  components: {
    CustomFileInput,
    Modal
  },
  props: {
    'data': {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      url: '',
      opened: this.data[0],
      picIndex: 0,
      base: false,
      modalOpen: false,
      filesChanged: false,
      need: false
    }
  },
  watch: {
    modalOpen () {
      if (this.modalOpen === false) {
        this.filesChanged = false
        // base == base page (true if on page 0)
        this.base = false
        this.picIndex = 0
      }
    },
    url () {
      if (this.url !== '') {
        this.opened.page.data[this.picIndex] = this.url
        console.log('changed pics!')
      }
    }
  },
  methods: {
    openPrev () {
      const vm = this
      if (process.browser) {
        const link = vm.opened.page.data[vm.picIndex]
        window.open(link, '_blank')
      }
    },
    needSaved () {
      // tracks if changes need to be saved
      this.need = true
    },
    newFile (link) {
      this.need = true
      this.filesChanged = true
      this.url = link
      console.log('new url seen: ' + this.url)
    },
    chooseImg (ind) {
      this.picIndex = ind
    },
    saveData (val) {
      // db reference
      const blogref = fireDb.collection('items').doc(val.id)
      // sets in firestore
      try {
        blogref.set(val)
      } catch (error) {
        alert(error)
      }
      this.modalOpen = false
      this.need = false
      console.log('updated firestore??')
    },
    modalOpener (elem) {
      console.log(elem)
      this.modalOpen = true
      this.opened = elem
    }
  }
}
</script>
