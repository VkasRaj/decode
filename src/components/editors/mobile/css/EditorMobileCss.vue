<template>
    <div class="tab-pane bg-light h-100 active" role="tabpanel" ref="css">
        <app-editor 
            :name="'css'" 
            @changed="setCssCode($event)"
            :cmMode="'text/css'"></app-editor>
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
            'setCssCode'
        ])
    }
};
</script>

<style>

</style>
