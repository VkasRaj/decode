<template>
    <main class="container-fluid row flex-wrap flex-grow h-100 px-0 mx-0">
        <section class="showcase col-12 col-md-6 px-0 pl-lg-0 pr-lg-1">
            <template v-if="isMobile">
                <app-editors-mobile></app-editors-mobile>
            </template>
            <template v-else>
                <app-editors-desktop></app-editors-desktop>
            </template>
        </section>
        <section class="showcase col-12 col-md-6 px-0 pr-lg-0 pl-lg-1">
            <app-render></app-render>
        </section>
    </main>
</template>

<script>
const EditorsMobile = () => import("../editors/mobile/EditorsMobile.vue");
const EditorsDesktop = () => import("../editors/desktop/EditorsDesktop.vue");
// import EditorsMobile from "../editors/mobile/EditorsMobile.vue";
// import EditorsDesktop from "../editors/desktop/EditorsDesktop.vue";
import Render from "../render/Render.vue";

export default {
    data() {
        return {
            isMobile: /Mobi/.test(navigator.userAgent)
        }
    },
    components: {
        appEditorsMobile: EditorsMobile,
        appEditorsDesktop: EditorsDesktop,
        appRender: Render
    }
}
</script>

<style lang="scss" scoped>
    .showcase {
        height: 50%;
    }

    @media only screen and (min-width: 768px) {
        .showcase {
            height: 100%;
        }
    }
</style>