# State Management with Vuex

> https://stackabuse.com/single-page-apps-with-vue-js-and-flask-state-management-with-vuex/

## Introducing Vuex
```
yarn add vuex
```
```
mkdir src/store
touch src/store/index.js
```

`src/store/index.js`

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})

export default store
```

`src/main.js`
```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

## Migrating the Home Component to Vuex
