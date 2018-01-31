<template>
    <div id="editor-wrapper" class="h-100">
        <app-editor 
            :name="'html'" 
            :value="htmlCode" 
            @changed="setHtmlCode($event)" 
            :mode="'text/xml'" 
            @keyup.native.exact.ctrl.enter="showOutput"></app-editor>
        <app-editor 
            :name="'css'" 
            :value="cssCode" 
            @changed="setCssCode($event)" 
            :mode="'text/css'" 
            @keyup.native.exact.ctrl.enter="showOutput"></app-editor>
        <app-editor 
            :name="'js'"
            :value="jsCode" 
            @changed="setJsCode($event)" 
            :mode="'text/javascript'" 
            @keyup.native.exact.ctrl.enter="showOutput"></app-editor>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'htmlCode',
            'cssCode',
            'jsCode'
        ])
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
        ])
    },
    created() {
        this.getCodeFromStorage();
        this.showOutput();
    }
}
</script>

<style lang="scss" scoped>
    .editor {
        height: calc(100 / 3 * 1%) !important;
    }
</style>

