import axios from 'axios/index'

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
  SET_SETS: (state, payload) => {
    state.sets = payload
  },
  removeSet: (state, payload) => {
  }
}

const actions = {
  ADD_SET: ({commit, dispatch}, payload) => {
    axios.post(process.env.RESOURCE_URL + '/sets', payload).then(response => {
      if (response.status === 201) {
        dispatch('GET_SETS')
      }
    })
  },
  GET_SETS: ({commit}) => {
    axios.get(process.env.RESOURCE_URL + '/sets').then(response => {
      commit('SET_SETS', response.data)
    })
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
