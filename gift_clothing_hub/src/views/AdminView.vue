<template>
    <div class="wrapper" v-if="users && products">
        <button type="button" id="add-user" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add new
            user</button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- <div class="mb-3">
                                <input v-model="user.userID" class="form-control" id="exampleFormControlTextarea1"
                                rows="3" placeholder="first Name">
                            </div> -->
                        <div class="mb-3">
                            <input v-model="firstName" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="first Name">
                        </div>
                        <div class="mb-3">
                            <input v-model="lastName" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Surname">
                        </div>
                        <div class="mb-3">
                            <input v-model="gender" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Gender">
                        </div>
                        <div class="mb-3">
                            <input v-model="cellphoneNumber" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Cellphone Number">
                        </div>
                        <div class="mb-3">
                            <input v-model="emailAdd" type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                            <input v-model="userPass" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Password">
                        </div>
                        <div class="mb-3">
                            <input v-model="userRole" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="User Role">
                        </div>
                        <div class="mb-3">
                            <input v-model="userProfile" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="User Profile">
                        </div>
                        <div class="mb-3">
                            <input v-model="joinDate" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Join Date">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" @click="newUser" class="btn btn-primary">Save
                            changes</button>
                    </div>
                </div>
            </div>
        </div>
        <table class="table-user">
            <thead>
                <tr>
                    <!-- <th scope="col">User ID</th> -->
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">CellphoneNo</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Profile</th>
                    <!-- <th scope="col">Join Date</th> -->
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index" class="table">

                    <!-- <td>{{ user.userID }}</td> -->
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.cellphoneNumber }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>{{ user.userRole }}</td>
                    <td><img :src="user.userProfile" alt=""></td>
                    <!-- <td>{{ user.joinDate }}</td> -->
                    <td><!-- Button trigger modal -->
                        <button type="button" class="btn" data-bs-toggle="modal"
                        :data-bs-target="'#exampleModal' + `${user.userID}`"><i class="fa-solid fa-pen"></i></button>
                        <button @click="deleteUser(user)" class="btn"><i class="fa-solid fa-trash"></i></button>

                        <!-- Modal -->
                        <div class="modal fade" :id="'exampleModal' + `${user.userID}`" tabindex="-1"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <!-- <div class="mb-3">
                                            <input v-model="user.userID" class="form-control" id="exampleFormControlTextarea1"
                                                rows="3" placeholder="first Name">
                                        </div> -->
                                        <div class="mb-3">
                                            <input v-model="user.firstName" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="first Name">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="user.lastName" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Surname">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="user.gender" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Gender">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="user.cellphoneNumber" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Cellphone Number">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="user.emailAdd" type="email" class="form-control"
                                                id="exampleFormControlInput1" placeholder="name@example.com">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="user.userPass" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Password">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="user.userRole" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="User Role">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="user.userProfile" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="User Profile">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="user.joinDate" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Join Date">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" @click="editUser(user)" class="btn btn-primary">Save
                                            changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>


        <!-- Button trigger modal -->
        <button id="add-btn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#stat">
            Add new product
        </button>

        <!-- Modal -->
        <div class="modal fade" id="stat" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <input v-model="prodName" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Product name">
                        </div>
                        <div class="mb-3">
                            <input v-model="prodDescription" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Description">
                        </div>
                        <div class="mb-3">
                            <input v-model="category" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Category">
                        </div>
                        <div class="mb-3">
                            <input v-model="price" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Price">
                        </div>
                        <div class="mb-3">
                            <input v-model="prodQuantity" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Quantity">
                        </div>
                        <div class="mb-3">
                            <input v-model="imgURL" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Image">
                        </div>
                        <div class="mb-3">
                            <input v-model="color" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Color">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                        <button type="button" @click="newProduct" class="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>

        <table class="table-user">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <!-- <th scope="col">Description</th> -->
                    <th scope="col">Color</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Image</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="index" class="table">

                    <td>{{ product.prodID }}</td>
                    <td>{{ product.prodName }}</td>
                    <!-- <td>{{ product.prodDescription }}</td> -->
                    <td>{{ product.color }}</td>
                    <td>R{{ product.price }}</td>
                    <td>{{ product.prodQuantity }}</td>
                    <td><img :src="product.imgURL" alt=""></td>
                    <td>
                        <button type="button" class="btn" data-bs-toggle="modal"
                            :data-bs-target="'#example' + `${product.prodID}`"><i class="fa-solid fa-pen"></i></button>
                        <button @click="deleteProduct(product)" class="btn"><i class="fa-solid fa-trash"></i></button>

                        <!-- Modal -->
                        <div class="modal fade" :id="'example' + `${product.prodID}`" tabindex="-1"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <input v-model="product.prodName" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Product name">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="product.prodDescription" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Description">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="product.category" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Category">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="product.price" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Price">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="product.prodQuantity" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Quantity">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="product.imgURL" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Image">
                                        </div>
                                        <div class="mb-3">
                                            <input v-model="product.color" class="form-control"
                                                id="exampleFormControlTextarea1" rows="3" placeholder="Color">
                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" @click="editProduct(product)" class="btn btn-primary">Save
                                            changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
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
    data() {
        return {
            prodID: "",
            prodName: "",
            prodDescription: "",
            category: "",
            price: "",
            prodQuantity: "",
            imgURL: "",
            color: "",
            userID: '',
            firstName: '',
            lastName: '',
            gender: '',
            cellphoneNumber: '',
            emailAdd: '',
            userPass: '',
            userRole: '',
            userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png',
            joinDate: ''
        }
    },
    methods: {
        newProduct: function () {
            return this.$store.dispatch("newProduct", {
                prodName: this.prodName,
                prodDescription: this.prodDescription,
                category: this.category,
                price: this.price,
                prodQuantity: this.prodQuantity,
                imgURL: this.imgURL,
                color: this.color

            })
        },

        newUser: function () {
            return this.$store.dispatch("register", {
                firstName: this.firstName,
                lastName: this.lastName,
                gender: this.gender,
                cellphoneNumber: this.cellphoneNumber,
                emailAdd: this.emailAdd,
                userPass: this.userPass,
                userRole: this.userRole,
                userProfile: this.userProfile,
                joinDate: this.joinDate

            })
        },

        editUser: function (user) {
            return this.$store.dispatch("editUser", {
                userID: user.userID,
                firstName: user.firstName,
                lastName: user.lastName,
                gender: user.gender,
                cellphoneNumber: user.cellphoneNumber,
                emailAdd: user.emailAdd,
                userPass: user.userPass,
                userRole: user.userRole,
                userProfile: user.userProfile,
            })

        },

        editProduct: function (product) {
            return this.$store.dispatch("editProduct", {
                prodID: product.prodID,
                prodName: product.prodName,
                prodDescription: product.prodDescription,
                category: product.category,
                price: product.price,
                prodQuantity: product.prodQuantity,
                imgURL: product.imgURL,
                color: product.color,
            })

        },
        deleteUser: function (user) {
            return this.$store.dispatch("deleteUser", {
                userID: user.userID,
                firstName: user.firstName,
                lastName: user.lastName,
                gender: user.gender,
                cellphoneNumber: user.cellphoneNumber,
                emailAdd: user.emailAdd,
                userPass: user.userPass,
                userRole: user.userRole,
                userProfile: user.userProfile,
            })

        },
        deleteProduct: function (product) {
            return this.$store.dispatch("deleteProduct", {
                prodID: product.prodID,
                prodName: product.prodName,
                prodDescription: product.prodDescription,
                category: product.category,
                price: product.price,
                prodQuantity: product.prodQuantity,
                imgURL: product.imgURL,
                color: product.color,
            })

        },
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
        products() {
            return this.$store.state.products;
        },
        product() {
            return this.$store.state.product;
        },

        user() {
            return this.$store.state.user;
        }
    },
    created() {
        this.$store.dispatch("getUsers")
        this.$store.dispatch("getProducts")
        // this.$store.dispatch("deleteUser", this.$route.params.id)
    },

}

</script>

<style scoped>
img {
    width: 4rem;
}

#add-user{
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.table-user{
    width: 100%;
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
    background-color: white;
}

#add-btn {
    margin-bottom: 2rem;
    margin-top: 6rem;
}


th{
    color: #1F8A70;
}
td {
    color: #1F8A70;
}

@media screen and (max-width: 701px) {
    
    th{
        font-size: 15px;
    }

    td{
        font-size: 13px;
    }

    img{
        width: 3rem;
    }
}
@media screen and (max-width: 601px) {
    .table-user{
        width: 10rem;
    }
    th{
        font-size: 17px;
    }

    td{
        font-size: 13px;
    }

    img{
        width: 3rem;
    }
}

@media screen and (max-width: 547px) {
    .table-user{
        width: 10rem;
    }
    th{
        font-size: 14px;
    }

    td{
        font-size: 13px;
    }

    img{
        width: 3rem;
    }
    
}

@media screen and (max-width: 547px) {
    .table-user{
        width: 10rem;
    }
    th{
        font-size: 12px;
    }

    td{
        font-size: 11px;
    }

    img{
        width: 3rem;
    }

    .fa-solid{
        font-size: 12px;
    }
    
}

@media screen and (max-width: 460px) {
    .table-user{
        width: 10rem;
    }
    th{
        font-size: 10px;
    }

    td{
        font-size: 9px;
    }

    img{
        width: 3rem;
    }

    .fa-solid{
        font-size: 12px;
        margin: 0rem 0rem;
    }
    
}

@media screen and (max-width: 368px) {
    .table-user{
        width: 10rem;
    }
    th{
        font-size: 8px;
    }

    td{
        font-size: 8px;
    }

    img{
        width: 3rem;
    }

    .fa-solid{
        font-size: 12px;
        margin: 0rem 0rem;
    }
    
}

@media screen and (max-width: 334px) {
    .table-user{
        width: 90vw;
    }
    th{
        font-size: 6.5px;
    }

    td{
        font-size: 8px;
    }

    img{
        width: 2rem;
    }

    .fa-solid{
        font-size: 7.5px;
        margin: 0rem 0rem;
    }
    
}
</style>