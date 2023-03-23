<template>
    <div v-if="products">
        <form action="">
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" v-model="search"
                    placeholder="Search by name">
            </div>
        </form>
        <div class="buttons">
            <select v-model="screen" class="dropdown">
            <option value="">All Category</option>
            <option v-for="category in categories" :key="category">{{ category }}</option>  
            </select>
            <div class="dropdown">
                <button @click="sorted" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Sort by Price
                </button>
            </div>

<select v-model="screenColor" class="dropdown">
                <option value="">All Color</option>
                <option v-for="color in colors" :key="color">{{ color }}</option>
            </select>            
        </div>

        <div class="container">
            <div v-for="product in searchFilter" :key="product.id">
                <div class="card">
                    <img :src="product.imgURL" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.prodName }}</h5>
                        <p>{{ product.color }}</p>
                        <p class="card-text">R{{ product.price }}</p>
                        <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                            <a href="#" class="btn btn-primary">More Details</a>
                        </router-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div v-else>
        <SpinnerVue />
    </div>
</template>

<script>
import SpinnerVue from '@/components/SpinnerVue.vue'
export default {
    name: "ShopView",
    components: {
        SpinnerVue
    },
    data() {
        return {
            search: "",
            screen: "",
            screenColor: ""
        }
    },

    methods: {
        sorted: function () {
            this.$store.commit("sortByPrice")
        },
    },
    computed: {
        products: function () {
            return this.$store.state.products;
        },
        colors() {
            const colors = new Set();
            for (const product of this.products) {
                colors.add(product.color);
            }
            return Array.from(colors);
        },
        categories() {
            const categories = new Set();
            for (const product of this.products) {
                categories.add(product.category);
            }
            return Array.from(categories);
        },

        searchFilter() {

            let filtering = this.products
            if (this.screen) {
                filtering = filtering.filter(product => product.category === this.screen)
            }

            
            if (this.screenColor) {
                filtering = filtering.filter(product => product.color === this.screenColor)
            }


            if (this.search.trim().length > 0) {
                filtering = filtering.filter((product) => product.prodName.toLowerCase().includes(this.search))
            }
            return filtering
        },
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
    column-gap: 1rem;
    margin-top: 12rem;
}

select{
    background-color: skyblue;
    border-radius: 2px;
}

img{
    height: 16rem;
    /* object-fit: cover; */
}

.dropdown {
    margin-top: 3rem;
    margin-left: 1rem;
}

#filter {
    height: 2rem;
}

.card {
    margin-bottom: 2rem;
    width: 15rem;
    height: 28rem;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(3, .2fr);
    margin-left: 45rem;
}

.card:hover {
    background-color: aliceblue;
}

.form-control {
    width: 10rem;
    margin-left: 65rem;
}

.form-select {
    width: 5rem;
}

@media screen and (max-width: 1212px) {
    .form-control {
        width: 10rem;
        margin-left: 40rem;
    }
}

@media screen and (max-width: 1161px) {
    .buttons {
        display: grid;
        grid-template-columns: repeat(3, .2fr);
        margin-left: 40rem;
    }

}

@media screen and (max-width: 1108px) {
    .buttons {
        display: grid;
        grid-template-columns: repeat(3, .2fr);
        margin-left: 25rem;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1rem;
        margin-top: 12rem;
    }

}

@media screen and (max-width: 855px) {
    .buttons {
        display: grid;
        grid-template-columns: repeat(3, .2fr);
        margin-left: 8rem;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
        margin-top: 12rem;
    }

    .form-control {
        width: 10rem;
        margin-left: 20rem;
    }


}

@media screen and (max-width: 655px) {
    .buttons {
        display: grid;
        grid-template-columns: repeat(3, .2fr);
        margin-left: 2rem;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
        margin-top: 12rem;
    }

    .form-control {
        width: 10rem;
        margin-left: 10rem;
    }


}

@media screen and (max-width: 530px) {
    .buttons {
        display: grid;
        grid-template-columns: repeat(1, .2fr);
        margin-left: 0rem;
        width: 3rem;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 1rem;
        margin-top: 12rem;
    }

    .form-control {
        width: 10rem;
        margin-left: 0rem;
    }

    img{
        height: 12rem;
    }


}</style>