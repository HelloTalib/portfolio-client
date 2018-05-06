// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueScrollReveal from 'vue-scroll-reveal'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueScrollReveal)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
