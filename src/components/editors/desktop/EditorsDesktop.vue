<template>
    <div id="editor-wrapper" class="h-100">
        <app-modal v-if="isModal === true" @close="isModal = false">
            <app-modal-body>
                <h5 class="mb-3 letter-spacing-1 text-uppercase">Code Setting</h5>
                <app-tabs :light='true'>
                    <app-tab title='html' :selected="whichTab === 'html'">
                        <app-form-group label="Add Class(es) to <html>">
                            <small slot="extra-info-top" class="d-block text-secondary mb-2">Multiple classes should be separated by space.</small>
                            <app-input 
                                slot="input" 
                                placeholder="e.g. bg-primary text-white" 
                                @onInput="htmlConfig.htmlTagClasses = $event"></app-input>
                        </app-form-group>
                        <app-form-group label="Stuff for <head>">
                            <app-input type='textarea' 
                                slot="input" 
                                placeholder="e.g. <meta> <link> <script>" 
                                @onInput="htmlConfig.headStuff = $event"></app-input>
                        </app-form-group>
                        <div class="text-right">
                            <app-button type='light' @clicked="isModal = false">Close</app-button>
                            <app-button type='dark'>Save</app-button>
                        </div>
                    </app-tab>
                    <app-tab title='css' :selected="whichTab === 'css'">
                        <app-form-group label="Add External Stylesheets/Library (URLs)">
                            <small slot="extra-info-top" class="d-block text-secondary mb-2">Any Url's added here will be added as &lt;link&gt;s in order, and before the CSS in the editor.</small>
                            <app-input slot="input" placeholder="e.g. https://getbootstrap.com" @onInput="cssStylesheet = $event"></app-input>
                        </app-form-group>
                        <div class="text-right">
                            <app-button type='light' @clicked="isModal = false">Close</app-button>
                            <app-button type='dark' @clicked="addStylesheet">Add</app-button>
                        </div>
                    </app-tab>
                    <app-tab title='js' :selected="whichTab === 'js'">
                        <app-form-group label="Add External Scripts/Library (URLs)">
                            <small slot="extra-info-top" class="d-block text-secondary mb-2">Any Url's added here will be added as &lt;script&gt;s in order, and before the Javascript in the editor.</small>
                            <app-input slot="input" placeholder="e.g. https://code.jquery.com"></app-input>
                        </app-form-group>
                        <div class="text-right">
                            <app-button type='light' @clicked="isModal = false">Close</app-button>
                            <app-button type='dark' @clicked="addScript">Save</app-button>
                        </div>
                    </app-tab>
                </app-tabs>
            </app-modal-body>
        </app-modal>

        <app-editor 
            :name="'html'" 
            :value="htmlCode" 
            @changed="setHtmlCode($event)" 
            :mode="'text/xml'" 
            @keyup.native.exact.ctrl.enter="showOutput">
                <app-editor-setting @clicked="showModalAndTabs('html')"></app-editor-setting>
            </app-editor>
        <app-editor 
            :name="'css'" 
            :value="cssCode" 
            @changed="setCssCode($event)" 
            :mode="'text/css'" 
            @keyup.native.exact.ctrl.enter="showOutput">
                <app-editor-setting @clicked="showModalAndTabs('css')"></app-editor-setting>
            </app-editor>
        <app-editor 
            :name="'js'"
            :value="jsCode" 
            @changed="setJsCode($event)" 
            :mode="'text/javascript'" 
            @keyup.native.exact.ctrl.enter="showOutput">
                <app-editor-setting @clicked="showModalAndTabs('js')"></app-editor-setting>
            </app-editor>
    </div>
</template>

<script>
import Setting from '../editor/editor-setting/Setting.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    data() {
        return {
            cssStylesheet: '',
            jsScript: '',
            htmlConfig: {
                htmlTagClasses: '',
                headStuff: ''
            },
            cssConfig: {
                stylesheets: []
            },
            jsConfig: {
                scripts: []
            },
            isModal: false,
            whichTab: 'html'
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
        ]),
        showModalAndTabs(tab) {
            this.isModal = true;
            this.whichTab = tab;
        },
        addStylesheet() {
            if (!this.cssStylesheet) {
                alert('Please enter URL of stylesheet/framework')
            }
            this.cssConfig.stylesheets.push(this.cssStylesheet)
        },
        addScript() {
            if (!this.jsScript) {
                alert('Please enter URL of script/library')
            }
            this.jsConfig.scripts.push(this.jsScript)
        }
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

