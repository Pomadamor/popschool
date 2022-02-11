<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Header />
  <Accueil />
  <Footer />
</template>

<script>
import Accueil from './pages/Accueil.vue'
import Header from './template/Header'
import Footer from './template/Footer'

export default {
  name: 'App',
  components: {
    Accueil,
    Header,
    Footer,
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
  margin-top: 60px;
}
</style>
