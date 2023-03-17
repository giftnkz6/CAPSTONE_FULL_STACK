<template>
    <p>{{ screen }}</p>
    <div v-if="products">
        <form action="">
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" v-model="search" placeholder="Search">
            </div>
        </form>
        <div class="buttons">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Category
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Sneaker</a></li>
                    <li><a class="dropdown-item" href="#">Cap</a></li>
                    <li><a class="dropdown-item" href="#">Jacket</a></li>
                </ul>
            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Sort by Price
                </button>
                <ul class="dropdown-menu">
                    <li><a @click="sort" class="dropdown-item" href="#">Lowest-Highest</a></li>
                    <li><a @click="sortAsc" class="dropdown-item" href="#">Highest-Lowest</a></li>

                </ul>
            </div>
            <div class="dropdown">

                <select v-model="screen" id="filter" class="form-select" aria-label="Default select example">
                    <option  selected>All</option>
                    <option @click="filtering" value="Black">Black</option>
                    <option value="Grey">Grey</option>
                    <option value="White">White</option>
                    <option value="Pink">Pink</option>
                    <option value="Blue">Blue</option>
                </select>
            </div>
            
            <!-- <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Filter by color
                </button>
                <ul class="dropdown-menu">
                    <li><a @click="filtering" class="dropdown-item" href="#">Black</a></li>
                    <li><a class="dropdown-item" href="#">Grey</a></li>
                    <li><a class="dropdown-item" href="#">White</a></li>
                    <li><a class="dropdown-item" href="#">Pink</a></li>
                    <li><a class="dropdown-item" href="#">Blue</a></li>
                </ul>
            </div> -->
        </div> 

        <div class="container">
            <div v-for="product in products" :key="product.id">
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
    data(){
        return{
            screen: ""
        }
    },
    computed: {
        products: function () {
            return this.$store.state.products;
        },

        sort: function () {
            let sortedProducts = this.products.sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                }
                else if (a.price > b.price) {
                    return 1;
                }
                else {
                    return 0;
                }
            })

        },

        sortAsc: function () {
            let sortedProducts = this.products.sort((a, b) => {
                if (a.price > b.price) {
                    return -1;
                }
                else if (a.price < b.price) {
                    return 1;
                }
                else {
                    return 0;
                }
            })

        },

        filtering: function () {
            let filterByColor = this.products.filter((product) => {
                if (screen === "Black") {
                    return (product.color == "Black")
                }
            }
            )
            // return filterByColor
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
    margin-top: 12rem;
}

.dropdown {
    margin-top: 3rem;
}

#filter{
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
    margin-left: 80rem;
}
</style>