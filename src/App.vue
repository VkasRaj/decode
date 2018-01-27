<template>
  <div id="app" class="d-flex flex-column h-100">
    <div class="header">
      <app-header></app-header>
    </div>
    <div class="workspace d-flex flex-wrap flex-grow">
      <div class="col-12 col-md-6 px-0 pl-lg-0 pr-lg-1">
        <app-editor v-for="editor in editors" :key="editor.name"
          :name="editor.name" 
          @changed="onRecieveCode($event, editor.name)" 
          @keyup.native.exact.ctrl.enter="showOutput"
          :cmMode="editor.mode"></app-editor>
      </div>
      <div class="col-12 col-md-6 px-0 pr-lg-0 pl-lg-1">
        <app-render></app-render>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      editors: [
        { name: 'html', mode: 'text/xml' },
        { name: 'css', mode: 'text/css' },
        { name: 'js', mode: 'text/javascript' },
      ]
    }
  },
  computed: {
    ...mapState([
      'htmlCode',
      'cssCode',
      'jsCode',
      'output',
    ])
  },
  methods: {
    ...mapActions([
      'showOutput'
    ]),
    onRecieveCode(code, name) {
      this.$store.commit('setSaved', false);

      if (name === 'html') {
        this.$store.commit('setHtmlCode', code);
      } else if (name === 'css') {
        this.$store.commit('setCssCode', code);
      } else if (name === 'js') {
        this.$store.commit('setJsCode', code)
      }
    }
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
