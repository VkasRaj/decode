<template>
  <div id="render" class="h-100">
      <slot name="iframe"></slot>
  </div>
</template>

<script>
export default {
  props : ['iHTML', 'iCSS', 'iJS'],
  data() {
    return {
    }
  }
}
</script>

<style lang='sass' scoped>
  #render
    padding : .25rem
</style>
