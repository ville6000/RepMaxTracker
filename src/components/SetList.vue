<template>
  <div>
    <h3>{{ exerciseName }}</h3>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Date</th>
        <th @click="changeOrder('repetitions')">Reps</th>
        <th @click="changeOrder('weight')">Weight</th>
        <th @click="changeOrder('volume')">Volume</th>
        <th @click="changeOrder('oneRepMax')">Est. 1RM</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(set, idx) in sortedSets" :key="idx">
        <td>{{ set.date }}</td>
        <td>{{ set.repetitions }}</td>
        <td>{{ set.weight }}</td>
        <td>{{ volume(set) }} kg</td>
        <td>{{ oneRepMax(set) }} kg</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="deleteSet(set)">Delete</button>
        </td>
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
    data () {
      return {
        order: {
          key: 'oneRepMax',
          direction: 'DESC'
        }
      }
    },
    methods: {
      changeOrder (key) {
        if (key === this.order.key) {
          this.order.direction = (this.order.direction === 'ASC') ? 'DESC' : 'ASC'
        }

        this.order.key = key
      },
      volume (set) {
        return set.repetitions * set.weight
      },
      oneRepMax (set) {
        if (set.repetitions === 1) {
          return set.weight
        } else {
          return Math.round((set.weight * set.repetitions * 0.0333) + set.weight)
        }
      },
      deleteSet (set) {
        this.$store.dispatch('removeSet', set)
      }
    },
    computed: {
      sortedSets () {
        const sets = this.sets.sort((a, b) => {
          if (this.order.key === 'oneRepMax') {
            return this.oneRepMax(b) - this.oneRepMax(a)
          } else if (this.order.key === 'volume') {
            return this.volume(b) - this.volume(a)
          } else {
            return b[this.order.key] - a[this.order.key]
          }
        })

        return (this.order.direction === 'ASC') ? sets.reverse() : sets
      }
    }
  }
</script>
