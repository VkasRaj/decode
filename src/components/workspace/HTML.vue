<template>
  <div id="html">
      <textarea name="" id="" class='bg-work text-white w-100 h-100' v-model="val_html" @input="fireHTML"></textarea>
      <small class="text-secondary">HTML</small>
  </div>
</template>

<script>
import { eBus } from "../../main";
export default {
  data() {
    return {
      val_html : ''
    }
  },
  methods : {
    fireHTML() {
      this.$emit('onHTML',this.val_html);
    }
  }
}
</script>

<style>

</style>
