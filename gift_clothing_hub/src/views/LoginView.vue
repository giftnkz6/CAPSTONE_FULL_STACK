<template>
    <div v-if="user"><h3>Welcome {{ user.firstName }} {{ user.lastName }}</h3></div>
    <div class="container">
        <form action="" @submit.prevent="login">
            <h3>SIGN IN</h3>
            <div class="mb-3">
                <input type="email" v-model="emailAdd" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required>
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" v-model="userPass" id="exampleFormControlTextarea1" rows="3" placeholder="Password" required>
            </div>
            <button type="submit" class="btn btn-secondary">Sign in</button>
            <p>Don't have an account? <a href="#register"></a><router-link to="/register">Sign up</router-link></p>
        </form>
    </div>
</template>

<script>
export default {
    name: "LoginView",

    data() {
        return {
            emailAdd: "",
            userPass: "",
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },


    methods: {
        login() {
            this.$store.dispatch("login", {
                emailAdd: this.emailAdd,
                userPass: this.userPass,
            });
        },

        log(){
            alert("Logged in")
        }
    },
};
</script>

<style scoped>
.container{
    width: 670px;
    /* width: 500px; */
    margin-top: 8rem;
    background-color: whitesmoke;
    border-radius: 5%;
    margin-bottom: 7rem;
}
form{
    width: 500px;
    /* width: 380px; */
    margin: auto;
}

input{
    margin-bottom: 1rem;
}

h3{
    margin-bottom: 1rem;
    margin-top: 2rem;
}

button{
    margin-bottom: 2rem ;
}

a{
    /* text-decoration: none; */
    color: blue;
    font-size: large;
}

@media screen and (max-width: 580px) {
    .container{
        width: 560px;
    }

    form{
        width: 480px;
    }
}

@media screen and (max-width: 560px) {
    .container{
        width: 520px;
    }
}
@media screen and (max-width: 530px) {
    .container{
        width: 500px;
    }
    form{
        width: 440px;
    }
}

@media screen and (max-width: 500px) {
    .container{
        width: 450px;
    }
    form{
        width: 400px;
    }
}

@media screen and (max-width: 470px) {
    .container{
        width: 400px;
    }
    form{
        width: 380px;
    }
}

@media screen and (max-width: 400px) {
    .container{
        width: 360px;
    }
    form{
        width: 320px;
    }
}

@media screen and (max-width: 370px) {
    .container{
        width: 320px;
    }
    form{
        width: 280px;
    }
}

@media screen and (max-width: 330px) {
    .container{
        width: 280px;
    }
    form{
        width: 240px;
    }
}

</style>