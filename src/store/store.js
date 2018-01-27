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
            state.htmlCode = payload;
        },
        setCssCode(state, payload) {
            state.cssCode = payload;
        },
        setJsCode(state, payload) {
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
        showOutput(context) {
            let output = `<head>
                            <style>
                                ${context.state.cssCode}
                            </style>
                        </head>
                        <body>
                            ${context.state.htmlCode}
                            <script>
                                ${context.state.jsCode}
                            </script>
                        </body>`
            context.commit('setOutput', output);
            context.commit('setSaved', true);
        }
    }
})