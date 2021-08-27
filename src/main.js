import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import '@/filters'
import globalVar from './utils/global' //
import commApi from '@/api/commApi'
import 'vant/lib/index.css';
import '@/assets/styles/index.scss' // global css
Vue.config.productionTip = false;
Vue.prototype.GOBAL = globalVar;
Vue.prototype.$api = commApi;
import { Toast, Button } from 'vant';
Vue.use(Toast);
Vue.use(Button);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

