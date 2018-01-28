import Vue from "vue";

function tabs(el, binding) {
    let tab = binding.value.name;
    let ref = binding.value.ref;
    for (const element in ref) {
        ref[element].style.display = "none";
    }
    ref[tab].style.display = 'block';
}

const TabsDirective = {
    inserted(el, binding) {
        el.onclick = () => tabs(el, binding);
    },
    componentUpdated(el, binding) {
        el.onclick = () => tabs(el, binding);
    }
}

Vue.directive('tabs', TabsDirective);

export default TabsDirective;