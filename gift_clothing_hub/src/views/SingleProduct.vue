<template>
    <!-- <div>
        <div v-if="product">
            <div class="card">
                <img :src="product?.imgURL" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ product?.prodName }}</h5>
                    <p>{{ product?.color }}</p>
                    <p class="card-text">R{{ product?.price }}</p>
                </div>
            </div>
        </div>
        <div v-else><SpinnerVue/></div>
    </div> -->
    <div class="container">
        <img :src="product.imgURL" alt="">
        <div class="wrap">
            <h2>{{ product.prodName }}</h2>
            <p>R{{ product.price  }}</p>
            <p>{{ product.prodDescription }}</p>
            <p>{{ product.color }}</p>
            <button type="button" class="btn btn-primary">Add to cart</button>
        </div>
    </div>
</template>

<script>
import SpinnerVue from '@/components/SpinnerVue.vue';
export default {
    name: "SingleProduct",
    components :{
        SpinnerVue
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
    img{
        width: 21rem;
    }
    .container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 8rem;
    }
</style>