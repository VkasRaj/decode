<template>
    <div id="mobile-editor-wrapper" class="d-flex flex-column h-100">
        <ul class="nav nav-tabs nav-fill">
            <li class="nav-item" v-for="link in tabLinks" :key="link.name">
                <small>
                    <a 
                    class="text-white nav-link py-1 rounded-0 h-100 text-uppercase" 
                    @click="whichEditor = link.comp"
                    :class="{'active text-dark': whichEditor === link.comp}">{{link.name}}</a>
                </small>
            </li>
        </ul>
        <div class="tab-content flex-grow h-100" id="mobile-editors">
            <keep-alive>
                <component :is="whichEditor"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import EditorMobileHtml from './html/EditorMobileHtml.vue';
import EditorMobileCss from './css/EditorMobileCss.vue';
import EditorMobileJs from './js/EditorMobileJs.vue';

export default {
    data() {
        return {
            tabLinks: [
                {name: 'html', comp: 'app-editor-mobile-html'},
                {name: 'css', comp: 'app-editor-mobile-css'},
                {name: 'js', comp: 'app-editor-mobile-js'}
            ],
            whichEditor: 'app-editor-mobile-html'
        }
    },
    components: {
        appEditorMobileHtml: EditorMobileHtml,
        appEditorMobileCss: EditorMobileCss,
        appEditorMobileJs: EditorMobileJs
    },
    methods: {
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

<style>

</style>
