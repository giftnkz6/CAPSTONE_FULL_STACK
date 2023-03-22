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
        width: 12rem;
        border-radius: 50%;
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
</style>