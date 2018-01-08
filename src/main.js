// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'

import axios from 'axios'
import Quasar, * as All from 'quasar'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'

Vue.router = router
Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(Quasar, {
  components: All,
  directives: All
})

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'https://api-demo.websanova.com/api/v1'

Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
})

if (__THEME === 'mat') {
  // require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

/* eslint-disable no-new */
new Vue({
  el: '#q-app',
  router,
  store,
  render: h => h(require('./App').default)
})
