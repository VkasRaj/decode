<template>
    <div v-if="isActive" 
        :id="title" 
        role="tabpanel" 
        :aria-labelledby="title+'-tab'">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    created() {
        this.isActive = this.selected;
    }
}
</script>

<style>

</style>
