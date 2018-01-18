// Vue Imports ==============
import Vue from 'vue';

// Third party libraries Imports ============
import hljs from "highlight.js";

// Vue Components Imports ============
import App from './App.vue';
import Editor from "./components/editor/Editor.vue";

// Registering Vue Components ==========
Vue.component('app-editor', Editor);

// Registering Third party libraries ==========
  // another way of registering (just for note purpose)
  // Object.defineProperty(Vue.prototype, '$syntax', { value: hljs });
Vue.prototype.$hljs = hljs;

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

// Vue Global Directives =============
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
