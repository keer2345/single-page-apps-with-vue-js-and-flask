# Setup and Getting to Know Vue.js

> https://stackabuse.com/single-page-apps-with-vue-js-and-flask-setting-up-vue-js/

## Create a Frontend App
```
mkdir frontend

vue create survey-spa

cd survey-spa

yarn serve
```

## Vue-Router
```
yarn add vue-router
mkdir -p src/router
touch src/router/index.js
```

## Bulma Style
```
yarn add bulma

yarn add vue-style-loader css-loader sass-loader node-sass -D
```

`App.vue`
```html
<style lang="scss">
@import '~bulma/bulma'
</style>
```

## Give it a Home (page)
```html
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
      <div class="card" v-for="survey in surveys" v-bind:key="survey.id">
        <div class="card-content">
          <p class="title">{{ survey.name}}</p>
          <p class='subtitle'>{{ survey.created_at.toDateString() }}</p>
        </div>
      </div>
    </div>
  </section>
</div>  
</template>  
```
