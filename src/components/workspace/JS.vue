<template>
  <div id="js">
      <textarea name="" id="" class='bg-work text-white w-100 h-100' v-model="val_js" @input="fireJS"></textarea>
      <small class="text-secondary lang-title">JS</small>
  </div>
</template>

<script>
import { eBus } from "../../main";
export default {
  data() {
    return {
      val_js : ''
    }
  },
  methods : {
    fireJS() {
      this.$emit('onJS',this.val_js);
    }
  }
}
</script>

<style>

</style>
