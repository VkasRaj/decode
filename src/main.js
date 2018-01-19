// Vue Imports ==============
import Vue from 'vue';

// Third party libraries Imports ============
import hljs from "highlight.js";

// Vue Components Imports ============
import App from './App.vue';
import Editor from "./components/editor/Editor.vue";

// Vue Components Imports ============
import { SyntaxHighlight } from "./directive/SyntaxHighlight";

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

new Vue({
  el: '#app',
  directives: {
    SyntaxHighlight
  },
  render: h => h(App)
})
