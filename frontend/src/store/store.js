/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import Axios from 'axios'

import Teachers from './Teachers'

Vue.use(Vuex)
Vue.use(VueAxios, Axios)

export default new Vuex.Store({
  modules: {
        Teachers
  }
})
