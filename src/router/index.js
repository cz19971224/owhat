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
import Discuss from '../components/Discuss'
import Source from '../components/Source'
import Starshop from '../components/Starshop'
import Shoplist from '../components/Shoplist'
import buy from '../pages/buy'
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
            path:'/card/:id',
            component:Card
        },
        {
            path:'/exit',
            component:Exit
        },
        {
            path:'/discuss/:title',
            component:Discuss
        },
        {
            path:'/source',
            component:Source
        },
        {
            path:'/Starshop/:id',
            component:Starshop
        },
        {
            path:'/buy',
            component:buy
        },
    ]
})