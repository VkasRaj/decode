<template>
  <div id="app" class="h-100">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-12 mb-2">
          <app-header @upOnSave='showOutput' :iHTML='htmlAdded' :iCSS='cssAdded' :iJS='jsAdded'></app-header>
        </div>
        <div class="col-12 col-lg-6 h-100 pr-lg-2">
          <app-html :newHtml='h' @onHTML='htmlAdded = $event' @keyup.native.ctrl.enter="showOutput" @keydown.native.tab.prevent="addSpaces($event.target)"></app-html>
          <app-css :newCss='c' @onCSS='cssAdded = $event' @keyup.native.ctrl.enter="showOutput" @keydown.native.tab.prevent="addSpaces($event.target)"></app-css>
          <app-js :newJs='j' @onJS='jsAdded = $event' @keyup.native.ctrl.enter="showOutput" @keydown.native.tab.prevent="addSpaces($event.target)"></app-js>
        </div>
        <div class="col-12 col-lg-6 pl-lg-2">
          <app-render>
            <template slot="iframe">
              <iframe src="" frameborder="0" class="bg-white w-100 h-100" ref="iframe" srcdoc=""></iframe>
            </template>
          </app-render>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Render from './components/render/Render.vue'
import HTML from './components/workspace/HTML.vue';
import CSS from './components/workspace/CSS.vue';
import JS from './components/workspace/JS.vue';

export default {
  data() {
    return {
      htmlAdded: '',
      cssAdded: '',
      jsAdded: '',
      h : '',
      c : '',
      j : ''
    }
  },
  components: {
    appHeader: Header,
    appRender: Render,
    appHtml: HTML,
    appCss: CSS,
    appJs: JS
  },
  methods: {
    setStorage(key, value) {
      sessionStorage.setItem(key, value);
    },
    getStorage(key) {
      return sessionStorage.getItem(key);
    },
    showOutput() {
      if (this.htmlAdded === 'null') {
        this.htmlAdded = '';
      }
      if (this.cssAdded === 'null') {
        this.cssAdded = '';
      }
      if (this.jsAdded === 'null') {
        this.jsAdded = '';
      }
      this.$refs.iframe.srcdoc = `${this.htmlAdded}<style>${this.cssAdded}</style><script>${this.jsAdded}<\/script>`;
      this.setStorage('htmlStorage', this.htmlAdded);
      this.setStorage('cssStorage', this.cssAdded);
      this.setStorage('jsStorage', this.jsAdded);
    },
    addSpaces(target) {
      let spaces = (' ').repeat(4);
      let curPos = target.selectionStart;
      let endPos = target.selectionEnd;
      target.value = (target.value).substr(0, curPos) + spaces + (target.value).substr(endPos, target.value.length);
      target.selectionEnd = curPos + spaces.length;
    }
  },
  mounted() {
    this.h = this.getStorage('htmlStorage');
    this.c = this.getStorage('cssStorage');
    this.j = this.getStorage('jsStorage');
    this.htmlAdded = this.h;
    this.cssAdded = this.c;
    this.jsAdded = this.j;
    if (sessionStorage.length) {
      if (this.h === 'null') {
        this.h = '';
      }
      if (this.c === 'null') {
        this.c = '';
      }
      if (this.j === 'null') {
        this.j = '';
      }
      this.$refs.iframe.srcdoc = `${this.h}<style>${this.c}</style><script>${this.j}<\/script>`;
    }
  }
}
</script>

<style lang="scss">
  $body: #21252b;
  $work: #282c34;
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
  } 
  .bg-work {
    background: $work;
  }
  .bg-body {
    background: $body;
  }
  
  #html, #css, #js {
    position: relative;
    height: calc(100 / 3 * 1%);
    textarea {
      font-family: 'Consolas';
      border: none;
      outline: none;
      padding: .5rem .8rem;
      resize: none;
      font-size: .95rem;
      box-shadow: 0 0 .5rem transparentize(#111,.5);
    }
    & > small.lang-title {
      position: absolute;
      right: .9rem;
      bottom: .8rem;
      z-index: 100;
    }
  }
  .pointer {
    cursor: pointer;
  }
  @import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');
</style>
