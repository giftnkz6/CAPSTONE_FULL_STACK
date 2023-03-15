<template>
    <div class="register">
        <form action="" @submit.prevent="register">
            <h1>Register</h1>
            <div class="mb-3">
                <input type="text" v-model="firstName" class="form-control" id="exampleFormControlTextarea1"
                    rows="3" placeholder="First Name" required>
            </div>
            <div class="mb-3">
                <input type="text" v-model="lastName" class="form-control" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Last Name" required>
            </div>
            <div class="mb-3">
                <input type="text" v-model="gender" class="form-control" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Gender" required>
            </div>
            <div class="mb-3">
                <input type="text" v-model="cellphoneNumber" class="form-control" id="exampleFormControlTextarea1"
                    rows="3" placeholder="Cellphone number" required>
            </div>
            <div class="mb-3">
                <input type="email" v-model="emailAdd" class="form-control" id="exampleFormControlInput1"
                    placeholder="name@example.com" required>
            </div>
            <div class="mb-3">
                <input type="password" v-model="userPass" class="form-control" id="exampleFormControlTextarea1"
                    rows="3" placeholder="Password" required>
            </div>
            <div class="mb-3">
                <input type="text" v-model="userProfile" class="form-control" id="exampleFormControlTextarea1"
                    rows="3" placeholder="Profile Picture url" required>
            </div>
            <div class="mb-3">
                <input type="text" v-model="joinDate" class="form-control" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Join Date" required>
            </div>
            <button type="submit" class="btn btn-secondary">Register</button>
        </form>

    </div>
</template>

<script>
export default {
    name: "RegisterView",
    data() {
        return {
            firstName: '',
            lastName: '',
            gender: '',
            cellphoneNumber: '',
            emailAdd: '',
            userPass: '',
            userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png',
            joinDate: ''
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        register() {
            return this.$store.dispatch("register", {
                firstName: this.firstName,
                lastName: this.lastName,
                gender: this.gender,
                cellphoneNumber: this.cellphoneNumber,
                emailAdd: this.emailAdd,
                userPass: this.userPass,
                userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png',
                joinDate: this.joinDate
            });
        },
    },
};
</script>

<style scoped>
form {
    width: 520px;
    margin: auto;
}

.register {
    width: 620px;
    height: 560px;
    margin: auto;
    box-shadow: 0 0 10px #c1c1c1;
    background-color: whitesmoke;
    border-radius: 3rem;
    margin-bottom: 3rem;
    margin-top: 3rem;
}

@media screen and (max-width: 650px) {
    .register {
        width: 600px;
    }

}

@media screen and (max-width: 620px) {
    .register {
        width: 580px;
    }

}

@media screen and (max-width: 600px) {
    .register {
        width: 540px;
    }

    form {
        width: 480px;
    }

}

@media screen and (max-width: 560px) {
    .register {
        width: 500px;
    }

    form {
        width: 430px;
    }

}

@media screen and (max-width: 520px) {
    .register {
        width: 480px;
    }

    form {
        width: 400px;
    }

}

@media screen and (max-width: 500px) {
    .register {
        width: 420px;
    }

    form {
        width: 360px;
    }

}

@media screen and (max-width: 440px) {
    .register {
        width: 400px;
    }

    form {
        width: 330px;
    }

}

@media screen and (max-width: 410px) {
    .register {
        width: 360px;
    }

    form {
        width: 240px;
    }

}

@media screen and (max-width: 380px) {
    .register {
        width: 320px;
    }

    form {
        width: 240px;
    }

}

@media screen and (max-width: 330px) {
    .register {
        width: 270px;
    }

    form {
        width: 220px;
    }

}
</style>

