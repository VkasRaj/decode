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
    getters: {
        // getHtmlCode(state) {
        //     return state.htmlCode;
        // },
        // getCssCode(state) {
        //     return state.cssCode;
        // },
        // getJsCode(state) {
        //     return state.jsCode;
        // },
        // getOutput(state) {
        //     return state.output;
        // },
        // getSaved(state) {
        //     return state.saved;
        // }
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
        showOutput(context, payload) {
            context.commit('setOutput', payload);
            context.commit('setSaved', true);
        }
    }
})