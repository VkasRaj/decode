<template>
    <div id="editor-wrapper" class="h-100">
        
        <app-modal v-if="htmlModal" @close="htmlModal = false">
            <app-modal-header>
                <h5 class="mb-0">Code Setting: <strong>HTML</strong></h5>
            </app-modal-header>
            <app-modal-body>
                <app-form-group label="Add Class(es) to <html>">
                    <app-input slot="input" placeholder="e.g. bg-primary text-white"></app-input>
                </app-form-group>
                <app-form-group label="Stuff for <head>">
                    <app-input type='textarea' slot="input" placeholder="e.g. <meta> <link> <script>"></app-input>
                </app-form-group>
                <div class="text-right">
                    <app-button type='light' @clicked="htmlModal = false">Close</app-button>
                    <app-button type='dark'>Save</app-button>
                </div>
            </app-modal-body>
        </app-modal>

        <app-modal v-if="cssModal" @close="cssModal = false">
            <app-modal-header>
                <h5 class="mb-0">Code Setting: <strong class="text-primary">CSS</strong></h5>
            </app-modal-header>
            <app-modal-body>
                <app-form-group label="Add External Stylesheets/Library (URLs)">
                    <small slot="extra-info-top" class="d-block text-secondary mb-2">Any Url's added here will be added as &lt;link&gt;s in order, and before the CSS in the editor.</small>
                    <app-input slot="input" placeholder="e.g. https://getbootstrap.com"></app-input>
                </app-form-group>
                <div class="text-right">
                    <app-button type='light' @clicked="cssModal = false">Close</app-button>
                    <app-button type='dark'>Save</app-button>
                </div>
            </app-modal-body>
        </app-modal>

        <app-modal v-if="jsModal" @close="jsModal = false">
            <app-modal-header>
                <h5 class="mb-0">Code Setting: <strong class="text-warning">Javascript</strong></h5>
            </app-modal-header>
            <app-modal-body>
                <app-form-group label="Add External Scripts/Library (URLs)">
                    <small slot="extra-info-top" class="d-block text-secondary mb-2">Any Url's added here will be added as &lt;script&gt;s in order, and before the Javascript in the editor.</small>
                    <app-input slot="input" placeholder="e.g. https://code.jquery.com"></app-input>
                </app-form-group>
                <div class="text-right">
                    <app-button type='light' @clicked="jsModal = false">Close</app-button>
                    <app-button type='dark'>Save</app-button>
                </div>
            </app-modal-body>
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
import Setting from '../editor/editor-setting/Setting.vue';
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

