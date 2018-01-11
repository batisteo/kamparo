import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isAuthenticated: false,
  loginOpen: false
}

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  loginOpen: state => state.loginOpen
}

const mutations = {
  logIn: state => { state.isAuthenticated = true },
  logOut: state => { state.isAuthenticated = false },
  openLogin: state => { state.loginOpen = true }
}

const actions = {
  logIn ({ commit }) { commit('logIn') },
  logOut ({ commit }) { commit('logOut') }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
