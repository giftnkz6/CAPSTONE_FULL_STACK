<template>
    <div>

        <!-- <button id="add-btn" type="button" class="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#exampleModal">Add</button>

       
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="first Name">
                        </div>
                        <div class="mb-3">
                            <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Surname">
                        </div>
                        <div class="mb-3">
                            <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Cellphone">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div> -->

    </div>
    <div class="wrapper" v-if="users && products">
        <table id="users" class="table">
            <thead>
                <tr class="table">
                    <th scope="col">User ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Cellphone Number</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">User Role</th>
                    <th scope="col">User Profile</th>
                    <th scope="col">Join Date</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index" class="table">

                    <td>{{ user.userID }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.cellphoneNumber }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>{{ user.userRole }}</td>
                    <td><img :src="user.userProfile" alt=""></td>
                    <td>{{ user.joinDate }}</td>
                    <td><!-- Button trigger modal -->
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                class="fa-solid fa-pen"></i></button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <input class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                placeholder="first Name">
                                        </div>
                                        <div class="mb-3">
                                            <input class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                placeholder="Surname">
                                        </div>
                                        <div class="mb-3">
                                            <input class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                placeholder="Gender">
                                        </div>
                                        <div class="mb-3">
                                            <input class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                placeholder="Cellphone Number">
                                        </div>
                                        <div class="mb-3">
                                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                                placeholder="name@example.com">
                                        </div>
                                        <div class="mb-3">
                                            <input class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                placeholder="Password">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td><button class="btn"><i class="fa-solid fa-trash"></i></button></td>
                </tr>
            </tbody>
        </table>


        <!-- Button trigger modal -->
        <button id="add-btn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Add
        </button>

        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <input class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Product name">
                        </div>
                        <div class="mb-3">
                            <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description">
                        </div>
                        <div class="mb-3">
                            <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Category">
                        </div>
                        <div class="mb-3">
                            <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Price">
                        </div>
                        <div class="mb-3">
                            <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Quantity">
                        </div>
                        <div class="mb-3">
                            <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Image">
                        </div>
                        <div class="mb-3">
                            <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Color">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>

        <table id="products" class="table">
            <thead>
                <tr class="table-secondary">
                    <th scope="col">Product ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Color</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Image</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="index" class="table-secondary">

                    <td>{{ product.prodID }}</td>
                    <td>{{ product.prodName }}</td>
                    <td>{{ product.prodDescription }}</td>
                    <td>{{ product.color }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.prodQuantity }}</td>
                    <td><img :src="product.imgURL" alt=""></td>
                    <td><!-- Button trigger modal -->
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                class="fa-solid fa-pen"></i></button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td><button class="btn"><i class="fa-solid fa-trash"></i></button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        <SpinnerVue />
    </div>
</template>

<script>
import SpinnerVue from '@/components/SpinnerVue.vue';
export default {
    name: "AdminView",
    components: {
        SpinnerVue
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("getUsers")
        this.$store.dispatch("getProducts")
    },

}

</script>

<style scoped>
img {
    width: 4rem;
}

#users {
    margin-bottom: 6rem;
}

#products {
    margin-top: 1rem;
}

.wrapper {
    margin-top: 3rem;
    margin-bottom: 4rem;
}

#add-btn {
    margin-left: 80rem;
}
td{
    color: #1F8A70;
}
</style>