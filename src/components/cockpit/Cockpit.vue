<template>
    <div class="workspace d-flex flex-wrap flex-grow">
        <div class="col-12 col-md-6 px-0 pl-lg-0 pr-lg-1">
            <app-editors></app-editors>
        </div>
        <div class="col-12 col-md-6 px-0 pr-lg-0 pl-lg-1">
            <app-render></app-render>
        </div>
    </div>
</template>

<script>
import Editors from "../editors/Editors.vue";
import Render from "../render/Render.vue";

export default {
    components: {
        appEditors: Editors,
        appRender: Render
    }
}
</script>

<style>

</style>
