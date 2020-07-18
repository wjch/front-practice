import App from '../App.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import Shop from '../components/Shop.vue'

export default [
    {
        path: '/', // 重定向到home页面
        redirect: '/shop'
    },
    {
        path: '/app',
        component: Shop
    },
    {
        path: '/cart',
        name: 'cart',
        component: ShoppingCart
    },
    {
        path: '/shop',
        component: Shop
    },
    // {
    //     path: '*',
    //     redirect: '/shop'
    // },
]