import Vue from 'vue'
import Vuex from 'vuex'
// import VueRouter from 'vue-router'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import 'bulma/css/bulma.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'
import bulma from 'bulma'
import 'bulma/css/bulma.css'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false
Vue.use(Vuex)

Vue.use(bulma)
Vue.use(Antd);
Vue.use(VueAwesomeSwiper)
import store from './store'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
