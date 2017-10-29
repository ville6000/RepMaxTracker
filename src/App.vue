<template>
  <div id="app">
    <app-navigation></app-navigation>
    <router-view/>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'

  export default {
    name: 'app',
    components: {
      'app-navigation': Navigation
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .navbar {
    margin-bottom: 2em;
  }
</style>
