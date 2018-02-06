<template>
    <span>
        <input v-if="type === 'input'" type="text" class="form-control rounded-0 border border-dark" :placeholder="placeholder" :value="val" @change="$emit('onChange')">
        <textarea v-if="type === 'textarea'" class="form-control rounded-0 border border-dark" :placeholder="placeholder" :value="val" @change="$emit('onChange')"></textarea>
    </span>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'input'
        },
        placeholder: {
            type: String,
            default: 'Dummy Placeholder'
        },
        val: {
            default: ''
        }
    }

}
</script>

<style>

</style>
