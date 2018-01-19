<template>
    <div class="editor">
        <div class="workarea-wrapper position-relative h-100">
            <textarea name="" 
                class="editor-textarea text-white p-2 consolas position-absolute h-100 w-100 border border-white" 
                spellcheck="false" 
                v-model="code" 
                @keyup.ctrl.enter="sendCode"></textarea>
            <pre 
                class="bg-work h-100 m-0 border border-white" 
                v-syntax-highlight="code"><code class="consolas p-2 w-100" ref="codeView" :class="name"></code></pre>
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
        'code'(newCode) {
            this.$emit('code', newCode);
        }
    },
    methods : {
        sendCode() {
            this.$emit('onSendCode', this.code);
            // console.log(this.code);
        }
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
    pre, code {
        word-wrap: break-word;
        white-space: pre-wrap;
        font-size: .95rem;
    }
</style>
