<template>
  <div id="css">
    <div class="workarea-wrapper position-relative h-100">
      <textarea name="" id="" class='bg-work text-white w-100 h-100 shadow' v-model="val_css" v-text="newCss"></textarea>
      <small class="text-secondary lang-title">CSS</small>
      <div class="css-setting">
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
    newCss : {
      type : String
    }
  },
  data() {
    return {
      val_css : ''
    }
  },
  components : {
    appSettingIcon : Cog
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
