import shop from '../../api/shop'

// initial state
const state = () => ({
    all: []
})

// getters
const getters = {}

// actions
const actions = {
    getAllProducts({ commit }) {
        shop.getProducts(products => {
            commit('setProducts', products)
        })
    },
    incrementInventory({commit},id){
        console.log('decrementInventory',id)
            commit('incrementProductInventory', {id:id});
    }
}

// mutations
const mutations = {
    setProducts(state, products) {
        state.all = products
    },

    decrementProductInventory (state, { id }) {
        console.log(id)
        let product = state.all.find(product => product.id === id)
        console.log(product)
        product.inventory--
        product.onCartNum++
    },
    incrementProductInventory (state, { id } ) {
        console.log(id)
        let product = state.all.find(product => product.id === id)
        console.log(product)
        product.inventory++
        product.onCartNum--
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}