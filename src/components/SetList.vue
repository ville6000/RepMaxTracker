<template>
  <div>
    <h3>{{ exerciseName }}</h3>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Date</th>
        <th>Reps</th>
        <th>Weight</th>
        <th>Volume</th>
        <th>Est. 1RM</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(set, idx) in sortedSets" :key="idx">
        <td>{{ set.date }}</td>
        <td>{{ set.repetitions }}</td>
        <td>{{ set.weight }}</td>
        <td>{{ volume(set) }} kg</td>
        <td>{{ oneRepMax(set) }} kg</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'SetList',
    props: [
      'sets',
      'exerciseName'
    ],
    methods: {
      volume (set) {
        return set.repetitions * set.weight
      },
      oneRepMax (set) {
        if (set.repetitions === 1) {
          return set.weight
        } else {
          return Math.round((set.weight * set.repetitions * 0.0333) + set.weight)
        }
      }
    },
    computed: {
      sortedSets () {
        return this.sets.sort((a, b) => {
          return this.oneRepMax(b) - this.oneRepMax(a)
        })
      }
    }
  }
</script>
