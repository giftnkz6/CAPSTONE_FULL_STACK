<template>
    <div v-if="carts">
        <h1>Cart</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <!-- <th scope="col">Quantity</th> -->
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in carts" :key="product.id">

                    <td><img :src="product.imgURL" alt=""></td>
                    <td>{{ product.prodName }}</td>
                    <!-- <td>{{ product.prodQuantity }}</td> -->
                    <td>R{{ product.price }}</td>
                    <td><i @click="deleteCartItem" class="fa-solid fa-trash fa-beat"></i></td>
                </tr>
            </tbody>
        </table>
        <div class="wrapper">
            <h2>Summary</h2>
            <div class="summary">
                <div>
                    <p>SubTotal</p>
                    <p>R {{ subTotal.toFixed(2) }}</p>
                </div>
                <div>
                    <p>Delivery</p>
                    <p>R {{ delivery.toFixed(2) }}</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>{{ totalAmount.toFixed(2)}}</p>
                </div>
            </div>
        </div>
        <div>
            <button class="btn btn-success"><router-link to="/checkout">Checkout</router-link></button>
        </div>
    </div>
    <div v-else>
        <h1>Your Cart is Empty!</h1>
        <img class="emoji" src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif"
            alt="">
        <h3>Browse through our Products</h3>
        <button class="btn btn-success"><router-link to="/shop">Shop</router-link></button>
    </div>
</template>

<script>
import SpinnerVue from '@/components/SpinnerVue.vue';
export default {
    name: "CartView",

    data() {
        return {
            userID: '',
            firstName: '',
            lastName: '',
            gender: '',
            cellphoneNumber: '',
            emailAdd: '',
            userPass: '',
            userRole: '',
            userProfile: '',
            joinDate: ''

        }

    },
    components: {
        SpinnerVue
    },

    methods: {
        deleteCartItem: function (user) {
            return this.$store.dispatch("deleteCartItem", {
                userID: user.userID,
            })

        },


    },


    computed: {

        carts: function () {
            return this.$store.state.carts
        },
        user: function () {
            return JSON.parse(localStorage.getItem("user"))
        },
        delivery(){
            return 100
        },
        subTotal() {
            let itemPrice = 0;
            this.carts.forEach((product) => {
                itemPrice += parseFloat(product.price);
            });
            return itemPrice;
        },

        totalAmount(){
            return this.subTotal + this.delivery
        }

    },
    created() {
        this.$store.dispatch("getCarts")
        this.$store.dispatch("getProducts")
        // this.$store.dispatch("getUser")
    }
}

</script>

<style scoped>
.summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.btn-success{
    margin-bottom: 2rem;
}
.wrapper {
    width: 30rem;
    margin: auto;
    background-color: white;
    margin-bottom: 3rem;
    margin-top: 3rem;
}

.emoji {
    width: 30rem;
    margin-bottom: 3rem;
}

a {
    text-decoration: none;
    color: white;
}

img {
    width: 5rem;
}

h1,
h3 {
    color: lightcoral;
    margin-bottom: 3rem;
}

@media screen and (max-width: 505px) {
    .emoji {
        width: 17rem;
    }

    .wrapper {
    width: 20rem;
    margin: auto;
    background-color: white;
    margin-bottom: 3rem;
    margin-top: 3rem;
}

}

@media screen and (max-width: 340px) {

    .wrapper {
    width: 17rem;
    margin: auto;
    background-color: white;
    margin-bottom: 3rem;
    margin-top: 3rem;
}

}
</style>