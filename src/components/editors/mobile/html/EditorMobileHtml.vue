<template>
    <div class="tab-pane bg-light h-100 active" role="tabpanel" ref="html">
        <app-editor 
            :name="'html'" 
            @changed="setHtmlCode($event)"
            :cmMode="'text/xml'"
            :value="htmlCode"></app-editor>
    </div>
</template>

<script>
import Editor from "../../editor/Editor.vue";
import { mapMutations, mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'htmlCode'
        ])
    },
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
