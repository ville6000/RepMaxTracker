<template>
  <div>
    <h3>{{ exerciseName }}</h3>

    <table class="table table-striped">
      <thead>
      <tr>
        <th @click="changeOrder('date')">
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
        <th @click="changeOrder('oneRepMax')">
          Est. 1RM
          <icon name="sort"></icon>
        </th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(set, idx) in sortedSets" :key="idx">
        <td>{{ set.date }}</td>
        <td>{{ set.repetitions }}</td>
        <td>{{ set.weight }}</td>
        <td>{{ set.volume }} kg</td>
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
  import format from 'date-fns/format'
  import 'vue-awesome/icons/sort'
  import Icon from 'vue-awesome/components/Icon'
  import oneRepMax from '@/mixins/oneRepMax'

  export default {
    name: 'SetList',
    components: {
      Icon
    },
    mixins: [oneRepMax],
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
          if (this.order.key === 'oneRepMax') {
            return this.oneRepMax(b) - this.oneRepMax(a)
          } else if (this.order.key === 'date') {
            return format(b.date, 'X') - format(a.date, 'X')
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
