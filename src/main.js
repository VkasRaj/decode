// Vue Imports ==============
import Vue from 'vue';
import { store } from "./store/store";

// Third party libraries Imports ============

// Vue Components Imports ============
import App from './App.vue';
import Header from "./components/header/Header.vue";
import Editor from "./components/editors/editor/Editor.vue"
import Tabs from "./components/UI/Tabs/Tabs.vue";
import Tab from "./components/UI/Tabs/Tab/Tab.vue";

// Vue Directives Imports ============
// import { Codemirror } from "./directive/Codemirror";
import TabsDirective from './directive/Tabs';

// Registering Vue Components ==========
Vue.component('app-header', Header);
Vue.component('app-editor', Editor);
Vue.component('app-tabs', Tabs);
Vue.component('app-tab', Tab);

// Registering Third party libraries ==========
  // another way of registering (just for note purpose)
  // Object.defineProperty(Vue.prototype, '$syntax', { value: hljs });
  // Vue.prototype.$hljs = hljs;


new Vue({
  el: '#app',
  store,
  directives: {
    TabsDirective
  },
  render: h => h(App)
})
