<template>
  <div id="css">
      <textarea name="" id="" class='bg-work text-white w-100 h-100' v-model="val_css" @input="fireCSS"></textarea>
      <small class="text-secondary lang-title">CSS</small>
  </div>
</template>

<script>
import { eBus } from "../../main";
export default {
  data() {
    return {
      val_css : ''
    }
  },
  methods : {
    fireCSS() {
      this.$emit('onCSS',this.val_css);
    }
  }
}
</script>

<style>

</style>
