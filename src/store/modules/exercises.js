const state = {
  exercises: [
    { id: 1, name: 'Squat' },
    { id: 2, name: 'Bench' },
    { id: 3, name: 'Deadlift' },
    { id: 4, name: 'OHP' }
  ]
}

const getters = {
  allExercises: state => {
    return state.exercises
  }
}

export default {
  state,
  getters
}
