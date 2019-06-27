import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes, //es6 shortcut for routes: routes,
  mode: 'history' // this removes the /#/ from the url, make sure your server is set up to return the index even in the case of a 404.  https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
});

new Vue({
  el: '#app',
  router, //es6 shortcut for router: router,
  render: h => h(App)
})
