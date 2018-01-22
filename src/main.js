// Vue Imports ==============
import Vue from 'vue';

// Third party libraries Imports ============
import Cm from 'codemirror';

// Vue Components Imports ============
import App from './App.vue';
import Editor from "./components/editor/Editor.vue";
import Header from "./components/header/Header.vue";
import Render from "./components/render/Render.vue";

// Vue Directives Imports ============
// import { Codemirror } from "./directive/Codemirror";

// Registering Vue Components ==========
Vue.component('app-editor', Editor);
Vue.component('app-header', Header);
Vue.component('app-render', Render);

// Registering Third party libraries ==========
  // another way of registering (just for note purpose)
  // Object.defineProperty(Vue.prototype, '$syntax', { value: hljs });
  // Vue.prototype.$hljs = hljs;
  Vue.prototype.$codemirror = Cm;


new Vue({
  el: '#app',
  directives: {
    // Codemirror
  },
  render: h => h(App)
})
