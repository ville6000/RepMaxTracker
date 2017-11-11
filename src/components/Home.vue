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
