<template>
  <div>
    <h3>{{ exerciseName }}</h3>

    <table class="table table-striped">
      <thead>
      <tr>
        <th @click="changeOrder('performedOn')">
          Date
          <icon name="sort"></icon>
        </th>
        <th @click="changeOrder('repetitions')">
          Reps
          <icon name="sort"></icon>
        </th>
        <th @click="changeOrder('weight')">
          Weight
          <icon name="sort"></icon>
        </th>
        <th @click="changeOrder('volume')">
          Volume
          <icon name="sort"></icon>
        </th>
        <th @click="changeOrder('estimated1Rm')">
          Est. 1RM
          <icon name="sort"></icon>
        </th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(set, idx) in sortedSets" :key="idx">
        <td>{{ set.performedOn }}</td>
        <td>{{ set.repetitions }}</td>
        <td>{{ set.weight }}</td>
        <td>{{ set.volume }} kg</td>
        <td>{{ set.estimated1Rm }} kg</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="deleteSet(set)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import format from 'date-fns/format'
  import 'vue-awesome/icons/sort'
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'SetList',
    components: {
      Icon
    },
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
      deleteSet (set) {
        this.$store.dispatch('removeSet', set)
      }
    },
    computed: {
      sortedSets () {
        const sets = this.sets.sort((a, b) => {
          if (this.order.key === 'performedOn') {
            return format(b.performedOn, 'X') - format(a.performedOn, 'X')
          } else {
            return b[this.order.key] - a[this.order.key]
          }
        })

        return (this.order.direction === 'ASC') ? sets.reverse() : sets
      }
    }
  }
</script>

<style>
  th {
    cursor: pointer;
  }
</style>
