<template>
  <div id="app">
    <router-link to="/Home">Home</router-link> -
   <router-link to="/Fone">Fone</router-link>-
   <router-link to="/Galeria">Galeria</router-link>-
    <router-link to="/Sobre">Sobre</router-link>-
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
    
  }
}
</script>

<style scoped>

</style>
