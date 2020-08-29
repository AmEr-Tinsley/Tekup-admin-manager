<template>
  <v-app class="app">
    <InterfaceHeader/>
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import InterfaceHeader from "./components/Admin_section/InterfaceHeader";
import Footer from "./components/Footer";


export default {
  name: 'App',
  components: {
    InterfaceHeader,
    Footer
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
