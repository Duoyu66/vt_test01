import {createRouter, createWebHistory} from "vue-router";

let routes=[
    {
        path:'/',
        name:'hello',
        component:()=>import('../components/HelloWorld.vue')
    },
    {

        path:'/home',
        name:'home',
        component:()=>import('../pages/home/index.vue')
    },
    {
        path:'/game',
        name:'game',
        component:()=>import('../pages/game/index.vue')
    },

    {
    path:'/king',
        name:'king',
        component:()=>import('../pages/king/index.vue')
    },
    {
        path:'/chat',
        name:'chat',
        component:()=>import('../pages/chat/index.vue')
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../pages/login/index.vue')
    }


]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;