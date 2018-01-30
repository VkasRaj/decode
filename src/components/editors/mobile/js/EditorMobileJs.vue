<template>
    <div class="tab-pane bg-light h-100 active" role="tabpanel" ref="js">
        <app-editor 
            :name="'js'" 
            @changed="setJsCode($event)"
            :cmMode="'text/javascript'"
            :value="jsCode"></app-editor>
    </div>
</template>

<script>
import Editor from "../../editor/Editor.vue";
import { mapMutations, mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'jsCode'
        ])
    },
    components: {
        appEditor: Editor
    },
    methods: {
        ...mapMutations([
            'setJsCode'
        ])
    }
};
</script>

<style>

</style>
