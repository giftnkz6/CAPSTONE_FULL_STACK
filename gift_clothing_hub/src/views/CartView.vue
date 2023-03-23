<template>
    <div v-if="product">
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
                <tr  v-for="product in cart" :key="product.id">
                    <th scope="row"></th>
                    <td>{{ product.imgURL  }}</td>
                    <td>{{ product.prodDescription }}</td>
                    <td>{{ product.prodQuantity }}</td>
                    <td>{{ product.price}}</td>
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
        product: function () {
            return this.$store.state.product
        },
        products: function () {
            return this.$store.state.products
        },
    },
    created() {
        this.$store.dispatch("getProduct", this.$route.params.id)
        this.$store.dispatch("getProducts")
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

    h1, h3{
       color: lightcoral;
       margin-bottom: 3rem;
    }
</style>