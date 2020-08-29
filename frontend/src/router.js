import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Admin_section/Home.vue'
import AddTeacher from './components/Admin_section/AddTeacher'
import AddCourse from './components/Admin_section/AddCourse'
import AddClass from './components/Admin_section/AddClass'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'landing',
            component: Home
        },
        {
            path : '/addteacher',
            name:'addtacher',
            component: AddTeacher
        },
        {
            path:'/addcourse',
            name:'addcourse',
            component:AddCourse
        },
        {
            path:'/addclass',
            name:'addclass',
            component:AddClass
        }
    ]
})