<template>
    <div class="editor w-100 position-relative h-100">
        <textarea ref="codeTextarea"></textarea>
        <small class="lang-title text-uppercase position-absolute">{{ name }}</small>
    </div>
</template>

<script>
import { fromTextArea } from "codemirror";

export default {
    props: {
        name : {
            type: String,
            required: true
        },
        value: true,
        mode: {
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
                name: this.mode,
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
    $light: #868e96;
    .editor {
        & small.lang-title {
            color: $light;
            right: .5rem;
            bottom: .5rem;
            z-index: 100;
        }
    }
</style>
