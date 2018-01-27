<template>
    <div id="editor-wrapper" class="h-100">
        <app-editor v-for="editor in editors" :key="editor.name"
            :name="editor.name"
            :value="editor.value"
            @changed="onRecieveCode($event, editor.name)"
            @keyup.native.exact.ctrl.enter="showOutput"
            :cmMode="editor.mode"></app-editor>
    </div>
</template>

<script>
import Editor from "./editor/Editor.vue";

import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    data() {
        return {
            editors: []
        }
    },
    computed: {
        ...mapState([
            'htmlCode',
            'cssCode',
            'jsCode'
        ])
    },
    components: {
        appEditor: Editor
    },
    methods: {
        ...mapMutations([
            'setSaved',
            'setHtmlCode',
            'setCssCode',
            'setJsCode'
        ]),
        ...mapActions([
            'showOutput',
            'getCodeFromStorage',
        ]),
        onRecieveCode(code, name) {
            this.setSaved(false);
            if (name === 'html') {
                this.setHtmlCode(code);
            } else if (name === 'css') {
                this.setCssCode(code);
            } else if (name === 'js') {
                this.setJsCode(code);
            }
        }
    },
    mounted() {
        this.getCodeFromStorage();
        this.editors = [
            {
                name: 'html',
                mode: 'text/xml',
                value: this.htmlCode
            }, { 
                name: 'css',
                mode: 'text/css',
                value: this.cssCode
            }, { 
                name: 'js',
                mode: 'text/javascript',
                value: this.jsCode
            },
        ]
        this.showOutput();
    }
}
</script>
