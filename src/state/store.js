import dispatchActionForAllModules from './utils/dispatch-action-for-all-modules'
import modules from './modules'
// eslint-disable-next-line import/no-relative-parent-imports
import Vue from 'vue'
// eslint-disable-next-line import/no-relative-parent-imports
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store

// Automatically run the `init` action for every module,
// if one exists.
dispatchActionForAllModules('init')
