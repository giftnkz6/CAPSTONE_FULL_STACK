import { createStore } from 'vuex'
import axios from 'axios';
const API = "https://gift-hub-clothing.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    loadSpinner: true
  },
  mutations: {
    setUsers(state, values){
      state.users = values
    },
    setProducts(state, values) {
      state.products = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProduct(state, value){
      state.product = value
    },
    setSpinner(state, value) {
      state.loadSpinner = value
    },
  },
  actions: {
    getUsers: async(context) => {
      const res = await axios.get(`${API}users`);
      const {results} = await res.data;
      if(results) {
        console.log(results)
        context.commit('setUsers', results);
      }
    },
    getProducts: async(context) => {
      const res = await axios.get(`${API}products`);
      const {results} = await res.data;
      if(results) {
        console.log(results)
        context.commit('setProducts', results);
      }
    },
    getUser: async(context) => {
      const res = await axios.get(`${API}user`);
      const {results} = await res.data;
      if(results) {
        console.log(results)
        context.commit('setUser', results);
      }
    },
    getProduct: async(context) => {
      const res = await axios.get(`${API}product`);
      const {results} = await res.data;
      if(results) {
        console.log(results)
        context.commit('setProduct', results);
      }
    },

      async login(context, payload) {
        const res = await axios.post(`${API}login`, payload);
        const {result, err} = await res.data;
        if(result) {
          context.commit('setUser', result);
        }else{
          context.commit('setMessage', err)
        }
      },
      
      async register(context, payload) {
        let res = await axios.post(`${API}register`, payload);
        let {msg, err} = await res.data;
        if(msg) {
          context.commit('setMessage', msg);
        }else{
          context.commit('setMessage', err);
        }
      },
      async editUser (context, payload) {
        const res = await axios.put(`${API}editUser`, payload)
        const { msg, err } = await res.data
        if (msg) {
          context.commit('setUser', msg)
        } else {
          context.commit('setMessage', err)
        }
      },
      async editProduct (context, payload) {
        const res = await axios.put(`${backendURL}editProduct`, payload)
        const { msg, err } = await res.data
        if (msg) {
          context.commit('setProduct', msg)
        } else {
          context.commit('setMessage', err)
        }
      },
      async deleteProduct (context, payload) {
      const res = await axios.delete(`${API}deleteProduct`, payload)
      const { msg, err } = await res.data
      if (msg) {
        context.commit('setProduct', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
  },
  modules: {
  }
})