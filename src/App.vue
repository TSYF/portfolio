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
	*!IDEA: Realizar animación de scroll con las waves; considerar ingresar contenido a la página mediante scrolling
	**/
	@import "reset.css";
	* {
		box-sizing: border-box;
		scroll-behavior: smooth;
	}
	body {
		height: 500vh;
	}
</style>
