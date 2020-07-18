<template>

    <div>
        <p><a @click="checkCart">查看购物车</a></p>
<!--     -->
        <div class="hello" style="background: #E7E6FA">

            <div class="columns1" v-for="item in products" :key='item.id' @click="addToCart(item)">
                <div>
                    <div class="top">
                        <img v-bind:src="item.goodImg" style="width: 100%;
    height: 100%;">
                    </div>
                    <div class="bottom">
                        <h4 v-text="item.title"></h4>
                    </div>
                    <div style="text-align: center">
                        <button @click.stop="reduceItem(item)">-</button>{{item.onCartNum}}<button style="background: gold"  @click.stop="addToCart(item)">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions, mapGetters,mapMutations} from 'vuex'

    export default {
        name: 'Shop',

        data() {
            return {
            }
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'fetchData'
        },
        created() {
            this.fetchData();
        },

        methods: {
            fetchData(){
                console.log('fetchData')
                this.$store.dispatch('products/getAllProducts')
            },
            ...mapActions('cart', [
                    'addProductToCart',
                ]
            ),
            ...mapActions('products', [
                    'incrementInventory',
                ]
            ),
            ...mapMutations('products', [
                    'decrementProductInventory',
                ]
            ),
            reduceItem(item){
                console.log("reduceItem")
                console.log(item)

                if(item.onCartNum>1){
                    // this.$store.commit('products/decrementProductInventory',item.id);
                    console.log(item.id)
                    this.incrementInventory(item.id)
                }else {
                    this.$swal('不能再少了');
                }
            },
            addToCart(item) {
                console.log(this.cartProducts)
                if(item.onCartNum<item.inventory){
                    this.addProductToCart(item)
                }else {
                    this.$swal('超出商品数量');
                }
            },
            checkCart() {
                this.$router.push({path: '/cart'})
            }
        },
        computed: {
            ...mapState({
                products: state => state.products.all,
            }),
            ...mapGetters('cart', {
                cartProducts: 'cartProducts',
                total: 'cartTotalPrice'
            })
        },
        mounted() {

        }
    }
</script>
<!--<style lang="sass" src="bulma"></style>-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .hello {
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        /*text-align: center;*/
        padding:20px 7%;
    }

    .columns1 {
        display: inline-block;
        margin-bottom: 40px;
        margin-right: 10px;
    }

    .top {
        width: 240px;
        height: 200px;
        text-align: center;
        padding: 43px 39px 0px 29px;
        background: url(../assets/top.png) no-repeat left top;
    }

    .bottom {
        width: 240px;
        min-height: 110px;
        text-align: center;
        padding: 20px 32px 35px 25px;
        background: url(../assets/bottom.png) no-repeat left top;
    }
</style>
