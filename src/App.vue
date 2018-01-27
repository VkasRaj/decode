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

<style lang="scss">

  $body: #21252b;
  $work: #282a36;
  $light: #868e96;

  ::-webkit-scrollbar {
    width: .3rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: $light;
  }
  html, body {
    position: relative;
    height: 100%;
    overflow: hidden;
  } 
  .bg-work {
    background: $work;
  }
  .bg-body {
    background: $body;
  }
  .shadow {
    box-shadow: 0 0 .5rem transparentize(#111,.5);
  }
  .pointer {
    cursor: pointer;
  }
  .flex-grow {
    flex-grow: 1;
  }
  .CodeMirror {
    border: 1px solid $body !important;
    height: 100% !important;
  }
  @for $i from 1 through 5 {
    .letter-spacing-#{$i} {
      letter-spacing: #{.1*$i}rem;
    }
  }
  @import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');
  @import url('../node_modules/codemirror/lib/codemirror.css');
  @import url('../node_modules/codemirror/theme/dracula.css');
</style>
