import Vue from 'vue'
import App from './App.vue'

export const eBus = new Vue({
  data : {
    saved: true,
    setting : false,
  },
  methods : {
    onSave(param) {
      this.$emit('uponSave', param);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
