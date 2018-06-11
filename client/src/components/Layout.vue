<template>
    <div id="layout">
        <Header />
        <slot></slot>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
	components: {
		Header
	}
};
</script>

<style>
</style>
