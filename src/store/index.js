import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeName: '',
    name: '',
    price: 0,
    size: '',
    selectedColor: '',
    quantity: 1,
    productDetail: [],
    description: '',
    photoURL: '',
    productColor: []
  },
  mutations: {
    increment (state) {
      state.quantity++
    },
    decrement (state) {
      if (state.quantity > 1) {
        state.quantity--
      }
    },
    changeSize (state, size) {
      state.size = size
    },
    changeProductDetail (state, payload) {
      state.productDetail = payload
    },
    updateProductProfile (state, payload) {
      state.name = payload.name
      state.description = payload.description
      state.photoURL = payload.photoURL
    },
    changeColor (state, payload) {
      state.selectedColor = payload
    },
    changeProductColor (state, payload) {
      state.productColor = payload
    },
    updateStoreName (state, payload) {
      state.storeName = payload
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    decrement ({ commit }) {
      commit('decrement')
    },
    selectSize ({ commit }, value) {
      commit('changeSize', value)
    },
    async getProduct ({ commit, dispatch }) {
      try {
        const resp = await axios.get('http://0cbc9bcf-b85b-4be3-bfee-9a937f1b254a.mock.pstmn.io/products/detail?fbclid=IwAR1BiH8pE5UkzMoxuzcHpHKXN0KyIWIna_qpOSQ9K9UxLa8_D--OhvDuozM')
        const product = resp.data.data
        let productColor = product.skus.map(element => element.variant_option._color)
        productColor = [...new Set(productColor)]
        commit('updateStoreName', product.store.name)
        commit('changeProductDetail', product.skus)
        commit('updateProductProfile', {
          name: product.name,
          description: product.description,
          photoURL: product.photos[0].src
        })
        commit('changeProductColor', productColor)
        dispatch('selectColor', productColor[0])
      } catch (err) {
        console.log(err)
      }
    },
    selectColor ({ commit, getters, dispatch }, value) {
      commit('changeColor', value)
      dispatch('selectSize', getters.getSizeList[0])
    }
  },
  getters: {
    getSizeList (state) {
      return state.productDetail.filter(element => element.variant_option._color === state.selectedColor).map(element => element.variant_option._size)
    },
    showPrice (state) {
      return state.productDetail.filter(element => element.variant_option._color === state.selectedColor && element.variant_option._size === state.size).map(element => element.price)[0] * state.quantity
    }
  }
})
