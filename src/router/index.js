import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import appBackup from '../views/App_backup';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game',
    name: 'game',
    component: appBackup,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
