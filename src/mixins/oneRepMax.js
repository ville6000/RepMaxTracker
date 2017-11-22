export default {
  methods: {
    oneRepMax (set) {
      if (set.repetitions === 1) {
        return set.weight
      } else {
        return Math.round((set.weight * set.repetitions * 0.0333) + set.weight)
      }
    }
  }
}
