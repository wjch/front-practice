<template>
    <div class="cart" style="background: #E7E6FA">
        <a-modal v-model="visible" title="结账成功" on-ok="handleOk">
            <template slot="footer">
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                    回到首页
                </a-button>
            </template>
            <p>结账成功</p>
        </a-modal>
        <h1 style="text-align: center;font-size: 30px;">购物车</h1>
        <a-divider/>
        <p v-show="!products.length" style="text-align: center"><i>暂无商品.</i></p>
        <ul>

            <li v-for="product in products"
                :key="product.id">

                <div style="margin-left: 100px;" v-if="product.onCartNum>0">
                    <span><img v-bind:src="product.goodImg" width="100px" height="100px"></span>
                    <span class="content">{{ product.title }}</span>
                    <span class="content">价格为¥{{product.price}}元</span>
                    <span class="content">{{product.onCartNum}}</span>
                    <span class="content">
                        <button @click.stop="reduceItem(product)">-</button>{{product.onCartNum}}<button
                            style="background: gold" @click.stop="addToCart(product)">+</button>
                    </span>
                </div>
                <a-divider/>
            </li>
        </ul>
        <!--        <a-table-->
        <!--                :columns="products"-->
        <!--                :row-key="record => record.login.uuid"-->
        <!--                :data-source="data"-->
        <!--                :pagination="pagination"-->
        <!--                :loading="loading"-->
        <!--                @change="handleTableChange"-->
        <!--        >-->
        <!--            &lt;!&ndash;            <template slot="name" slot-scope="name"> {{ name.first }} {{ name.last }} </template>&ndash;&gt;-->
        <!--        </a-table>-->
        <div style="text-align: right;margin-right: 50px;">
            <p>合计: {{ total}}元</p>
            <p>
                <a-button type="primary" :disabled="!products.length" @click="checkout(products)">结账</a-button>
            </p>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex'

    export default {
        data() {
            return {
                loading: false,
            }
        },
        computed: {
            ...mapState({
                checkoutStatus: state=>state.cart.checkoutStatus
            }),
            ...mapGetters('cart', {
                products: 'cartProducts',
                total: 'cartTotalPrice'
            }),
            visible:function () {
                return this.checkoutStatus==='1'
            }
        },
        methods: {
            handleOk(e){
                this.$router.push('/');
            },
            checkout(products) {
                this.$store.dispatch('cart/checkout', products)
            },
            ...mapActions('cart', [
                    'addProductToCart',
                ]
            ),
            ...mapActions('products', [
                    'incrementInventory',
                ]
            ),
            reduceItem(item) {
                console.log("reduceItem")
                console.log(item)

                if (item.onCartNum > 0) {
                    // this.$store.commit('products/decrementProductInventory',item.id);
                    console.log(item.id)
                    this.incrementInventory(item.id)
                } else {
                    this.$swal('不能再少了');
                }
            },
            addToCart(item) {
                console.log(item)
                if (item.onCartNum < item.inventory) {
                    this.addProductToCart(item)
                } else {
                    this.$swal('超出商品数量');
                }
            },
        }
    }
</script>

<style scoped>
    .content {
        display: inline-block;
        width: 200px;
        text-align: center;
    }

    .ant-divider {
        background: none;
        border-color: #000;
        border-style: dashed;
        border-width: 1px 0 0;
    }
</style>