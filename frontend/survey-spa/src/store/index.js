import Vue from 'vue'
import Vuex from 'vuex'
import { fetchSurveys, fetchSurvey, saveSurveyResponse } from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    surveys: [],
    currentSurvey: {}
  },
  getters: {
    fetchSurveys: state => {
      return state.surveys
    }
  },
  mutations: {
    setSurveys(state, payload) {
      state.surveys = payload.surveys
    },
    setSurvey(state, payload) {
      const nQuestions = payload.survey.questions.length
      for (let i = 0; i < nQuestions; i++) {
        payload.survey.questions[i].choice = null
      }
      state.currentSurvey = payload.survey
    },
    setChoice(state, payload) {
      const { questionId, choice } = payload
      const nQuestions = state.currentSurvey.questions.length
      for (let i = 0; i < nQuestions; i++) {
        if (state.currentSurvey.questions[i].id === questionId) {
          state.currentSurvey.questions[i].choice = choice
          break
        }
      }
    }
  },
  actions: {
    loadSurveys(context) {
      return fetchSurveys().then(response =>
        context.commit('setSurveys', { surveys: response })
      )
    },
    loadSurvey(context, { id }) {
      return fetchSurvey(id).then(response =>
        context.commit('setSurvey', { survey: response })
      )
    },
    addSurveyResponse(context) {
      return saveSurveyResponse(context.state.currentSurvey)
    }
  }
})

export default store
