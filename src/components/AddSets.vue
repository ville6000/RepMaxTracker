<template>
  <div class="add-sets form-row justify-content-center">
    <div class="form-group col col-6 col-lg-2">
      <label for="date">Date</label>
      <input type="date" id="date" class="form-control" v-model="set.date">
    </div>
    <div class="form-group col col-6 col-lg-2">
      <label for="exercise" class="control-label">Exercise</label>
      <select id="exercise" class="form-control" v-model="set.exerciseId">
        <option disabled value="">Select exercise</option>
        <option v-for="exercise in exercises" :value="exercise.id">
          {{ exercise.name }}
        </option>
      </select>
    </div>

    <div class="form-group col col-6 col-lg-1">
      <label for="weight" class="control-label">Weight</label>
      <input type="text" id="weight" placeholder="Weight" class="form-control" v-model="set.weight">
    </div>

    <div class="form-group col col-6 col-lg-1">
      <label for="repetitions" class="control-label">Repetitions</label>
      <input type="text" id="repetitions" placeholder="Reps" class="form-control" v-model="set.repetitions"
        @keyup.enter.prevent="addSet(set)">
    </div>

    <div class="form-group col col-12 col-lg-1">
      <button class="btn btn-primary" @click.prevent="addSet(set)">
        Save
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddSets',
    data () {
      return {
        set: {
          date: '',
          weight: '',
          repetitions: '',
          exerciseId: '',
          volume: 0
        }
      }
    },
    methods: {
      addSet (set) {
        if (!set.exerciseId || !set.weight || !set.repetitions) {
          return
        }

        set.repetitions = parseInt(set.repetitions, 10)
        set.weight = parseFloat(set.weight.replace(/,/g, '.'))
        set.volume = set.repetitions * set.weight

        this.$store.dispatch('addSet', Object.assign({}, set))
        this.clearInputs()
      },
      clearInputs () {
        this.set.weight = ''
        this.set.repetitions = ''
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
  .add-sets {
    margin-bottom: 2em;
  }

  .btn {
    margin: 0;
  }

  @media all and (min-width: 768px) {
    .btn {
      margin: 2rem 0 0 0;
    }
  }
</style>
