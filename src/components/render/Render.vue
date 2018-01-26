<template>
  <div id="render" class="h-100 bg-white">
    <iframe src="" frameborder="0" class="bg-white w-100 h-100" :srcdoc="output"></iframe>
  </div>
</template>

<script>
export default {
  computed: {
    output() {
      return this.$store.getters.getOutput;
    }
  }
}
</script>
