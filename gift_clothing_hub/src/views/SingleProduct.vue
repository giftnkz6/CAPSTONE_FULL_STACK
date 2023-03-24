<template>
    <div class="container" v-if="product">
        <img :src="product.imgURL" alt="">
        <div class="wrap">
            <h2>{{ product.prodName }}</h2>
            <p>R{{ product.price  }}</p>
            <p>{{ product.prodDescription }}</p>
            <p>{{ product.category }}</p>
            <p>{{ product.color }}</p>
            <button @click="addToCart(user, product)" type="button" class="btn btn-secondary">Add to cart</button>
        </div>
    </div>
    <div v-else>
        <SpinnerVue/>
    </div>
</template>

<script>
import SpinnerVue from '@/components/SpinnerVue.vue';
export default {
    name: "SingleProduct",
    components :{
        SpinnerVue
    },
    data(){
        return{
            userID: '',
            prodID: ""
        }
    },

    methods:{
        addToCart: function (user, product) {
            return this.$store.dispatch("addToCart", {
                userID: user?.userID,
                prodID: product?.prodID

            })
        },
    },

    computed: {
        product: function () {
            return this.$store.state.product
        },
        user: function () {
            return JSON.parse(localStorage.getItem("user"))
        }
    },
    created() {
        this.$store.dispatch("getProduct", this.$route.params.id)
        this.$store.dispatch("getUser", this.$route.params.id)
    }
}
</script>

<style scoped>
    img{
        width: 30rem;
        margin-top: 3rem;
    }
    .container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 8rem;
    }

    .wrap{
        margin-top: 8rem;
    }

    @media screen and (max-width: 992px) {
        img{
            width: 24rem;
            margin: auto;
        }
        .container{
        display: grid;
        column-gap: 1rem;
        margin-bottom: 8rem;
    }
        
    }
    

    @media screen and (max-width: 770px) {
        img{
            width: 20rem;
        }
        .container{
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 8rem;
    }
        
    }

    @media screen and (max-width: 770px) {
        img{
            width: 17rem;
        }
        .container{
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 8rem;
    }
        
    }
</style>