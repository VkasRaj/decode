<template>
    <div class="editor">
        <div class="workarea-wrapper position-relative h-100">
            <textarea name="" class="editor-textarea text-white p-2 consolas position-absolute h-100 w-100 border border-white" v-model="code"></textarea>
            <pre class="bg-work p-2 h-100 m-0 border border-white"><code class="text-white consolas p-0" ref="codeView" :class="name">{{ code }}</code></pre>
            <small class="text-secondary lang-title text-uppercase">{{ name }}</small>
            <!-- <div class="html-setting pointer">
                <app-setting-icon></app-setting-icon>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name : {
            type: String,
            required: true
        }
    },
    data() {
        return {
            code: ''
        }
    },
    watch : {
        // 'code'(newCode) {
        //     this.code = newCode.replace(/</g, '&lt;');
        //     this.syntaxHighlight();
        //     this.$hljs.initHighlightingOnLoad();
        //     console.log(newCode);
        // }
    },
    methods : {
        syntaxHighlight() {
            this.$hljs.highlightBlock(this.$refs.codeView);
        }
    },
    mounted() {
        // console.log(this.$refs.codeView.innerHTML)
        // this.syntaxHighlight();
        // this.$hljs.initHighlightingOnLoad();
    }
}
</script>

<style lang="scss" scoped>
    .consolas {
        font-family: 'Consolas';
    }
    textarea {
        background: transparent !important;
        z-index: 2;
        font-size: .95rem;
        text-fill-color: transparent !important;
        -webkit-text-fill-color: transparent !important;
    }
    code {
        font-size: .95rem;
    }
</style>
