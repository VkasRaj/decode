<template>
  <div id="js" class="pt-2">
      <textarea name="" id="" class='bg-work text-white w-100 h-100' v-model="val_js" v-text="newJs"></textarea>
      <small class="text-secondary lang-title">JS</small>
  </div>
</template>

<script>
import { eBus } from "../../main";
export default {
  props : {
    newJs : {
      type : String
    }
  },
  data() {
    return {
      val_js : ''
    }
  },
  watch : {
    'val_js'() {
      this.$emit('onJS',this.val_js);
    }
  }
}
</script>

<style>

</style>
