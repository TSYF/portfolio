<template>
	<NavbarVue />
	<SectionsVue />
</template>

<script setup>
	import NavbarVue from "@components/Navbar.vue";
	import SectionsVue from "@components/Sections.vue";
</script>

<style lang="scss">
	/**
	*TODO: Realizar animación de scroll con las waves; considerar ingresar contenido a la página mediante scrolling
	**/
	@import "reset.css";
	* {
		box-sizing: border-box;
		scroll-behavior: smooth;
	}
	body {
		background-image: url("../src/assets/layered-waves-haikei.svg");
		background-size: cover;
	}
</style>
