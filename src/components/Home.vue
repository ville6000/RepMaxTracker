<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col col-xs-12">
        <app-add-sets></app-add-sets>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <app-set-lists></app-set-lists>
      </div>
    </div>
  </div>
</template>

<script>
  import AddSets from './AddSets.vue'
  import SetLists from './SetLists.vue'

  export default {
    name: 'Home',
    components: {
      'app-add-sets': AddSets,
      'app-set-lists': SetLists
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
