<template>
	<main class="main">
		<AboutSection />
		<HobbiesSection1 />
		<HobbiesSection2 />
		<ContactForm />
	</main>
</template>

<script setup>
	import AboutSection from "@components/sections/AboutSection.vue";
	import HobbiesSection1 from "@components/sections/HobbiesSection1.vue";
	import HobbiesSection2 from "@components/sections/HobbiesSection2.vue";
	import ContactForm from "@components/sections/ContactForm.vue";
</script>

<style lang="scss" scoped>
	.main {
		background-image: url("../src/assets/layered-waves-haikei.svg");
		background-size: cover;
		height: 500vh;
	}
</style>
