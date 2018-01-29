<template>
    <div class="workspace d-flex flex-wrap flex-grow">
        <div class="col-12 col-md-6 px-0 pl-lg-0 pr-lg-1">
            <template v-if="isMobile">
                <app-editors-mobile></app-editors-mobile>
            </template>
            <template v-else>
                <app-editors></app-editors>
            </template>
        </div>
        <div class="col-12 col-md-6 px-0 pr-lg-0 pl-lg-1">
            <app-render></app-render>
        </div>
    </div>
</template>

<script>
const EditorsMobile = () => import("../editors/mobile/EditorsMobile.vue");
const Editors = () => import("../editors/Editors.vue");
// import EditorsMobile from "../editors/mobile/EditorsMobile.vue";
// import Editors from "../editors/Editors.vue";
import Render from "../render/Render.vue";

export default {
    data() {
        return {
            isMobile: /Mobi/.test(navigator.userAgent)
        }
    },
    components: {
        appEditorsMobile: EditorsMobile,
        appEditors: Editors,
        appRender: Render
    }
}
</script>

<style>

</style>
