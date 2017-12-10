import Vue from 'vue'
import App from './App.vue'

export const eBus = new Vue({
  data : {
    saved: false
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
