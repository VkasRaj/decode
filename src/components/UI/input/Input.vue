<template>
    <span>
        <input 
            type="text" class="form-control rounded-0 border border-dark" 
            v-if="type === 'input'" 
            :placeholder="placeholder" 
            :value="val" 
            @input="(event) => $emit('onInput', event.target.value)">
        <textarea 
            class="form-control rounded-0 border border-dark" 
            v-if="type === 'textarea'" 
            :placeholder="placeholder" 
            :value="val" 
            @input="(event) => $emit('onInput', event.target.value)"></textarea>
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
