<template>
    <div v-if="user">
        <div class="container">
            <div>
                <img :src="user.userProfile" alt="">
            </div>
            <div class="wrapper">
                <h2>User Information</h2>
                <p>Full Name : {{ user.firstName }} {{ user.lastName }}</p>
                <p>Email Address : {{ user.emailAdd }}</p>
                <p>User Role : {{ user.userRole }}</p>
                

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
        return{

        }
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
    .container{
        width: 600px;
        height: 250px;
        background-color: whitesmoke;
        border-radius: 2rem;
        display: flex;
        margin-top: 8rem;
    }

    img{
        width: 10rem;
        border-radius: 80%;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    p{
        color: rgb(139, 18, 18);
    }

    h2{
        margin-top: 3rem;
    }
    .wrapper{
        margin-left: 4rem;
    }

    @media screen and (max-width: 605px) {
        .container{
        width: 400px;
        height: 550px;
        background-color: whitesmoke;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        margin-top: 8rem;
    }

    .wrapper{
        margin: auto;
    }
    img{
        width: 12rem;
        border-radius: 50%;
        margin-top: 2rem;
        margin-bottom: 0rem;
    }

    h2{
        margin-top: .4rem;
    }


    }

    @media screen and (max-width: 430px) {
        .container{
        width: 350px;
        height: 550px;
        background-color: whitesmoke;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        margin-top: 8rem;
    }

    .wrapper{
        margin: auto;
    }
    img{
        width: 12rem;
        border-radius: 50%;
        margin-top: 2rem;
        margin-bottom: 0rem;
    }

    h2{
        margin-top: .4rem;
    }


    }

    @media screen and (max-width: 370px) {
        .container{
        width: 280px;
        height: 550px;
        background-color: whitesmoke;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        margin-top: 8rem;
    }

    .wrapper{
        margin: auto;
    }
    img{
        width: 12rem;
        border-radius: 50%;
        margin-top: 2rem;
        margin-bottom: 0rem;
    }

    h2{
        margin-top: .4rem;
    }


    }
</style>