<template>
    <div class="editor w-100 position-relative">
        <textarea ref="codeTextarea"></textarea>
        <small class="lang-title text-uppercase position-absolute">{{ name }}</small>
    </div>
</template>

<script>
import "../../../node_modules/codemirror/mode/xml/xml.js";
import "../../../node_modules/codemirror/mode/css/css.js";
import "../../../node_modules/codemirror/mode/javascript/javascript.js";

import { fromTextArea } from "codemirror";

export default {
    props: {
        name : {
            type: String,
            required: true
        },
        value: true,
        cmMode: {
            type: String
        }
    },
    data() {
        return {
            codeTextarea : null,
        }
    },
    mounted() {
        this.codeTextarea = fromTextArea(this.$refs.codeTextarea, {
            lineNumbers: true,
            mode: {
                name: this.cmMode,
            },
            theme: 'dracula'
        })
        this.codeTextarea.setValue(this.value || '');
        this.codeTextarea.on('change', (instance, change) => {
            this.$emit('changed', instance.getValue());
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
    pre, code {
        word-wrap: break-word;
        white-space: pre-wrap;
        font-size: .95rem;
    }
    .editor {
        height: calc(100 / 3 * 1%) !important;
        & small.lang-title {
            color: $light;
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
