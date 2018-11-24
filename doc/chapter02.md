# Navigating the Vue Router

> https://stackabuse.com/single-page-apps-with-vue-js-and-flask-navigating-vue-router/

## Getting Familiar with Vue Router
## Using vue-router to Show an Individual Survey
`src/router/index`
```javascript
// ... omitted for brevity
import Survey from '@/components/Survey'

// ... omitted for brevity

export default new Router({  
  routes: [
    {
      // ... omitted for brevity
    }, {
      path: '/surveys/:id',
      name: 'Survey',
      component: Survey
    }
  ]
})
```

`src/components/Survey.vue`
```html
<template>  
<div>  
  <h3>I'm a Survey Component</h3>
</div>  
</template>

<script>  
export default {  
  data() {
    return {
      survey: {}
    }
  },
  beforeMount() {
    console.log('Survey.beforeMount -> :id === ', this.$route.params.id)
  }
}
</script>

<style>

</style>  
```

## Completing the Survey Taking Experience
## Adding Router Links to the Home Component
