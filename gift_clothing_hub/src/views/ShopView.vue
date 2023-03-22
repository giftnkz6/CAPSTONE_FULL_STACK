<template>
    <h3>{{ screen }}</h3>
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
                <button @click="sorted" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Sort by Price
                </button>
            </div>
            <!-- <div class="dropdown">
                <select v-model="screen" id="filter" class="form-select" aria-label="Default select example">
                    <option  selected>All</option>
                    <option value="Black">Black</option>
                    <option value="Grey">Grey</option>
                    <option value="White">White</option>
                    <option value="Pink">Pink</option>
                    <option value="Blue">Blue</option>
                </select>
            </div> -->
            
            <div class="dropdown">
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
            </div>
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
            search: ""
        }
    },

    methods: {
        sorted: function() {
                this.$store.commit("sortByPrice")
            },
    },
    computed: {
        products: function () {
            return this.$store.state.products;
        },

        filtering: function () {
            let filterByColor = this.products.filter((product) => {
                if (this.screenscreen === "Black") {
                    return (this.color == product.color)
                }
            }
            )
            // return filterByColor
        },
        searchFilter: function() {
            if(this.search.length >0){
                return this.products.filter((product) => product.prodName.toLowerCase.includes(this.search))
            }
            return this.products
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

.dropdown {
    margin-top: 3rem;
    margin-left: 1rem;
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
    margin-left: 65rem;
}

.form-select{
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

    
}
</style>