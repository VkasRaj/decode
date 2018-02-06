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
        <app-modal v-if="htmlModal" @close="htmlModal = false">
            <div class="modal-body">
                <app-input></app-input>
            </div>
        </app-modal>
        <app-modal v-if="cssModal" @close="cssModal = false">
            <div class="modal-body">
                <app-input></app-input>
            </div>
        </app-modal>
        <app-modal v-if="jsModal" @close="jsModal = false">
            <div class="modal-body">
                <app-input></app-input>
            </div>
        </app-modal>
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

