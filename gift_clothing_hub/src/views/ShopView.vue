<template>
    <h1>Hello</h1>
    <div v-for="product in products" :key="product.id">
        <div class="card" style="width: 18rem;">
            <img :src="product.imgURL" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{product.prodName}}</h5>
                <p class="card-text">{{ product.prodDescription }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShopView",
    computed: {
        products: function () {
            return this.$store.state.products
        }
    },

    computed() {
        this.$store.dispatch("getProducts")
    }
}
</script>