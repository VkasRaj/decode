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
import Modal from "./components/UI/modal/Modal.vue";
import Backdrop from "./components/UI/backdrop/Backdrop.vue";
import Input from "./components/UI/input/Input.vue";

// Vue Directives Imports ============
// import { Codemirror } from "./directive/Codemirror";
import TabsDirective from './directive/Tabs';

// Registering Vue Components ==========
Vue.component('app-header', Header);
Vue.component('app-editor', Editor);
Vue.component('app-tabs', Tabs);
Vue.component('app-tab', Tab);
Vue.component('app-modal', Modal);
Vue.component('app-backdrop', Backdrop);
Vue.component('app-input', Input);

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
