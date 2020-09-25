import Vue from 'vue'
import App from './App.vue'
import VueHead from 'vue-head'
Vue.config.ignoredElements=[
  'airin-element'
  ]
Vue.use(VueHead);
new Vue({
  el: '#app',
  render: h => h(App)
})
