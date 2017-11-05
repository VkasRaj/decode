<template>
  <div id="html">
      <textarea name="" id="" class='bg-work text-white w-100 h-100' v-model="val_html" v-text='newHtml'></textarea>
      <small class="text-secondary lang-title">HTML</small>
  </div>
</template>

<script>
import { eBus } from "../../main";
export default {
  props : {
    newHtml : {
      type : String
    }
  },
  data() {
    return {
      val_html : ''
    }
  },
  watch : {
    'val_html'() {
      this.$emit('onHTML',this.val_html);
    }
  }
}
</script>

<style>

</style>
