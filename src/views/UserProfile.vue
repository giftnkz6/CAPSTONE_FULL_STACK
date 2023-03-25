<template>
    <div v-if="user">
        <div class="container">
            <div>
                <img :src="user.userProfile" alt="">
            </div>
            <div class="wrapper">
                <h2>User Information</h2>
                <p>Name : {{ user.firstName }}</p>
                <p>Surname : {{ user.lastName }}</p>
                <p>Email Address : {{ user.emailAdd }}</p>
                <p>User Role : {{ user.userRole }}</p>
                <!-- Button trigger modal -->
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button @click="deleteUser(user)" class="btn"><i class="fa-solid fa-trash"></i></button>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <input v-model="user.firstName" class="form-control" id="exampleFormControlTextarea1"
                                        rows="3" placeholder="first Name">
                                </div>
                                <div class="mb-3">
                                    <input v-model="user.lastName" class="form-control" id="exampleFormControlTextarea1"
                                        rows="3" placeholder="Surname">
                                </div>
                                <div class="mb-3">
                                    <input v-model="user.gender" class="form-control" id="exampleFormControlTextarea1"
                                        rows="3" placeholder="Gender">
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
                                    <input v-model="user.userPass" class="form-control" id="exampleFormControlTextarea1"
                                        rows="3" placeholder="Password">
                                </div>
                                <div class="mb-3">
                                    <input v-model="user.userRole" class="form-control" id="exampleFormControlTextarea1"
                                        rows="3" placeholder="User Role">
                                </div>
                                <div class="mb-3">
                                    <input v-model="user.userProfile" class="form-control" id="exampleFormControlTextarea1"
                                        rows="3" placeholder="User Profile">
                                </div>
                                <div class="mb-3">
                                    <input v-model="user.joinDate" class="form-control" id="exampleFormControlTextarea1"
                                        rows="3" placeholder="Join Date">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" @click="editUser">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <div v-else>
        <h2>Account Not Found!</h2>
    </div>
</template>  

<script>
export default {
    name: 'UserProfile',

    data() {
        return {
            userID: '',
            firstName: '',
            lastName: '',
            gender: '',
            cellphoneNumber: '',
            emailAdd: '',
            userPass: '',
            userRole: '',
            userProfile: '',
            joinDate: ''
        }
    },

    methods:{
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
    },

    computed: {
        user: function () {
            return this.$store.state.user
        }
    },

    mounted() {
        this.$store.dispatch("getUser")
    }


}
</script>

<style scoped>
.container {
    width: 600px;
    height: 300px;
    background-color: whitesmoke;
    border-radius: 2rem;
    display: flex;
    margin-top: 8rem;
}

img {
    width: 10rem;
    border-radius: 80%;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

p {
    color: rgb(139, 18, 18);
}

h2 {
    margin-top: 3rem;
}

.wrapper {
    margin-left: 4rem;
}

@media screen and (max-width: 605px) {
    .container {
        width: 400px;
        height: 550px;
        background-color: whitesmoke;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        margin-top: 8rem;
    }

    .wrapper {
        margin: auto;
    }

    img {
        width: 12rem;
        border-radius: 50%;
        margin-top: 2rem;
        margin-bottom: 0rem;
    }

    h2 {
        margin-top: .4rem;
    }


}

@media screen and (max-width: 430px) {
    .container {
        width: 350px;
        height: 550px;
        background-color: whitesmoke;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        margin-top: 8rem;
    }

    .wrapper {
        margin: auto;
    }

    img {
        width: 12rem;
        border-radius: 50%;
        margin-top: 2rem;
        margin-bottom: 0rem;
    }

    h2 {
        margin-top: .4rem;
    }


}

@media screen and (max-width: 370px) {
    .container {
        width: 280px;
        height: 550px;
        background-color: whitesmoke;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        margin-top: 8rem;
    }

    .wrapper {
        margin: auto;
    }

    img {
        width: 12rem;
        border-radius: 50%;
        margin-top: 2rem;
        margin-bottom: 0rem;
    }

    h2 {
        margin-top: .4rem;
    }


}
</style>