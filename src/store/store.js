import Vue from 'vue'
import Vuex from 'vuex'
import sets from './modules/sets'
import exercises from './modules/exercises'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    sets,
    exercises
  }
})
