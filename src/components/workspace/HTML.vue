<template>
  <div id="html" class="pb-2">
    <div class="workarea-wrapper position-relative h-100">
      <textarea name="" id="" class='bg-work text-white w-100 h-100 shadow' v-model="val_html" v-text='newHtml'></textarea>
      <small class="text-secondary lang-title">HTML</small>
      <div class="html-setting pointer">
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
      newHtml : {
        type : String
      }
    },
    data() {
      return {
        val_html : ''
      }
    },
    components : {
      appSettingIcon : Cog
    },
    watch : {
      'val_html'() {
        eBus.onSave(false);
        this.$emit('onHTML',this.val_html);
      }
    }
  }
</script>

<style>

</style>
