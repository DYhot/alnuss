// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/element-variables.scss'
import axios from "axios";
import CityInfo from "../static/js/citydata";
import store from './store/index'
Vue.use(ElementUI);
Vue.use(CityInfo);
Vue.config.productionTip = false;

/*axios引用*/
// Vue.prototype.$citydata = CityInfo;
Vue.prototype.$axios=axios;
Vue.prototype.$path = '../../../static/images/';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
});
