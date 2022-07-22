<template>
	<main class="main">
		<AboutSection />
		<ProjectsSection id="skills" />
		<HobbiesSection1 id="" />
		<HobbiesSection2 id="" />
		<ContactForm id="" />
	</main>
</template>

<script setup>
	import AboutSection from "@components/sections/AboutSection.vue";
	import HobbiesSection1 from "@components/sections/HobbiesSection1.vue";
	import HobbiesSection2 from "@components/sections/HobbiesSection2.vue";
	import ContactForm from "@components/sections/ContactForm.vue";
	import ProjectsSection from "@components/sections/ProjectsSection.vue";
</script>

<style lang="scss" scoped>
	.main {
		height: 500vh;
		& > * {
			height: 100vh;
		}
	}
</style>
