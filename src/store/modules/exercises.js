import axios from 'axios'

const state = {
  exercises: []
}

const getters = {
  allExercises: state => {
    return state.exercises
  }
}

const actions = {
  GET_EXERCISES: ({commit}) => {
    axios.get(process.env.RESOURCE_URL + '/exercises').then(response => {
      commit('SET_EXERCISES', { exercises: response.data })
    })
  }
}

const mutations = {
  SET_EXERCISES: (state, { exercises }) => {
    state.exercises = exercises
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
