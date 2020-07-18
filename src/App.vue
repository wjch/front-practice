<template>
    <div id="app" style="background: azure">
<!--        <Shop/>-->
      <router-view></router-view>
    </div>
</template>

<script>
    // import Shop from './components/Shop.vue'
    // import Table from './components/Table.vue'
    // import ShoppingCart from './components/ShoppingCart.vue'
    export default {
        name: 'App',
        components: {
          // Shop
            // Table,
            // ShoppingCart
        },
        methods: {
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/

        color: #2c3e50;
    }
</style>
