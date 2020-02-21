<template>
  <client-only>
    <div class="admin-wrapper">
      <div v-if="loggedIn" class="font-sans bg-grey-lighter flex flex-col min-h-screen w-full">
        <div class="bg-gray-100 shadow-">
          <div class="container mx-auto px-4">
            <div class="flex items-center md:justify-between py-4">
              <div class="w-1/4 md:hidden">
                <svg class="fill-current text-white h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z" /></svg>
              </div>
              <div class="w-1/2 md:w-auto text-center text-gray-800 text-2xl font-semibold">
                <span class="hidden">{{ isDifferent }}</span>
              </div>
              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" class="absolute h-40 w-auto mt-1" viewBox="0 0 792 612">
                <defs>
                  <style>
                    .cls-1{fill:#ed2224}.cls-2,.cls-6{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-5,.cls-6{fill:#fff}.cls-6{stroke-width:3px}
                  </style>
                </defs>
                <g id="qyyTQE.tif">
                  <path class="cls-1" d="M654.62 321.38a8.7 8.7 0 00-3.73.27 72.47 72.47 0 00-19.71 6.46 19 19 0 00-2.87 1.72 5.84 5.84 0 00-.94.77c-.55.6-1.15 1.24-.92 2.14s1.16 1.19 2 1.39a16.26 16.26 0 003.48.3c5.08 0 10.15.21 15.21.64a48.07 48.07 0 0110.41 2.1 12.29 12.29 0 013.15 1.49 5.1 5.1 0 012.36 6 9.6 9.6 0 01-2.76 4.65 22.15 22.15 0 01-6.94 4.57 89.25 89.25 0 01-17.84 5.46 79 79 0 01-14 1.7 24.31 24.31 0 01-5.45-.43 7 7 0 01-1.16-.34c-1.72-.64-2-1.16-1.4-2.87.31-.91.66-1.81 1-2.72a3.59 3.59 0 011.45-1.9 17.34 17.34 0 016.33-2.06c.12.81-.51.93-.82 1.26s-.41.35-.31.63.37.3.63.32a18.69 18.69 0 004.09-.35 115 115 0 0018.25-3.95 42.44 42.44 0 008.23-3.53 10.13 10.13 0 002.55-1.91 1.2 1.2 0 00-.12-2 5.38 5.38 0 00-2.32-1.08 29.32 29.32 0 00-7.68-.93c-5.43 0-10.86 0-16.28-.23a26.38 26.38 0 01-6-.83c-2.89-.82-3.94-2.15-4.05-5.1v-4a5.69 5.69 0 011.91-4.32 18.79 18.79 0 013.53-2.62 71.72 71.72 0 0120.66-7.86 57.34 57.34 0 0115.21-1.84 11.7 11.7 0 013 .44 2.49 2.49 0 011.85 2.3c.45 2.73-.72 4.48-3 5.72-1.16.63-2.3 1.29-3.49 1.86a29.46 29.46 0 00-4.95 3 5.4 5.4 0 01-1.71 1c-.39.11-.85.21-1.14-.14s0-.78.2-1.11a14.19 14.19 0 012.9-2.89c.32-.28.88-.48 1.19-1.18zM29 235.87c2.36.44 4.69-.3 6.78.66-.07.65-.44.69-.78.73-.7.09-1.41.2-2.12.22a48.64 48.64 0 00-7.7.85 6.9 6.9 0 01-1.36.14 2.07 2.07 0 01-2.37-2 14.91 14.91 0 01.74-7.63 5.25 5.25 0 012-2.59 17.6 17.6 0 013.92-2A112.19 112.19 0 0151.74 218c3.66-.55 7.35-.83 11-1.09h1.52c4.69-.45 7.47 2.19 9.56 5.92a3.37 3.37 0 01.15 2.94 19.63 19.63 0 01-2.18 4.16A118 118 0 0060.63 251c-.19.47-.34.95-.55 1.41-.28.63-.3 1.18.35 1.59s.6.95.4 1.59a18.07 18.07 0 01-5.54 8.41c-1.36 1.21-2.72.75-4.09 0a2.81 2.81 0 01-1.75-3.19 37.1 37.1 0 011.15-4.56c1.49-4.91 4.09-9.26 6.68-13.62 2.93-4.93 6.12-9.7 9.48-14.34.51-.71 1.51-1.51 1-2.34s-1.62-.29-2.44-.19a143.22 143.22 0 00-16.42 3.15 150.32 150.32 0 00-17.25 5.36 5.64 5.64 0 00-2.65 1.6zM776 328.05c-.2-.9-.84-1.17-1.55-.59a28.21 28.21 0 00-2.1 2 43.36 43.36 0 01-5.93 5.23 11.35 11.35 0 01-3.55 1.68 6.79 6.79 0 01-4.34-.06c-1.5-.62-1.6-1.38-.4-2.43 1.57-1.37 3.17-2.7 4.75-4.05a20.79 20.79 0 004.43-5.19 8.44 8.44 0 001.22-3.57c.34-3.17-1.52-4.84-4.62-4.16l-.59.14a25.39 25.39 0 00-9.83 5.29c-2.87 2.6-5.19 5.58-5.75 9.58a1.42 1.42 0 01-.62 1 32.55 32.55 0 01-8.15 4.68 5.37 5.37 0 01-2.38.38 2 2 0 01-2-2.73 11.09 11.09 0 011.93-4.11 31.38 31.38 0 013.85-4.3c1.25-1.2 1.26-1.78.28-3.16-.2-.29-.43-.56-.62-.86a2.9 2.9 0 00-3-1.28 15.18 15.18 0 00-1.64.28l-7.26 1.7a6.92 6.92 0 01-1.19.22c-.61 0-.91-.23-.83-.93.17-1.45-.11-1.66-1.54-1.25a4.25 4.25 0 00-1 .39 12.52 12.52 0 00-5.31 5.49 7.8 7.8 0 00-.79 3.07 2.14 2.14 0 00.63 1.65c1 1 1 1.06.16 2.12-.52.62-1.11 1.19-1.67 1.78-.31.33-.79.62-.89 1-.25.87-.94 1.14-1.61 1.47a19.33 19.33 0 01-3.27 1.25 4.39 4.39 0 01-1.65.18c-.72-.07-.87-.28-.63-1s.62-1.62.89-2.43a9.48 9.48 0 00.12-5.7 2.38 2.38 0 00-2.21-2c-.31 0-.72 0-.9-.43.06-.14.1-.29.17-.42.64-1.2.6-1.33-.69-1.8a9.15 9.15 0 00-5.69-.12 22.29 22.29 0 00-7.93 4.38 18.3 18.3 0 00-6.12 8.54c-.08.23 0 .52-.36.61-1 .28-1.4 1.14-2 1.8a26.21 26.21 0 01-6.3 5 8.28 8.28 0 01-2.69 1 2.19 2.19 0 01-2.76-2.08 6.8 6.8 0 01.2-2.87 48.86 48.86 0 013.34-8.14 2.94 2.94 0 012.66-1.69c1-.05 1.91-.18 2.87-.29a3.26 3.26 0 002.21-1.21 36.28 36.28 0 003.66-5.05c.71-1.22.56-1.42-.91-1.42a9.22 9.22 0 01-2.72 0 4.39 4.39 0 01.77-1.43c.59-.89 1.23-1.74 1.77-2.66.43-.71.25-1.12-.52-1.4a2.47 2.47 0 00-.89-.17c-2.71.07-5.09.83-6.69 3.23-.54.8-1.1 1.58-1.63 2.39a2.81 2.81 0 01-2.09 1.36c-1.2.16-2.4.38-3.6.58a5.41 5.41 0 00-3.38 1.58 15.25 15.25 0 00-2.57 4.63q-.43 1.17.87 1.17a19.69 19.69 0 002.41-.25 6.2 6.2 0 012.39-.06 1.71 1.71 0 010 .51c-.18.42-.38.83-.59 1.24a57.31 57.31 0 00-4.38 10.64 10.47 10.47 0 00-.19 4.82 3.93 3.93 0 004.05 3.39 8.22 8.22 0 003.53-.8 37.33 37.33 0 008.12-5.33 49.44 49.44 0 005.44-5.08 10.33 10.33 0 001.85 2.87c3.79 3.65 8.94 5.09 14.06 1.4a29.39 29.39 0 003-2.57 3.67 3.67 0 012.57-1.14c3.65-.05 6.75-1.64 9.7-3.59a3.06 3.06 0 001.65-2.25 1.86 1.86 0 01.63-1c1.29-1.51 2.59-3 3.86-4.52a4.27 4.27 0 012-1.34c2.17-.69 4.34-1.39 6.52-2.07.37-.12.75-.33 1.19 0a4 4 0 01-1.11 1.38 16.06 16.06 0 00-4.19 7.31 5.39 5.39 0 004 6.8 6.09 6.09 0 003.73-.23 28.2 28.2 0 006.24-3.46 60 60 0 005.83-4.55c.11.07.17.09.19.12.18.36.36.73.55 1.08a8.63 8.63 0 006.66 4.77 14.44 14.44 0 008.6-1.29c5.12-2.52 8.67-6.75 12-11.19a1.72 1.72 0 00.27-1.48zm-74 4.29a14.64 14.64 0 00-1.12 4.07 7.24 7.24 0 00.48 4.43l-5.49 4.39a2.75 2.75 0 01-3.34-2.5 5.06 5.06 0 011-4.44 35.05 35.05 0 017-6.23 2.85 2.85 0 011.46-.62c.31.37.1.63.01.9zm54.31-.72c-.45-.22-.31-.69-.35-1.2a13.27 13.27 0 015.27-9.09 3.24 3.24 0 01.66-.36c.85-.34 1.32-.05 1.23.84a6.46 6.46 0 01-.41 1.61 15.26 15.26 0 01-2.56 4.44c-.73.9-1.42 1.85-2.13 2.76a4.92 4.92 0 01-.63.66c-.34.27-.69.55-1.11.34zM130.86 241.5c-.15-.93-.87-1.3-1.64-.78a10.91 10.91 0 00-1.26 1.1 57.53 57.53 0 01-6.79 5.87 12.59 12.59 0 01-5.43 2.23 5.7 5.7 0 01-3.57-.44c-1.36-.73-1.41-1.25-.23-2.24 1.76-1.46 3.55-2.88 5.32-4.32a20.37 20.37 0 004.57-5.26 7.57 7.57 0 001.12-4.5 3.14 3.14 0 00-2.67-3.06 4.1 4.1 0 00-1.81.05 25.31 25.31 0 00-14.35 8.57 11.78 11.78 0 00-2.75 5.19 4.17 4.17 0 01-1.63 2.62 35.37 35.37 0 01-4.24 3 5.31 5.31 0 01-2.45.74 1.81 1.81 0 01-2-2.56 7.24 7.24 0 01.85-1.6c1.52-2.34 3.08-4.66 4.61-7a10.11 10.11 0 00.72-1.16 1.1 1.1 0 00-.26-1.38 5 5 0 00-6.38-.92 28.63 28.63 0 00-4.43 3.22 56.24 56.24 0 00-8.89 9.13 7.27 7.27 0 01-2.69 2.56c-1-1.74-.47-3.11.6-4.42 2.42-2.94 4.74-6 7-9a164.29 164.29 0 0012.55-18.5 27.06 27.06 0 001.3-2.58c.43-1 .27-1.36-.6-1.89a4.08 4.08 0 00-5.19.22 10.22 10.22 0 00-1.27 1.1 97.9 97.9 0 00-17.35 23.75 54.91 54.91 0 00-3.55 8.23 6.3 6.3 0 00-.33 3.15 15.42 15.42 0 002.37 5.88 3.23 3.23 0 005.23.39 35.82 35.82 0 002.53-2.89 108.52 108.52 0 018.61-10 10.22 10.22 0 012.25-1.78c.25.75-.24 1.08-.51 1.46a28.72 28.72 0 00-3.48 6.74 8 8 0 00-.46 1.92 4.09 4.09 0 004.2 4.82 6.26 6.26 0 002.81-.53 19.52 19.52 0 004-2.41c2-1.54 3.89-3.2 5.76-4.88.11.09.17.11.19.15.12.22.23.45.34.68a9.17 9.17 0 006.94 5.12 16.72 16.72 0 0012.79-3.2 44.26 44.26 0 009-9 2 2 0 00.55-1.59zM110 244.87c-.46-.23-.26-.71-.31-1.26a13 13 0 015.74-9.1 2.34 2.34 0 01.84-.33c.62-.11 1 .21.94.83a7.61 7.61 0 01-.46 1.76c-1.17 3-3.36 5.28-5.4 7.66l-.11.11c-.33.31-.73.56-1.24.33z" />
                </g>
                <path class="cls-2" d="M138.29 258.07h-32.5v55.41H123v-21.62h15.32c19.68 0 19.68-33.79-.03-33.79zm-7.74 23.16H123v-12.38h7.58c8.06.05 8.06 12.39-.03 12.38zM320.13 257.66v55.82h43.89v-13.49h-26.98v-42.33h-16.91zM412.25 313.31v-42.04h-17.6v-13.84h52.64v13.67h-17.6v42.21h-17.44zM484.27 257.38h-18.54l-21.08 56.16h17.55l2.68-9.19h19.53l3.25 9h17.69zm-15.71 34.8l6.23-19.81 6.21 19.81zM545.38 283.92c20.28 0 20.28-26.29 0-26.29h-33.61v55.95h33.61c24.03 0 24.03-29.66 0-29.66zm-16.49-15l8.35.05c8.91 0 8.91 10.71 0 10.71h-8.35zm9.61 32.44h-9.59v-10.79l9.59.05c10.22 0 10.22 10.71 0 10.71zM572.56 313.62v-55.73h17.26v41.8h27.24v13.93h-44.5zM624.85 313.32v-55.76h46.49v11.59h-28.9v9.4h27V290h-27v11h29.85v12.27h-4.36s-2-9.32-32.67.08z" />
                <circle cx="194.7" cy="284.39" r="32.41" fill="#f5ca23" />
                <circle cx="272.62" cy="296.87" r="32.41" fill="#ea3225" />
                <circle class="cls-5" cx="272.53" cy="297.04" r="15.76" />
                <ellipse class="cls-5" cx="194.45" cy="284.03" rx="15.22" ry="15.63" />
                <path class="cls-6" d="M268.85 290.27h7.79l-4.27 5.26s5.46.24 4.91 5.1a5 5 0 01-5.09 4.71s-4.49-.24-4.51-4M194.23 276.11l-.32 15.34" />
              </svg>
              <div class="w-1/4 md:w-auto md:flex text-right">
                <div>
                  <img :src="require('~/static/audilogot.png')" class="inline-block h-10 w-10 rounded-full object-contain object-center overflow-hidden bg-gray-100 border-2 border-gray-700 focus:border-green-600" alt="">
                </div>
                <!-- <div class="hidden md:block md:flex md:items-center ml-2">
                    <span class="text-gray-800 font-medium text-base mr-1">Dillon Twilley</span>
                    <div>
                      <svg class="fill-current text-gray-800 h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" /></svg>
                    </div>
                  </div> -->
                <AccountDropdown v-if="loggedIn" @logout="signOut" @printuser="printUser" />
              </div>
            </div>
          </div>
        </div>
        <AdminData :data="doc" v-if="isDoc" @changed="showChange" />
        <div class="flex justify-end w-4/5 ml-12">
          <button v-if="isDifferent" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full max-w-md rounded focus:outline-none focus:shadow-outline" type="submit">
            Save Changes
          </button>
        </div>
        <AFooter class="hidden" />
      </div>
      <div v-if="!loggedIn" class="flex flex-col h-screen w-screen items-center justify-center text-center">
        <h3 class="text-2xl font-semibold text-gray-800 w-full">
          Hey, you're not supposed to be here!
        </h3>
        <div class="w-1/3 mt-4">
          <button @click="openModal2 = true" class="px-3 py-2 text-white bg-blue-500 shadow font-semibold rounded text-sm inline-block">
            Log In
          </button>
          <nuxt-link to="/" class="px-3 py-2 text-gray-800 bg-white shadow font-semibold rounded text-sm inline-block ml-3">
            Return
          </nuxt-link>
        </div>
      </div>
      <Modal :open="openModal2" @close="openModal2 = false" class="modal">
        <form class="px-3 pb-8">
          <h2 class="mb-4 text-xl font-semibold text-gray-700 w-full text-center">
            Admin Login
          </h2>
          <span class="absolute bg-gray-500 rounded-full w-40 opacity-50 h-1 -mt-4 ml-5" />
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input
              id="email"
              v-model="email"
              class="shadow appearance-none border transition-colors rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="you@email.com"
            >
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
              id="password"
              v-model="pw"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="******************"
            >
          </div>
          <div class="flex items-center justify-between">
            <button @click.prevent="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </Modal>
    </div>
  </client-only>
</template>

<script>
import AccountDropdown from '~/components/AccountDropdown'
import AdminData from '~/components/AdminData'
import { auth, fireDb } from '~/plugins/firebase'
import Modal from '~/components/Modal'
import AFooter from '~/components/AFooter'
export default {
  name: 'Admin',
  layout: 'admin',
  components: {
    AccountDropdown,
    AdminData,
    Modal,
    AFooter
  },
  data () {
    return {
      doc: [],
      doc2: [],
      openModal2: false,
      email: '',
      pw: ''
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.user !== null
    },
    isDoc () {
      return this.doc !== []
    },
    isDifferent () {
      return this.doc2 === this.doc
    }
  },
  watch: {
    loggedIn () {
      if (this.loggedIn) {
        this.openModal2 = false
        this.email = ''
        this.pw = ''
      }
    }
  },
  async asyncData ({ app, params, error }) {
    const blogref = fireDb.collection('items')
    let data
    try {
      data = []
      await blogref.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data())
          data.push(doc.data())
        })
      })
    } catch (e) {
    // TODO: error handling
      console.log(e)
    }
    // if (data !== []) {
    //   for (let i = 0; i < data.length; i++) {
    //     for (let j = 0; j < data[i].data.length; j++) {
    //       data[i].data[j] = require(data[i].data[j])
    //     }
    //   }
    // }
    return {
      doc: data
    }
  },
  methods: {
    showChange (val) {
      console.log(val === this.doc)
      this.doc2 = val
    },
    signOut () {
      auth.signOut().then(function () {
        console.log('signing out...')
      }).catch(function (e) {
        console.log(e)
      })
      this.$emit('log-out')
    },
    printUser () {
      const user = auth.currentUser
      console.log(user)
      return (user)
    },
    showOpen () {
      this.openModal2 = true
      console.log('open modal!')
    },
    login () {
      const au = auth
      const vm = this
      if (process.browser) {
        au.signInWithEmailAndPassword(vm.email, vm.pw).catch(function (error) {
        // Handle Errors here.
          // const errorCode = error.code
          const errorMessage = error.message
          vm.error = true
          // alert(errorCode)
          alert(errorMessage)
          return true
        })
      }
    },
    register () {
      const au = auth
      const vm = this
      if (process.browser) {
        au.createUserWithEmailAndPassword(vm.email, vm.pw).catch(function (error) {
        // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          alert(errorCode)
          alert(errorMessage)
        })
      }
    }
  }
}
</script>
