<template>
  <client-only>
    <div class="admin-wrapper">
      <div v-if="loggedIn" class="font-sans mybg flex flex-col min-h-screen w-full justify-between">
        <div class="bg-white border-b">
          <div class="container mx-auto px-4">
            <div class="flex items-center md:justify-between py-4">
              <div class="w-1/4 md:hidden">
                <svg class="fill-current text-white h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z" /></svg>
              </div>
              <div class="w-1/2 md:w-auto text-center text-gray-800 text-2xl font-semibold">
                <span class="hidden">spacer</span>
              </div>
              <nuxt-link to="/" class="appearance-none absolute mt-1 -ml-2">
                <img class="h-40 w-auto" src="~/static/pts.png" alt="pool table store logo.">
              </nuxt-link>
              <div class="w-1/4 md:w-auto md:flex text-right">
                <!-- <div>
                  <img :src="require('~/static/audilogot.png')" class="inline-block h-10 w-10 rounded-full object-contain object-center overflow-hidden bg-gray-100 border-2 border-gray-700 focus:border-green-600" alt="">
                </div> -->
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
        <AdminData :data="doc" v-if="isDoc" class="mb-auto" />
        <div class="flex items-center justify-center w-full h-16">
          <div class="text-gray-700 text-center md:mr-4 text-xs">
            &copy; 2020 <a href="kendallkj00@gmail.com" title="links to kendall's github" class="text-blue-600 underline hover:no-underline hover:text-blue-800 transition-colors">Kendall Jackson</a>
          </div>
          <div class="inline-block w-auto text-xs text-gray-700 leading-tight">
            <span class="font-semibold">Note:</span><span class="italic"> Edit and save each slide individually to provide instant updates and consistent performance.</span>
          </div>
        </div>
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
export default {
  name: 'Admin',
  layout: 'Admin',
  components: {
    AccountDropdown,
    AdminData,
    Modal
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
    return {
      doc: data
    }
  },
  methods: {
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

<style scoped>
.mybg {
  background-color: #f7fafc;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23d2d2d2' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
