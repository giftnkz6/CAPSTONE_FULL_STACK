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
  color: #2c3e50;
  background-color: white;
  height: 100%;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: blue;
}

nav a.router-link-exact-active {
  color: #42b983;
}


</style>
