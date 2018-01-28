<template>
    <div class="tab-pane bg-light h-100 active" role="tabpanel" ref="html">
        <app-editor 
            :name="'html'" 
            @changed="setHtmlCode($event)"
            :cmMode="'text/xml'"></app-editor>
    </div>
</template>

<script>
import Editor from "../../editor/Editor.vue";
import { mapMutations } from 'vuex';

export default {
    components: {
        appEditor: Editor
    },
    methods: {
        ...mapMutations([
            'setHtmlCode'
        ])
    }
};
</script>

<style>

</style>
