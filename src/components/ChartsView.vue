<template>
  <div class="charts-view container">
    <div class="row">
      <div class="col col-lg-6" v-for="exercise in exercises" :key="exercise.id">
        <rep-max-line-chart :sets="exerciseSets(exercise.id)" :exerciseName="exercise.name"></rep-max-line-chart>
      </div>
    </div>
  </div>
</template>

<script>
  import RepMaxLineChart from '@/components/RepMaxLineChart'

  export default {
    name: 'ChartsView',
    components: {
      RepMaxLineChart
    },
    methods: {
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
