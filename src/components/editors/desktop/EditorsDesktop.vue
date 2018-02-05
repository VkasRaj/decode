<template>
    <div id="editor-wrapper" class="h-100">
        <!-- <app-modal v-if="showModal">
            <div class="modal-body">
                <app-tabs :light='true'>
                    <app-tab title="html" :selected='true'>
                        <h1>this is html tab</h1>
                    </app-tab>
                    <app-tab title="css">
                        <h1>this is css tab</h1>
                    </app-tab>
                    <app-tab title="js">
                        <h1>this is js tab</h1>
                    </app-tab>
                </app-tabs>
            </div>
        </app-modal> -->
        <template v-if="htmlModal">
            <app-backdrop></app-backdrop>
            <app-modal @close="htmlModal = false">
                <div class="modal-body">
                    html
                </div>
            </app-modal>
        </template>
        <template v-if="cssModal">
            <app-backdrop></app-backdrop>
            <app-modal @close="cssModal = false">
                <div class="modal-body">
                    css
                </div>
            </app-modal>
        </template>
        <template v-if="jsModal">
            <app-backdrop></app-backdrop>
            <app-modal @close="jsModal = false">
                <div class="modal-body">
                    js
                </div>
            </app-modal>
        </template>
        <app-editor 
            :name="'html'" 
            :value="htmlCode" 
            @changed="setHtmlCode($event)" 
            :mode="'text/xml'" 
            @keyup.native.exact.ctrl.enter="showOutput">
                <app-editor-setting @clicked="htmlModal = true"></app-editor-setting>
            </app-editor>
        <app-editor 
            :name="'css'" 
            :value="cssCode" 
            @changed="setCssCode($event)" 
            :mode="'text/css'" 
            @keyup.native.exact.ctrl.enter="showOutput">
                <app-editor-setting @clicked="cssModal = true"></app-editor-setting>
            </app-editor>
        <app-editor 
            :name="'js'"
            :value="jsCode" 
            @changed="setJsCode($event)" 
            :mode="'text/javascript'" 
            @keyup.native.exact.ctrl.enter="showOutput">
                <app-editor-setting @clicked="jsModal = true"></app-editor-setting>
            </app-editor>
    </div>
</template>

<script>
import Setting from '../settings-icon/Setting.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    data() {
        return {
        htmlModal: false,
        cssModal: false,
        jsModal: false
        }
    },
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
    components: {
        'app-editor-setting': Setting
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

