<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col col-xs-12">
        <app-add-sets></app-add-sets>
      </div>
    </div>

    <div class="row">
      <div class="col col-md-8 offset-md-2">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item" v-for="exercise in exercises" :key="exercise.id">
            <a class="nav-link" @click="selectExercise(exercise)"
               :class="{'active': exercise.id === selectedExercise.id}">
              {{ exercise.name }}
            </a>
          </li>
        </ul>

        <div v-if="selectedExercise">
          <app-exercise-sets :sets="exerciseSets(selectedExercise.id)"
                             :exerciseName="selectedExercise.name"></app-exercise-sets>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AddSets from './AddSets.vue'
  import ExerciseSets from './ExerciseSets.vue'

  export default {
    name: 'Home',
    components: {
      'app-add-sets': AddSets,
      'app-exercise-sets': ExerciseSets
    },
    data () {
      return {
        selectedExercise: false
      }
    },
    methods: {
      selectExercise (exercise) {
        this.selectedExercise = exercise
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

<style scoped>
  .nav-pills a {
    cursor: pointer;
  }
</style>
