import Vue from 'vue'
import Router from 'vue-router'
import JodelList from '../components/JodelList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: JodelList
    }
  ]
})
