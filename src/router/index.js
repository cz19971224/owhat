import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Attention from '../pages/Attention'
import My from '../pages/My'
import Amway from '../pages/Amway'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Card from '../components/Card'
import Exit from '../pages/Exit'
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/shop",
            component:Shop
        },
        {
            path:"/attention",
            component:Attention
        },
        {
            path:"/my",
            component:My
        },
        {
            path:"/amway",
            component:Amway
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/card',
            component:Card
        },
        {
            path:'/exit',
            component:Exit
        }
    ]
})