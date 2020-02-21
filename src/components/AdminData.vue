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
                  <p class="text-green-600 font-semibold whitespace-no-wrap">
                    $299.99
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
              Showing 1 to 4 of 50 Entries
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
        <h1 v-if="modalOpen" class="text-center font-bold text-gray-800 text-xl">
          Editing {{ opened.id }}
        </h1>
        <div class="flex flex-wrap -mx-3 mb-6 mt-4">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="title">
              Title
            </label>
            <input
              id="title"
              v-model="opened.title"
              v-if="opened.title"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              @input="emitChange"
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
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              @input="emitChange"
              placeholder="https://google.com"
            >
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6 mt-4">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="price">
              Price
            </label>
            <input id="price" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="299.99">
            <!-- <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> -->
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="testing">
              Testing
            </label>
            <input id="testing" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="https://google.com">
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import Modal from '~/components/Modal'
export default {
  name: 'AdminData',
  components: {
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
      modalOpen: false,
      opened: this.data[0]
    }
  },
  methods: {
    emitChange () {
      this.$emit('changed', this.data)
      console.log('input event fired')
    },
    showOpen () {
      this.openModal = true
      console.log('open modal!')
    },
    modalOpener (elem) {
      console.log(elem)
      this.modalOpen = true
      this.opened = elem
    }
  }
}
</script>
