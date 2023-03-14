<template>
  <NavBar/>
  <router-view/>
  <FooterVue/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterVue from './components/FooterVue.vue';
export default {
  name: "App",
  components:{
    FooterVue,
    NavBar

  }
  
}
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1F8A70;
  /* background-color: #00425A; */
  /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFBAx2e4qwd86As1JTqrQp-XN0hiqHk42nQ&usqp=CAU"); */
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}


nav {
  padding: 30px;
  color: #BFDB38;
}

nav a {
  font-weight: bold;
  color: #FC7300;
}

nav a.router-link-exact-active {
  color: grey;
}
</style>
