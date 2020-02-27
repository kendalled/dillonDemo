<template>
  <div class="container mx-auto px-4 sm:px-4 antialiased font-sans">
    <div class="py-8">
      <div>
        <h2 class="text-2xl text-gray-900 font-bold leading-tight">
          Showcase Items <span v-if="need" class="text-red-600 font-black">*</span>
        </h2>
      </div>
      <div class="my-2 flex sm:flex-row flex-col" />
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  v-for="heading in headings"
                  class="px-5 py-3 border-b-2 border-gray-400 bg-gray-800 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider"
                >
                  {{ heading }}
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
                      <p class="text-gray-900 font-semibold max-w-md overflow-hidden">
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
                  <p class="text-gray-700 font-semibold whitespace-no-wrap">
                    ${{ elem.msrp }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm max-w-xs overflow-hidden">
                  <p class="text-green-600 font-semibold whitespace-no-wrap">
                    ${{ elem.price }}
                  </p>
                </td>
                <td class="px-5 py-6 border-b border-gray-200 bg-white text-sm max-w-xs">
                  <div class="flex overflow-hidden">
                    <img
                      v-for="(pic, q) in elem.page.data"
                      :src="pic"
                      :class="[q !== 0 ? '-ml-2' : '-ml-0']"
                      @click="modalOpenerImg(elem)"
                      class="inline-block h-10 w-10 rounded-full text-white shadow-solid border-gray-400 border-2 object-cover bg-white hover:border-blue-500 transition-colors cursor-pointer"
                      draggable="false"
                      alt="Photo"
                    >
                  </div>
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
                    class="text-sm relative inline-flex -tems-center bg-green-200 px-5 py-2 font-bold text-green-800 hover:text-white leading-tight rounded hover:bg-green-600 transition-colors cursor-pointer focus:outline-none"
                  >
                    <span>edit</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-3 h-3 ml-2 mt-1 icon-edit fill-current"><path class="primary" d="M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z" /><rect
                      width="20"
                      height="2"
                      x="2"
                      y="20"
                      class="secondary"
                      rx="1"
                    /></svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- yeet -->
          <div
            class="px-5 py-5 bg-white border-t border-gray-200 flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <span class="text-xs xs:text-sm text-gray-800 mt-3 absolute font-semibold">
              {{ data.length }}/{{ data.length }} slides <span v-if="need" class="text-sm font-semibold text-red-600">*</span>
            </span>
            <div class="flex w-full justify-end xs:mt-0">
              <button @click="addSlide" class="bg-green-200 hover:bg-green-500 text-green-900 font-bold py-2 px-4 rounded inline-flex items-center transition-colors group focus:outline-none">
                <span class="group-hover:text-white">Add Slide</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-auto ml-3 fill-current text-green-700 group-hover:text-gray-100 icon-add-circle transition-none"><circle cx="12" cy="12" r="10" class="primary" /><path class="secondary fill-current text-white group-hover:text-gray-800 transition-colors" d="M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z" /></svg>
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
        <div v-if="modalOpen" class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Editing: {{ opened.id }}<span :class="[need ? 'text-red-700' : 'hidden']">*</span>
          </h3>
        </div>
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
        <span v-if="base" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left w-full">Images</span>
        <div v-if="base" class="flex justify-start mb-4 w-full">
          <div v-for="(img, j) in opened.page.data" v-if="!filesChanged" @click="chooseImg(j)" :class="[j === picIndex ? 'border-blue-500' : 'border-gray-400']" class="border-2 overflow-hidden rounded w-16 h-16 mr-4 cursor-pointer">
            <img :src="img" class="inline-block w-16 h-16 object-cover" draggable="false">
          </div>
          <div v-for="(img, j) in opened.page.data" v-if="filesChanged" @click="chooseImg(j)" :class="[j === picIndex ? 'border-blue-500' : 'border-gray-400']" class="border-2 overflow-hidden rounded w-16 h-16 mr-4 cursor-pointer">
            <img :src="img" class="inline-block w-16 h-16 object-cover" draggable="false">
          </div>
          <div class="flex-col w-1/2 h-auto">
            <CustomFileInput @file="newFile" />
            <button @click="openPrev" class="focus:outline-none mt-2 text-gray-700 border-b-2 font-semibold text-sm py-0 w-full hover:border-blue-400 transition-colors hover:text-blue-600 pb-1">
              preview
            </button>
          </div>
        </div>
        <div v-if="base" class="flex flex-wrap -mx-3 mt-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="feat0">
              Feature 1
            </label>
            <input
              id="feat0"
              v-model="opened.features[0]"
              v-if="opened.features[0]"
              @input="needSaved"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Great battery life"
            >
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="feat1">
              Feature 2
            </label>
            <input
              id="feat1"
              v-model="opened.features[1]"
              v-if="opened.features[1]"
              @input="needSaved"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Great wooden legs"
            >
          </div>
        </div>
        <div v-if="base" class="flex flex-wrap -mx-3 mt-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="feat0">
              Feature 3
            </label>
            <input
              id="feat0"
              v-model="opened.features[2]"
              v-if="opened.features[2]"
              @input="needSaved"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Custom rack included"
            >
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="feat1">
              Feature 4
            </label>
            <input
              id="feat1"
              v-model="opened.features[3]"
              v-if="opened.features[3]"
              @input="needSaved"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Free shipping"
            >
          </div>
        </div>
        <div class="flex w-full h-auto justify-start">
          <button v-if="base" @click="backHandler" class="focus:outline-none flex-shrink-0 border-b-2 border-blue-200 text-blue-500 font-semibold hover:text-blue-800 hover:border-blue-600 text-xs py-1 px-6 transition-colors" type="button">
            go back
          </button>
          <button v-if="base" @click="deleteSlide(opened)" class="ml-4 focus:outline-none flex-shrink-0 border-b-2 border-gray-400 text-gray-600 font-semibold hover:text-red-800 hover:border-red-600 text-xs py-1 px-6 transition-colors" type="button">
            delete slide
          </button>
          <button v-if="!base" @click="base = true" class="focus:outline-none flex-shrink-0 border-b-2 border-blue-200 text-blue-500 font-semibold hover:text-blue-800 hover:border-blue-600 text-xs py-1 px-6 transition-colors" type="button">
            photos and features
          </button>
          <button @click="saveData(opened)" class="ml-auto flex-shrink-0 bg-blue-500 font-semibold hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-5 rounded transition-colors focus:outline-none shadow" type="button">
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
      headings: ['title', 'link', 'msrp', 'price', 'photos', 'features', 'id', 'actions'],
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
        this.filesChanged = true
        console.log('changed pics!')
      }
    }
  },
  methods: {
    backHandler () {
      if (process.browser) {
        if (!this.need) {
          this.base = false
        } else {
          const con = confirm('This is a save warning. Clicking cancel closes this dialog so you can save first. Clicking OK loses changes on photos & features.')
          if (con) {
            this.base = false
          } else {
            console.log('you hit cancel.')
          }
        }
      }
    },
    addSlide () {
      this.need = true
      const id = 'item' + (this.data.length + 1).toString()
      const variab = { 'isPNG': false, 'features': [ 'Professional quality', '5 year limited warranty', 'Customizable felt colors', 'Dining top available' ], id, 'link': 'https://pooltablestore.com/tables-1/', 'msrp': '3,249.99', 'page': { 'active': true, 'data': [ 'https://firebasestorage.googleapis.com/v0/b/dillondemo1.appspot.com/o/poolnewnew.png?alt=media&token=193eaf5b-5350-4847-8a86-d56c417d74ec', 'https://firebasestorage.googleapis.com/v0/b/dillondemo1.appspot.com/o/poolnew2.png?alt=media&token=c3fd3a66-410a-4744-a25f-05d888688a85', 'https://firebasestorage.googleapis.com/v0/b/dillondemo1.appspot.com/o/poolnew3.png?alt=media&token=4e9bb3c0-716c-4a03-829a-064ed55dfc0c' ], 'ind': 0, 'pid': 'p0', 'title': 'pac-man' }, 'price': '2,434.99', 'title': 'Empty Slide' }
      this.data.push(variab)
    },
    deleteSlide (val) {
      const ind = this.data.indexOf(val)
      const vm = this
      if (ind > 2) {
        // db reference
        const itemRef = fireDb.collection('items').doc(val.id)
        // local cached copy spliced
        const index = this.data.indexOf(val)
        if (index !== -1) {
          this.data.splice(index, 1)
        }
        // firestore copy
        itemRef.delete().then(function () {
          console.log('Document successfully deleted!')
          vm.need = false
        }).catch(function (error) {
          console.error('Error removing document: ', error)
        })
        // closes modal
        this.modalOpen = false
      } else {
        alert('Cannot delete first 3 slides - they serve as backups. First two PNG, then 1 JPG example.')
      }
    },
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
      const itemRef = fireDb.collection('items').doc(val.id)
      // sets in firestore
      try {
        itemRef.set(val)
      } catch (error) {
        alert(error)
      }
      this.modalOpen = false
      this.need = false
      console.log('updated firestore??')
    },
    modalOpener (elem) {
      // console.log(elem)
      this.opened = elem
      this.modalOpen = true
    },
    modalOpenerImg (elem) {
      // console.log(elem)
      this.opened = elem
      this.modalOpen = true
      this.base = true
    }
  }
}
</script>
