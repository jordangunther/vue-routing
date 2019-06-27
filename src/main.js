import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes //es6 shortcut for routes: routes,
});

new Vue({
  el: '#app',
  router, //es6 shortcut for router: router,
  render: h => h(App)
})
