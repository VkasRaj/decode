<template>
  <div class="tabs-wrapper">
    <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
      <li class="nav-item" v-for="(tab, i) in tabs" :key="i">
        <a 
          :href="tab.href"
          class="nav-link rounded-0 py-0 text-uppercase"
          :class="{
            'active': tab.isActive,
            'text-white': !tab.isActive && dark,
            'bg-dark text-white': tab.isActive && light
          }"
          @click="selectTab(tab)"
          id="home-tab" 
          data-toggle="tab" 
          role="tab" 
          aria-controls="home" 
          aria-selected="true">{{ tab.title }}</a>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    light: true,
    dark: true
  },
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
