<template>
    <div class="container">
        <div v-if="products" v-for="product in products" :key="product.id">
            <div class="card">
                <img :src="product.imgURL" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ product.prodName }}</h5>
                    <p>{{ product.color }}</p>
                    <p class="card-text">R{{ product.price }}</p>
                    <a href="#" class="btn btn-primary">More Details</a>
                </div>
            </div>
        </div>
        <div v-else>
            <SpinnerVue/>
        </div>
    </div>
</template>

<script>
import SpinnerVue from '@/components/SpinnerVue.vue'
export default {
    name: "ShopView",
    components:{
        SpinnerVue
    },
    computed: {
        products: function () {
            return this.$store.state.products;
        }
    },

    mounted() {
        this.$store.dispatch("getProducts")
    }
}
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
.card{
    margin-bottom: 2rem;
    width: 15rem;
    height: 28rem;
}
</style>