import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    htmlCode: "",
    cssCode: "",
    jsCode: "",
    htmlConfig: {
      htmlTagClasses: "",
      headStuff: ""
    },
    cssConfig: {
      stylesheets: ""
    },
    jsConfig: {
      scripts: ""
    },
    output: "",
    saved: true
  },
  mutations: {
    setHtmlCode(state, payload) {
      state.saved = false;
      state.htmlCode = payload;
    },
    setCssCode(state, payload) {
      state.saved = false;
      state.cssCode = payload;
    },
    setJsCode(state, payload) {
      state.saved = false;
      state.jsCode = payload;
    },
    setOutput(state, payload) {
      state.output = payload;
    },
    setSaved(state, payload) {
      state.saved = payload;
    },
    setHtmlConfig(state, payload) {
      sessionStorage.htmlConfig = JSON.stringify(payload);
      state.htmlConfig = payload;
    },
    setCssConfig(state, payload) {
      sessionStorage.cssConfig = JSON.stringify(payload);
      state.cssConfig = payload;
    },
    setJsConfig(state, payload) {
      sessionStorage.jsConfig = JSON.stringify(payload);
      state.jsConfig = payload;
    }
  },
  actions: {
    showOutput({ commit, state }) {
      let output = `<html class="${state.htmlConfig.htmlTagClasses}">
                        <head>
                          ${state.htmlConfig.headStuff}
                          <link rel="text/stylesheet" href="${
                            state.cssConfig.stylesheets
                          }" />
                          <style>
                              ${state.cssCode}
                          </style>
                        </head>
                        <body>
                          ${state.htmlCode}

                          <script src="${state.jsConfig.scripts}"></script>
                          <script>
                              ${state.jsCode}
                          </script>
                        </body>
                    </html>`;

      sessionStorage.html = state.htmlCode;
      sessionStorage.css = state.cssCode;
      sessionStorage.js = state.jsCode;

      commit("setOutput", output);
      commit("setSaved", true);
    },
    getCodeFromStorage({ commit, state }) {
      let _html = sessionStorage.getItem("html") || state.htmlCode;
      let _css = sessionStorage.getItem("css") || state.cssCode;
      let _js = sessionStorage.getItem("js") || state.jsCode;
      let _htmlConfig =
        JSON.parse(sessionStorage.getItem("htmlConfig")) || state.htmlConfig;
      let _cssConfig =
        JSON.parse(sessionStorage.getItem("cssConfig")) || state.cssConfig;
      let _jsConfig =
        JSON.parse(sessionStorage.getItem("jsConfig")) || state.jsConfig;

      commit("setHtmlCode", _html);
      commit("setCssCode", _css);
      commit("setJsCode", _js);
      commit("setHtmlConfig", _htmlConfig);
      commit("setCssConfig", _cssConfig);
      commit("setJsConfig", _jsConfig);
    }
  }
});
