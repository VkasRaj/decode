<template>
    <div class="tab-pane bg-light h-100 active" role="tabpanel" ref="css">
        <app-editor 
            :name="'css'" 
            @changed="setCssCode($event)"
            :cmMode="'text/css'"
            :value="cssCode"></app-editor>
    </div>
</template>

<script>
import Editor from "../../editor/Editor.vue";
import { mapMutations, mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'cssCode'
        ])
    },
    components: {
        appEditor: Editor
    },
    methods: {
        ...mapMutations([
            'setCssCode'
        ])
    }
};
</script>

<style>

</style>
