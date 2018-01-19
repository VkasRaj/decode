<template>
  <div id="app" class="d-flex flex-column h-100">
    <div class="header">
      <app-header @upOnSave='showOutput' :iHTML='htmlAdded' :iCSS='cssAdded' :iJS='jsAdded'></app-header>
    </div>
    <div class="workspace d-flex flex-wrap flex-grow">
      <div class="col-12 col-md-6 px-0 pl-lg-0 pr-lg-1">
        <!-- <app-editor :name="'html'" @code="onReceivedCode(htmlCode = $event)"></app-editor>
        <app-editor :name="'css'" @code="onReceivedCode(cssCode = $event)"></app-editor>
        <app-editor :name="'js'" @code="onReceivedCode(jsCode = $event)"></app-editor> -->
        <app-editor :name="'html'" @code="htmlCode = $event" @onSendCode="onReceivedCode($event)"></app-editor>
        <app-editor :name="'css'" @code="cssCode = $event" @onSendCode="onReceivedCode($event)"></app-editor>
        <app-editor :name="'js'" @code="jsCode = $event" @onSendCode="onReceivedCode($event)"></app-editor>
      </div>
      <div class="col-12 col-md-6 px-0 pr-lg-0 pl-lg-1">
        <app-render>
          <template slot="iframe">
            <iframe src="" frameborder="0" class="bg-white w-100 h-100" :srcdoc="output"></iframe>
          </template>
        </app-render>
      </div>
    </div>

    <!-- <div class="container-fluid">
      <div class="row">
        <div class="col-12 px-0">
            <app-header @upOnSave='showOutput' :iHTML='htmlAdded' :iCSS='cssAdded' :iJS='jsAdded'></app-header>
        </div>
      </div>
    </div> -->
    <!-- <div class="container-fluid d-flex flex-column flex-grow">
      <div class="row flex-grow">
        <div class="col-12 col-lg-6 px-0 pl-lg-0 pr-lg-1">
          <app-editor :name="'html'"></app-editor>
          <app-editor :name="'css'"></app-editor>
          <app-editor :name="'js'"></app-editor>
          <app-html :newHtml='h' @onHTML='htmlAdded = $event' @keyup.native.ctrl.enter="showOutput" @keydown.native.tab.prevent="addSpaces($event.target)"></app-html>
          <app-css :newCss='c' @onCSS='cssAdded = $event' @keyup.native.ctrl.enter="showOutput" @keydown.native.tab.prevent="addSpaces($event.target)"></app-css>
          <app-js :newJs='j' @onJS='jsAdded = $event' @keyup.native.ctrl.enter="showOutput" @keydown.native.tab.prevent="addSpaces($event.target)"></app-js>
        </div>
        <div class="col-12 col-lg-6 px-0 pr-lg-0 pl-lg-1">
          <app-render>
            <template slot="iframe">
              <iframe src="" frameborder="0" class="bg-white w-100 h-100" ref="iframe" srcdoc=""></iframe>
            </template>
          </app-render>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  import { eBus } from "./main";
  import Header from './components/header/Header.vue'
  import Render from './components/render/Render.vue'
  import HTML from './components/workspace/HTML.vue';
  import CSS from './components/workspace/CSS.vue';
  import JS from './components/workspace/JS.vue';

  export default {
    data() {
      return {
        htmlCode: '',
        cssCode: '',
        jsCode: '',
        htmlAdded: '',
        cssAdded: '',
        jsAdded: '',
        h : '',
        c : '',
        j : '',
        output: ''
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
      // setStorage(key, value) {
      //   sessionStorage.setItem(key, value);
      // },
      // getStorage(key) {
      //   return sessionStorage.getItem(key);
      // },
      showOutput() {
        eBus.onSave(true);
        if (this.htmlAdded === 'null') {
          this.htmlAdded = '';
        }
        if (this.cssAdded === 'null') {
          this.cssAdded = '';
        }
        if (this.jsAdded === 'null') {
          this.jsAdded = '';
        }
        this.output = this.htmlCode+`<style>${this.cssCode}</style><script>${this.jsCode}<\/script>`;
        // this.$refs.iframe.srcdoc = `${this.htmlAdded}<style>${this.cssAdded}</style><script>${this.jsAdded}<\/script>`;
        // this.setStorage('htmlStorage', this.htmlAdded);
        // this.setStorage('cssStorage', this.cssAdded);
        // this.setStorage('jsStorage', this.jsAdded);
      },
      // addSpaces(target) {
      //   let spaces = (' ').repeat(4);
      //   let curPos = target.selectionStart;
      //   let endPos = target.selectionEnd;
      //   target.value = (target.value).substr(0, curPos) + spaces + (target.value).substr(endPos, target.value.length);
      //   target.selectionEnd = curPos + spaces.length;
      // },
      onReceivedCode(code) {
        this.output = this.htmlCode+`<style>${this.cssCode}</style><script>${this.jsCode}<\/script>`;
        // console.log(this.htmlCode, this.cssCode, this.jsCode);
      }
    },
    mounted() {
      // this.h = this.getStorage('htmlStorage');
      // this.c = this.getStorage('cssStorage');
      // this.j = this.getStorage('jsStorage');
      // this.htmlAdded = this.h;
      // this.cssAdded = this.c;
      // this.jsAdded = this.j;
      // if (sessionStorage.length) {
      //   if (this.h === 'null') {
      //     this.h = '';
      //   }
      //   if (this.c === 'null') {
      //     this.c = '';
      //   }
      //   if (this.j === 'null') {
      //     this.j = '';
      //   }
      //   this.$refs.iframe.srcdoc = `${this.h}<style>${this.c}</style><script>${this.j}<\/script>`;
      // }
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
  
  #html, #css, #js, .editor {
    height: calc(100 / 3 * 1%);
    textarea {
      // font-family: 'Consolas';
      border: none;
      outline: none;
      padding: .5rem .8rem;
      resize: none;
      // font-size: .95rem;
    }
    & small.lang-title {
      position: absolute;
      right: .5rem;
      bottom: .5rem;
      z-index: 100;
    }
  }
  .pointer {
    cursor: pointer;
  }
  .flex-grow {
    flex-grow: 1;
  }
  .setting {
    background: $body;
    height: 1.5rem;
    width: 1.5rem;
    position: absolute;
    top: .5rem;
    right: .5rem;
  }
  @for $i from 1 through 5 {
    .letter-spacing-#{$i} {
      letter-spacing: #{.1*$i}rem;
    }
  }
  @import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');
  @import url('../node_modules/highlight.js/styles/atom-one-dark.css');
</style>
