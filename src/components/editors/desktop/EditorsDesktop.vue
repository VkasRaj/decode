<template>
    <div id="editor-wrapper" class="h-100">
        <template v-if="isModal === true">
            <app-modal @close="closeModal">
                <app-modal-body>
                    <h5 class="mb-3 letter-spacing-1 text-uppercase">Code Settings</h5>
                    <app-tabs :light='true'>
                        <app-tab title='html' :selected="whichTab === 'html'" classes="pt-3">
                            <app-form-group label="Add Class(es) to <html>">
                                <small slot="extra-info-top" class="d-block text-secondary mb-2">Multiple classes should be separated by space.</small>
                                <app-input 
                                    slot="input" 
                                    placeholder="e.g. bg-primary text-white"
                                    :val="htmlConfig.htmlTagClasses"
                                    @onInput="htmlTagClasses = $event"></app-input>
                            </app-form-group>
                            <app-form-group label="Stuff for <head>">
                                <small slot="extra-info-top" class="d-block text-secondary mb-2">All the HTML tags that will go into &lt;head&gt;</small>
                                <app-input type='textarea' 
                                    slot="input" 
                                    placeholder="e.g. <meta> <link> <script>" 
                                    :val="htmlConfig.headStuff"
                                    @onInput="headStuff = $event"></app-input>
                            </app-form-group>
                            <div class="text-right">
                                <app-button type='light' @clicked="closeModal">Close</app-button>
                                <app-button type='dark' @clicked="setHtmlConfig({htmlTagClasses, headStuff})">Save</app-button>
                            </div>
                        </app-tab>
                        <app-tab title='css' :selected="whichTab === 'css'" classes="pt-3">
                            <app-form-group label="Add External Stylesheets/Library (URLs)">
                                <small slot="extra-info-top" class="d-block text-secondary mb-2">Any Url's added here will be added as &lt;link&gt;s in order, and before the CSS in the editor.</small>
                                <app-input 
                                    slot="input" 
                                    placeholder="e.g. https://getbootstrap.com"
                                    :val="cssConfig.stylesheets"
                                    @onInput="stylesheets = $event"></app-input>
                            </app-form-group>
                            <div class="text-right">
                                <app-button type='light' @clicked="closeModal">Close</app-button>
                                <app-button type='dark' @clicked="setCssConfig({ stylesheets })">Save</app-button>
                            </div>
                        </app-tab>
                        <app-tab title='js' :selected="whichTab === 'js'" classes="pt-3"> 
                            <app-form-group label="Add External Scripts/Library (URLs)">
                                <small slot="extra-info-top" class="d-block text-secondary mb-2">Any Url's added here will be added as &lt;script&gt;s in order, and before the Javascript in the editor.</small>
                                <app-input 
                                    slot="input" 
                                    placeholder="e.g. https://code.jquery.com"
                                    :val="jsConfig.scripts"
                                    @onInput="scripts = $event"></app-input>
                            </app-form-group>
                            <div class="text-right">
                                <app-button type='light' @clicked="closeModal">Close</app-button>
                                <app-button type='dark' @clicked="setJsConfig({ scripts })">Save</app-button>
                            </div>
                        </app-tab>
                    </app-tabs>
                </app-modal-body>
            </app-modal>
        </template>

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
import Setting from "../editor/editor-setting/Setting.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      htmlTagClasses: "",
      headStuff: "",
      stylesheets: "",
      scripts: "",
      isModal: false,
      whichTab: "html"
    };
  },
  computed: {
    ...mapState([
      "htmlCode",
      "cssCode",
      "jsCode",
      "htmlConfig",
      "cssConfig",
      "jsConfig"
    ])
  },
  methods: {
    ...mapMutations([
      "setHtmlCode",
      "setCssCode",
      "setJsCode",
      "setHtmlConfig",
      "setCssConfig",
      "setJsConfig"
    ]),
    ...mapActions(["showOutput", "getCodeFromStorage"]),
    showModalAndTabs(tab) {
      this.isModal = true;
      this.whichTab = tab;
    },
    closeModal() {
      this.isModal = false;
      this.showOutput();
    }
  },
  components: {
    "app-editor-setting": Setting
  },
  created() {
    this.getCodeFromStorage();
    this.showOutput();
  },
  mounted() {
    this.htmlTagClasses = this.htmlConfig.htmlTagClasses;
    this.headStuff = this.htmlConfig.headStuff;
    this.stylesheets = this.cssConfig.stylesheets;
    this.scripts = this.jsConfig.scripts;
  }
};
</script>

<style lang="scss" scoped>
.editor {
  height: calc(100 / 3 * 1%) !important;
}
</style>

