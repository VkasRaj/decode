<template functional>
  <div id="render" class="h-100 bg-white">
      <!-- <slot name="iframe"></slot> -->
    <iframe src="" frameborder="0" class="bg-white w-100 h-100" :srcdoc="props.output"></iframe>
  </div>
</template>

<script>
export default {
//   props: {
//     output: {
//       type: String,
//       required: true
//     }
//   },
//   data() {
//     return {
//       renderOutput : ''
//     }
//   },
//   watch: {
//     output(newCode) {
//       this.renderOutput = newCode;
//     }
//   }
}
</script>

<style lang='sass' scoped>
</style>
