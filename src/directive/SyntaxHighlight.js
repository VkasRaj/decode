import Vue from "vue";
import hljs from "highlight.js";

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