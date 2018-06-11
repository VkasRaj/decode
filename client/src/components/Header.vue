<template>
  <v-toolbar flat>
    <v-toolbar-side-icon><MenuIcon /></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
      <v-btn exact flat to="/">Home</v-btn>
      <v-btn exact flat to="/about">About</v-btn>
  </v-toolbar>
</template>

<script>
import MenuIcon from "vue-material-design-icons/menu.vue";

export default {
	name: "HelloWorld",
	props: {
		msg: String
	},
	components: {
		MenuIcon
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
