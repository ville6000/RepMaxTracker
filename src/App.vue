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
    },
    mounted () {
      this.$store.dispatch('GET_EXERCISES')
      this.$store.dispatch('GET_SETS')
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
