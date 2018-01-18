// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router/index.js'
import VueResource from 'vue-resource'
import Vuefire from 'vuefire'
import firebase from './service/firebase'


Vue.config.productionTip = false
const router = Router;
Vue.use(VueResource);
Vue.use(Vuefire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');

