import Vue from 'vue'
import Vuex from 'vuex'
import { fetchSurveys } from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    surveys: []
  },
  getters: {
    fetchSurveys: state => {
      return state.surveys
    }
  },
  mutations: {
    setSurveys(state, payload) {
      state.surveys = payload.surveys
    }
  },
  actions: {
    loadSurveys(context) {
      return fetchSurveys().then(response =>
        context.commit('setSurveys', { surveys: response })
      )
    }
  }
})

export default store
