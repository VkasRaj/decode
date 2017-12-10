<template>
  <div id="js" class="pt-2">
    <div class="workarea-wrapper position-relative h-100">
      <textarea name="" id="" class='bg-work text-white w-100 h-100 shadow' v-model="val_js" v-text="newJs"></textarea>
      <small class="text-secondary lang-title">JS</small>
      <div class="js-setting">
        <app-setting-icon></app-setting-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { eBus } from "../../main";
import Cog from "./Cog.vue";

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
  components : {
    appSettingIcon : Cog
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
