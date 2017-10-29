<template>
  <div class="set-lists">
    <div class="row">
      <app-set-list class="col-12 col-md-6 col-lg-3" v-for="exercise in exercises" :key="exercise.id"
        :sets="exerciseSets(exercise.id)" :exerciseName="getExerciseName(exercise.id)"></app-set-list>
    </div>
  </div>
</template>

<script>
  import SetList from './SetList.vue'

  export default {
    name: 'SetLists',
    components: {
      'app-set-list': SetList
    },
    methods: {
      getExerciseName (id) {
        const exercise = this.exercises.find(e => e.id === parseInt(id, 10))

        return (typeof exercise !== 'undefined') ? exercise.name : ''
      },
      exerciseSets (id) {
        return this.$store.getters.setsByExerciseId(id)
      }
    },
    computed: {
      exercises () {
        return this.$store.getters.allExercises
      }
    }
  }
</script>
