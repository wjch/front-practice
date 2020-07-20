import routers from './routers.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'hash',
    routes: routers,
    base: '/',
    scrollBehavior: () => {
        return {x: 0, y: 0}
    }
})
