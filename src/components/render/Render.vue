<template>
  <div id="render" class="h-100 bg-white">
    <iframe 
      :srcdoc="output"
      class="bg-white" 
      frameborder="0"
      sandbox="allow-scripts"
      width="100%"
      height="100%"></iframe>
  </div>
</template>

<script>
export default {
  computed: {
    output() {
      return this.$store.state.output;
    }
  }
}
</script>
