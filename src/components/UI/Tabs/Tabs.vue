<template>
  <div class="tabs-wrapper d-flex flex-column h-100">
    <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
      <li class="nav-item" v-for="(tab, i) in tabs" :key="i">
        <a 
          class="nav-link rounded-0 py-0 text-uppercase"
          :class="{'active': tab.isActive, 'text-white': !tab.isActive}"
          @click="selectTab(tab)"
          id="home-tab" 
          data-toggle="tab" 
          role="tab" 
          aria-controls="home" 
          aria-selected="true">{{ tab.title }}</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: null,
    }
  },
  methods: {
    selectTab(tab) {
      this.tabs.forEach(element => {
        element.isActive = (tab.title == element.title);
      });
    }
  },
  created() {
    this.tabs = this.$children
  }
};
</script>

<style>

</style>
