<template>
  <div id="app" class="d-flex flex-column h-100">
    <app-header />
    <app-cockpit />
  </div>
</template>

<script>
import Cockpit from "./components/cockpit/Cockpit.vue";

import "../node_modules/codemirror/mode/xml/xml.js";
import "../node_modules/codemirror/mode/css/css.js";
import "../node_modules/codemirror/mode/javascript/javascript.js";

export default {
  components: {
    appCockpit: Cockpit
  }
}
</script>

<style lang="scss" src="./App.scss">
</style>
