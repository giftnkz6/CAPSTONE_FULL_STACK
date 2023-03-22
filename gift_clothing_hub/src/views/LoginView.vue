<template>
    <div v-if="!user">
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
</div>
    <div class="welcome" v-else><h1>Welcome {{ user.firstName }} {{ user.lastName }}</h1>
        <img src="https://media4.giphy.com/media/8IfLqeprcAOq0rZn0G/giphy.gif?cid=6c09b95235976ae29dafe84daac9d8b91329f12dee873b18&rid=giphy.gif&ct=s" alt="">
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

.welcome{
    margin: auto;
    margin-top: 6rem;
    width: 50rem;
}
form{
    width: 500px;
    /* width: 380px; */
    margin: auto;
}
img{
    width: 30rem;
    margin-top: 3rem;
    box-shadow: .2rem .2rem .2rem .2rem grey;
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

h1{
    color: #1F8A70;
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