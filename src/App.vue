<template>
  <div id="app" class="h-100">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-12 col-lg-6">
          <app-html @onHTML='htmlAdded = $event' @keyup.native.ctrl.enter="showOutput"></app-html>
          <app-css @onCSS='cssAdded = $event' @keyup.native.ctrl.enter="showOutput"></app-css>
          <app-js @onJS='jsAdded = $event' @keyup.native.ctrl.enter="showOutput"></app-js>
        </div>
        <div class="col-12 col-lg-6">
          <app-render :iHTML='htmlAdded' :iCSS='cssAdded' :iJS='jsAdded'>
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
import Render from './components/render/Render.vue'
import HTML from './components/workspace/HTML.vue';
import CSS from './components/workspace/CSS.vue';
import JS from './components/workspace/JS.vue';

export default {
  data() {
    return {
      htmlAdded: '',
      cssAdded: '',
      jsAdded: ''
    }
  },
  components: {
    appRender: Render,
    appHtml: HTML,
    appCss: CSS,
    appJs: JS
  },
  methods: {
    showOutput() {
      let frame = this.$refs.iframe;
      frame.srcdoc = `${this.htmlAdded}<style>${this.cssAdded}</style><script>${this.jsAdded}<\/script>`;
    }
  }
}
</script>

<style lang="sass">
  \::-webkit-scrollbar
    width: .5rem
  \::-webkit-scrollbar-thumb
    background-color: #868e96
  html, body 
    position: relative
    height: 100%
    padding: .6rem 0;
  .bg-work
    background: #282c34
  .bg-body
    background: #21252b
  textarea
    font-family: 'Consolas'
    border: none
    outline: none
    padding: .5rem .8rem
    resize: none
    font-size: .95rem
    box-shadow: 0 0 .5rem transparentize(#111,.5)
  #html, #css, #js
    position: relative
    height: calc(100 / 3 * 1%)
    padding: .25rem
    &>small.lang-title
      position: absolute
      right: .9rem
      bottom: .8rem
      z-index: 100
  @import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');
</style>
