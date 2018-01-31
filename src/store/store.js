import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        htmlCode: '',
        cssCode: '',
        jsCode: '',
        output: '',
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
        }
    },
    actions: {
        showOutput({ commit, state }) {
            let output = `<head>
                            <style>
                                ${state.cssCode}
                            </style>
                        </head>
                        <body>
                            ${state.htmlCode}
                            <script>
                                ${state.jsCode}
                            </script>
                        </body>`;

            sessionStorage.html = state.htmlCode;
            sessionStorage.css = state.cssCode;
            sessionStorage.js = state.jsCode;

            commit('setOutput', output);
            commit('setSaved', true);
        },
        getCodeFromStorage({ commit }) {
            let h = sessionStorage.getItem('html') || '';
            let c = sessionStorage.getItem('css') || '';
            let j = sessionStorage.getItem('js') || '';

            commit('setHtmlCode', h);
            commit('setCssCode', c);
            commit('setJsCode', j);
        }
    }
})