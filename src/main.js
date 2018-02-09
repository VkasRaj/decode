// Vue Imports ==============
import Vue from 'vue';
import { store } from "./store/store";

// Third party libraries Imports ============

// Vue Components Imports ============
import App from './App.vue';
import Header from "./components/header/Header.vue";
import Editor from "./components/editors/editor/Editor.vue";

const Tabs = () => import("./components/UI/tabs/Tabs.vue");
const Tab = () => import("./components/UI/tabs/tab/Tab.vue");
const Modal = () => import("./components/UI/modal/Modal.vue");
const ModalHeader = () => import("./components/UI/modal/modal-header/ModalHeader.vue");
const ModalBody = () => import("./components/UI/modal/modal-body/ModalBody.vue");
const Backdrop = () => import("./components/UI/backdrop/Backdrop.vue");
const Input = () => import("./components/UI/input/Input.vue");
const FormGroup = () => import("./components/UI/form-group/FormGroup.vue");
const Button = () => import("./components/UI/button/Button.vue");

// Vue Directives Imports ============
// import { Codemirror } from "./directive/Codemirror";
import TabsDirective from './directive/Tabs';

// Registering Vue Components ==========
Vue.component('app-header', Header);
Vue.component('app-editor', Editor);
Vue.component('app-tabs', Tabs);
Vue.component('app-tab', Tab);
Vue.component('app-modal', Modal);
Vue.component('app-modal-header', ModalHeader);
Vue.component('app-modal-body', ModalBody);
Vue.component('app-backdrop', Backdrop);
Vue.component('app-input', Input);
Vue.component('app-form-group', FormGroup);
Vue.component('app-button', Button);

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
