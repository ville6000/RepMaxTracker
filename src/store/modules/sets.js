const localStorageSetKey = 'rpt_sets'
const localStorageSets = window.localStorage.getItem(localStorageSetKey)

const state = {
  sets: localStorageSets === null ? [] : JSON.parse(localStorageSets)
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
    window.localStorage.setItem(localStorageSetKey, JSON.stringify(state.sets))
  },
  removeSet: (state, payload) => {
    state.sets.splice(state.sets.indexOf(payload), 1)
    window.localStorage.setItem(localStorageSetKey, JSON.stringify(state.sets))
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
