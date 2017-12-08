<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0">
      <a href="#0" class="navbar-brand">deCoder</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#decoderNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="decoderNavbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item nav-link">
            <button href="#0" class="btn btn-light btn-sm text-uppercase btn-rounded badge-pill text-dark" @click="onSaveShowOutput">
              &times; save
            </button>
          </li>
          <li class="nav-item nav-link">
            <a href="#0" class=""></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props : ['iHTML', 'iCSS', 'iJS'],
  data() {
    return {

    }
  },
  methods : {
    onSaveShowOutput() {
      this.$emit('upOnSave');
    }
  }
}
</script>

<style>

</style>
