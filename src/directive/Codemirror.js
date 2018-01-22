import Vue from "vue";
import Cm from 'codemirror';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

export const Codemirror = {
    inserted(el, binding) {
        Cm.fromTextArea(el, {
            lineNumbers: true,
            mode: binding.value,
            theme: 'dracula'
        })
    },
    componentUpdated(el, binding) {
        Cm.fromTextArea(el, {
            lineNumbers: true,
            mode: binding.value,
            theme: 'dracula'
        })
        console.log(binding.value)
    }
}

Vue.directive('codemirror', Codemirror);