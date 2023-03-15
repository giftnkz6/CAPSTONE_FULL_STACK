<template>
    <header>
        <nav class="navbar navbar-expand-lg w-100">
            <div class="container-fluid">
                <a href="#home"><router-link to="/"><img class="logo" src="https://i.postimg.cc/nzcxMrxg/Screenshot-2023-03-13-095116.png" alt="logo"></router-link></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li><a href="#home"></a><router-link to="/">Home</router-link></li>
                        <li><a href="#about"></a><router-link to="/about">About</router-link></li>
                        <li><a href="#login"></a><router-link to="/login">Login</router-link></li>
                        <li><a href="#register"></a><router-link to="/register">Register</router-link></li>
                        <li><a href="#shop"></a><router-link to="/shop">Shop</router-link></li>
                        <li><a href="#admin"></a><router-link to="/admin">Admin</router-link></li>
                        <li><a href="#contact"></a><router-link to="/contact">Contact</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
    export default{
        name: 'NavBar',
        data(){
            
        },

        methods:{
        }
    }
</script>
<style scoped>
    nav{
        background-color: whitesmoke;
        margin-bottom: 2rem;
    }
    a{
        
        font-size: larger;
    }
    li{
        margin: 1.5rem;
    }
   
    .logo{
        width: 4rem;
    }
    .navbar-nav li{
    margin: 0 0.8rem;
}
.navbar {
    z-index: 3;
    /* background-color: #00425A; */
    /* position: fixed; */
}
.navbar ul{
    font-size: 18px;
}
header{
    z-index: +3;
}
</style>