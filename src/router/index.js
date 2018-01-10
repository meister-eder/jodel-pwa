import Vue from 'vue'
import Router from 'vue-router'
import JodelList from '../components/JodelList'

import NewJodel from '../components/NewJodel.vue'
import JodelDetail from '../components/JodelDetail.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: JodelList
    },
    {
      name: 'newjodel',
      component: NewJodel,
      path:'/new'
    },
    {
      name: 'jodel',
      component: JodelDetail,
      path: '/jodel/:id'
    }

  ]
})
