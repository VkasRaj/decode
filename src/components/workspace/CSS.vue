<template>
  <div id="css">
      <textarea name="" id="" class='bg-work text-white w-100 h-100 shadow' v-model="val_css" v-text="newCss"></textarea>
      <small class="text-secondary lang-title">CSS</small>
  </div>
</template>

<script>
import { eBus } from "../../main";
export default {
  props : {
    newCss : {
      type : String
    }
  },
  data() {
    return {
      val_css : ''
    }
  },
  watch : {
    'val_css'() {
      this.$emit('onCSS',this.val_css);
    }
  }
}
</script>

<style>

</style>
