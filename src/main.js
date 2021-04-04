import Vue from 'vue';
import store from './store';
import App from './App.vue';
import VueSocketIO from 'vue-socket.io';

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
}));

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app');