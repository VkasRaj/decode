<template>
    <app-tabs :dark='true'>
        <app-tab :title="'html'" :selected="true">
            <app-editor 
                :name="'html'" 
                :value="htmlCode" 
                :mode="'text/xml'"
                @changed="setHtmlCode($event)"></app-editor>
        </app-tab>
        <app-tab :title="'css'">
            <app-editor 
                :name="'css'" 
                :value="cssCode" 
                :mode="'text/css'"
                @changed="setCssCode($event)"></app-editor>
        </app-tab>
        <app-tab :title="'js'">
            <app-editor 
                :name="'js'" 
                :value="jsCode" 
                :mode="'text/javascript'"
                @changed="setJsCode($event)"></app-editor>
        </app-tab>
    </app-tabs>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

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
           'setHtmlCode' ,
           'setCssCode',
           'setJsCode'
        ]),
        ...mapActions([
            'getCodeFromStorage',
            'showOutput',
        ])
    },
    created() {
        this.getCodeFromStorage();
        this.showOutput();
    }
}
</script>

<style lang="scss" scoped>
    .tabs-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        .tab-content {
            display: flex;
            flex-grow: 1;
            height: 100%;
        }
    }
</style>