import shop from '../../api/shop'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
    items: [],
    checkoutStatus: null
})

// getters
const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({ id, quantity }) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                // id: product.id,
                // title: product.title,
                // price: product.price,
                // goodImg: product.goodImg,
                ...product
            }
        })
    },

    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.onCartNum
        }, 0)
    }
}

// actions
const actions = {
    // 结账
    checkout ({ commit, state }, products) {
        const savedCartItems = [...state.items]
        commit('setCheckoutStatus', null)
        // 清空购物车
        commit('setCartItems', { items: [] })
        // commit('setClearOnCart',products)
        shop.buyProducts(
            products,
            () => {
                commit('setCheckoutStatus', '1')
            },
            () => {
                commit('setCheckoutStatus', '0')
                commit('setCartItems', { items: savedCartItems })
            }
        )
    },
    // 添加商品
    addProductToCart ({ state, commit }, product) {
        console.log('addProductToCart')
        commit('setCheckoutStatus', null)
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id)
            if (!cartItem) {
                commit('pushProductToCart', { id: product.id })
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            // remove 1 item from stock
            commit('products/decrementProductInventory', { id: product.id }, { root: true })
        }
    }
}

// mutations
const mutations = {
    //
    pushProductToCart (state, { id }) {
        state.items.push({
            id,
            onCartNum: 1
        })
    },

    incrementItemQuantity (state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.onCartNum++
    },
    setClearOnCart(state,products){
        console.log('setClearOnCart')
        console.log(products)
        products.forEach(
            item=>{
                item.onCartNum=0;
                item.inventory=200;
            }
        )
    },
    setCartItems (state, { items }) {
        state.items = items
    },

    setCheckoutStatus (state, status) {
        state.checkoutStatus = status
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}