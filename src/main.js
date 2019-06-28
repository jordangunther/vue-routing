import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes, //es6 shortcut for routes: routes,
  mode: 'history', // this removes the /#/ from the url, make sure your server is set up to return the index even in the case of a 404.  https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
});

new Vue({
  el: '#app',
  router, //es6 shortcut for router: router,
  render: h => h(App)
})
