<template>
    <div v-if="carts">
        <h1>Cart</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="product in carts" :key="product.id">
                    
                    <td><img :src="product.imgURL" alt=""></td>
                    <td>{{ product.prodDescription }}</td>
                    <td>{{ product.prodQuantity }}</td>
                    <td>R{{ product.price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        <h1>Your Cart is Empty!</h1>
        <img class="emoji" src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="">
        <h3>Browse through our Products</h3>
        <button class="btn btn-success"><router-link to="/shop">Shop</router-link></button>
    </div>
</template>

<script>
import SpinnerVue from '@/components/SpinnerVue.vue';
export default {
    name: "CartView",

    data(){
        return{
            
        }

    },
    components: {
        SpinnerVue
    },

    methods: {
        
     
  },


    computed: {
    
        carts: function () {
            return this.$store.state.carts
        },
        user: function () {
            return JSON.parse(localStorage.getItem("user"))
        }

    },
    created() {
        this.$store.dispatch("getCarts")
        // this.$store.dispatch("getProducts")
        // this.$store.dispatch("getUser")
    }
}

</script>

<style scoped>
    .emoji{
        width: 30rem;
        margin-bottom: 3rem;
    }

    a{
        text-decoration: none;
        color: white;
    }

    img{
        width: 5rem;
    }

    h1, h3{
       color: lightcoral;
       margin-bottom: 3rem;
    }

    @media screen and (max-width: 500px) {
        .emoji{
            width: 20rem;
        }
        
    }

    @media screen and (max-width: 500px) {
        .emoji{
            width: 17rem;
        }
        
    }
</style>