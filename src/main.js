import Vue from 'vue'
import App from './App.vue'

import Editor from "./components/editor/Editor.vue";

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

Vue.component('app-editor', Editor);

new Vue({
  el: '#app',
  render: h => h(App)
})
