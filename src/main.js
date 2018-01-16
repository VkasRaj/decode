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

// Vue.directive('syntax-highlight', {
//   bind(el, binding) {
//     let targets = el.querySelectorAll('code');
//     targets.forEach(target => {
//       if (binding.value) {
//         target.textContent = binding.value;
//       }
//       this.$syntax.highlighBlock(target);
//     });
//   },
//   componentUpdated() {
//     let targets = el.querySelectorAll('code');
//     targets.forEach(target => {
//       if (binding.value) {
//         target.textContent = binding.value;
//         this.$syntax.highlighBlock(target);
//       }
//     });
//   }
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
