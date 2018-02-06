<template>
    <button class="btn rounded-0" :class="{
        'btn-primary': type === 'primary',
        'btn-secondary': type === 'secondary',
        'btn-warning': type === 'warning',
        'btn-success': type === 'success',
        'btn-danger': type === 'danger',
        'btn-dark': type === 'dark',
        'btn-light': type === 'light',
    }" @click="$emit('clicked')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: true
    }
}
</script>

<style>

</style>
