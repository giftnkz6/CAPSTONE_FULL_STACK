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
                <tr>
                    <th scope="row"></th>
                    <td>{{  }}</td>
                    <td>{{  }}</td>
                    <td>{{  }}</td>
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
    components: {
        SpinnerVue
    },

    methods: {
     add() {
      this.$store.dispatch("addToCart", {
        id: this.id,
      });
    },
  },


    computed: {
        product: function () {
            return this.$store.state.product
        },
    },
    created() {
        this.$store.dispatch("getProduct", this.$route.params.id)
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
       color: rgb(96, 27, 123);
       margin-bottom: 3rem;
    }
</style>