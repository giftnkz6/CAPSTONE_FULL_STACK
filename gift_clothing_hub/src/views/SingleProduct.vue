<template>
    <div>
        <div class="card">
            <img :src="product.imgURL" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p>{{ product.color }}</p>
                <p class="card-text">R{{ product.price }}</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "SingleProduct",

    computed: {
        product: function () {
            this.$store.state.product
        },

        mounted() {
            this.$store.dispatch("getProduct", params.id)
        }

    }
}
</script>