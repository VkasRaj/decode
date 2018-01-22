<template>
    <div class="editor w-100">
        <textarea ref="codeTextarea"></textarea>
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
            codeTextarea : null,
            codeTextareaValue : null
        }
    },
    mounted() {
        this.codeTextarea = this.$codemirror.fromTextArea(this.$refs.codeTextarea, {
            lineNumbers: true,
            mode: this.name,
            theme: 'dracula'
        })
        this.codeTextarea.on('change', (instance, change) => {
            this.codeTextareaValue = instance.getValue();
            this.$emit('code', this.codeTextareaValue);
        })
        this.codeTextarea.on('keydown', (instance, event) => {
            if (event.ctrlKey && event.key === 'Enter' && event.keyCode === 13) {
                this.$emit('onSendCode')
            }
        })
    }
}
</script>
<style lang="scss" scoped>
    $body: #21252b;
    $work: #282c34;
    $light: #868e96;
    
    .consolas {
        font-family: 'Consolas';
    }
    // textarea {
    //     background: transparent !important;
    //     z-index: 2;
    //     font-size: .95rem;
    //     text-fill-color: transparent !important;
    //     -webkit-text-fill-color: transparent !important;
    // }
    pre, code {
        word-wrap: break-word;
        white-space: pre-wrap;
        font-size: .95rem;
    }
    .editor {
        height: calc(100 / 3 * 1%) !important;
        // textarea {
        // border: none;
        // outline: none;
        // padding: .5rem .8rem;
        // resize: none;
        // }
        & small.lang-title {
        position: absolute;
        right: .5rem;
        bottom: .5rem;
        z-index: 100;
        }
    }
    .setting {
        background: $body;
        height: 1.5rem;
        width: 1.5rem;
        position: absolute;
        top: .5rem;
        right: .5rem;
    }
</style>
