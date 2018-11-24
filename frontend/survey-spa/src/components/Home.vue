<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
    <h2 class="title">Check out recent surveys</h2>
</div>
</div>
  </section>
  <section class="section">
<div class="container">
<div class="card" v-for="survey in surveys" :key="survey.id">
    <p class="title">{{survey.name}}</p>
    <p class="subtitle">{{survey.created_at.toDateString()}}</p>
    </div>    
</div>
</section>
</div>
</template>
<script>
import { fetchSurveys } from '@/api'
export default {
  data() {
    return {
      surveys: []
    }
  },
  beforeMount() {
    fetchSurveys().then(response => {
      this.surveys = response
    })
  }
}
</script>
<style scoped>
</style>
