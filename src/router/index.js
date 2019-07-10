import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Attention from '../pages/Attention'
import My from '../pages/My'
import Amway from '../pages/Amway'
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/attention"
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
        }
    ]
})