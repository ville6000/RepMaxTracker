const state = {
  sets: []
}

const getters = {
  allSets: state => {
    return state.sets
  },
  setsByExerciseId (state) {
    return id => state.sets.filter((set) => {
      return set.exerciseId === id
    })
  }
}

const mutations = {
  addSet: (state, payload) => {
    state.sets.push(payload)
  },
  removeSet: (state, payload) => {
    state.splice(payload, 1)
  }
}

const actions = {
  addSet: ({commit}, payload) => {
    commit('addSet', payload)
  },
  removeSet: ({commit}, payload) => {
    commit('removeSet', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
