// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './rem'
import Vant from 'vant';
import 'vant/lib/index.css';
import './jquery-3.4.1'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'

Vue.use(IScrollView, IScroll)
Vue.config.productionTip = false
Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
