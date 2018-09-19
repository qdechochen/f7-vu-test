import Vue from 'vue';

import App from './App.vue';

Vue.config.productionTip = false;

import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

Framework7.use(Framework7Vue);

//const vueApp =
new Vue({
  components: { App },
  render: (h) => h(App),
}).$mount('#app');
