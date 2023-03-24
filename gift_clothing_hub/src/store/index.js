import { createStore } from 'vuex'
import axios from 'axios';
const API = "https://gift-hub-clothing.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    message:null,
    asc: true,
    cart: null,
    carts: null
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
    setMessage(state,value){
      state.message = value
    },
    setCart(state, value) {
      state.cart = value
    },
    setCarts(state, values) {
      state.carts = values
    },
  sortByPrice:(state)=>{
    state.products.sort((a,b) => {
      return a.price - b.price;
    })
    if(!state.asc){
      state.products.reverse()
    }
    state.asc=!state.asc
  }

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
    getProduct: async(context,id) => {
      const res = await axios.get(`${API}product/${id}`);
      const {results} = await res.data;
      if(results) {
        console.log(results[0])
        context.commit('setProduct', results[0]);
      }
    },

      async login(context, payload) {
        const res = await axios.post(`${API}login`, payload);
        const {result, err} = await res.data;
        if(result) {
          context.commit('setUser', result);
          console.log("Login - store: ", result);
          localStorage.setItem("user", JSON.stringify(result))
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
      async newUser(context, payload) {
        let res = await axios.post(`${API}user`, payload);
        console.log(res)
        let {message, err} = await res.data;
        if(message) {
          context.commit('setUser', message);
        }else{
          context.commit('setMessage', err);
        }
      },
      async newProduct(context, payload) {
        let res = await axios.post(`${API}product`, payload);
        let {msg, err} = await res.data;
        if(msg) {
          context.commit('setProduct', msg);
        }else{
          context.commit('setMessage', err);
        }
      },
      async editUser (context, payload) {
        console.log(payload)
        const res = await axios.put(`${API}user/${payload.userID}`, payload)
        console.log(res)
        const { message, err } = await res.data
        if (message) {
          context.commit('setUser', message)
        } else {
          context.commit('setMessage', err)
        }
      },
      async editProduct (context, payload) {
        console.log(payload)
        const res = await axios.put(`${API}product/${payload.prodID}`, payload)
        console.log(res)
        const { message, err } = await res.data
        if (message) {
          context.commit('setProduct', message)
        } else {
          context.commit('setMessage', err)
        }
      },
      async deleteUser (context, payload) {
        const res = await axios.delete(`${API}user/${payload.userID}`, payload)
        const { message, err } = await res.data
        if (message) {
          context.commit('setUser', message)
        } else {
          context.commit('setMessage', err)
        }
      },
      async deleteProduct (context, payload) {
      const res = await axios.delete(`${API}product/${payload.prodID}`, payload)
      const { msg, err } = await res.data
      if (msg) {
        context.commit('setProduct', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
    getCart: async(context, payload) => {
      const res = await axios.get(`${API}user/${payload?.userID}/carts`);
      const {results} = await res.data;
      console.log("Results from cart : ", results)
      if(results) {
        console.log(results)
        context.commit('setCart', results);
      }
    },
    getCarts: async(context) => {
      let currentUser = JSON.parse(localStorage.getItem('user'));
      const res = await axios.get(`${API}user/${currentUser?.userID}/carts`);
      const {results} = await res.data;
      if(results) {
        console.log("cart - results: ", results)
        context.commit('setCarts', results);
      }
    },
    async addToCart(context, payload) {
      let res = await axios.post(`${API}user/${payload.userID}/cart`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.commit('setCart', msg);
      }else{
        context.commit('setMessage', err);
      }
    },

    async editCart (context, payload) {
      console.log(payload)
      const res = await axios.put(`${API}user/${payload.prodID}/cart/${id}`, payload)
      console.log(res)
      const { message, err } = await res.data
      if (message) {
        context.commit('setCart', message)
      } else {
        context.commit('setMessage', err)
      }
    },

    async deleteCartItem(context, payload) {
      const res =  await axios .delete(`${API}/user/${payload.prodID}/cart`)
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