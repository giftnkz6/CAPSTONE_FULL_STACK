<template>
  <NavBar/>
  <div class="container-fluid min-vh-100" >
    <router-view/>
  </div>
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
  /* background-color: #B784A7; */
  background-color: lavender;
  /* background-color:  #DCAE96; */
  /* background-color: #6699CC; */
}

body::-webkit-scrollbar{
  display: none;
}

nav {
  padding: 30px;
  color: #BFDB38;
}

nav a {
  font-weight: bold;
  color: #DCAE96;
}

nav a.router-link-exact-active {
  color: grey;
}
</style>
