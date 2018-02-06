<template>
    <div class="modal-open">
        <div class="modal fade show d-block" tabindex="-1" role="dialog">
            <app-backdrop @close="$emit('close')"></app-backdrop>
            <div class="modal-dialog" role="document" style="z-index: 1080;">
                <div class="modal-content rounded-0">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Backdrop from "../backdrop/Backdrop.vue";

export default {
  components: {
      appBackdrop: Backdrop
  }
}
</script>

