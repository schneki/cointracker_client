import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export const eventBus = new Vue()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
