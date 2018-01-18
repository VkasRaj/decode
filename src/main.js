import Vue from 'vue'
import App from './App.vue'

import Editor from "./components/editor/Editor.vue";
import hljs from "highlight.js";

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
Vue.prototype.$hljs = hljs;
// Object.defineProperty(Vue.prototype, '$syntax', { value: hljs });

Vue.directive('syntax-highlight', {
  bind(el, binding) {
    if (typeof binding.value === 'undefined') {
      throw "Missing Value: You have to provide value to be highlighted!";
    }
    let targets = el.querySelectorAll('code');
    targets.forEach(target => {
      target.textContent = binding.value;
      hljs.highlightBlock(target);
    });
  },
  componentUpdated(el, binding) {
    if (typeof binding.value === 'undefined') {
      throw "Missing Value: You have to provide value to be highlighted!";
    }
    let targets = el.querySelectorAll('code');
    targets.forEach(target => {
      target.textContent = binding.value;
      hljs.highlightBlock(target);
    });
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
