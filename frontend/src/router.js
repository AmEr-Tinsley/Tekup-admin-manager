import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Wa from './components/Wa.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: 'http://localhost:8080',
    routes:[
        {
            path: '/',
            name: 'landing',
            component: Home
        },
        {
            path : '/wa',
            name : 'wa',
            component : Wa
        }
    ]
})