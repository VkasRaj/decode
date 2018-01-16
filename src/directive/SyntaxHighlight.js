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