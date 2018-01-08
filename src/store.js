import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isAuthenticated: false
}

const getters = {
  isAuthenticated: state => state.isAuthenticated
}

const mutations = {
  logIn: state => { state.isAuthenticated = true },
  logOut: state => { state.isAuthenticated = false }
}

const actions = {
  logIn ({ commit }) {
    commit('logIn')
  },
  logOut ({ commit }) {
    commit('logOut')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
