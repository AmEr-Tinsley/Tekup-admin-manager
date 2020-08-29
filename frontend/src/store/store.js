/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import Axios from 'axios'

import wa from './wa'

Vue.use(Vuex)
Vue.use(VueAxios, Axios)

export default new Vuex.Store({
  modules: {
        wa
  }
})
