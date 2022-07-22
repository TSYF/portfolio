<template>
	<article>
		<div class="cards">
			<Card :image="'favicon.ico'" title="Vue Course Site" />
			<Card :image="'favicon.ico'" title="Vue Course Site" />
			<Card :image="'favicon.ico'" title="Vue Course Site" />
			<Card :image="'favicon.ico'" title="Vue Course Site" />
			<Card :image="'favicon.ico'" title="Something Different" />
			<Card :image="'favicon.ico'" title="Vue Projects">
				La mea vola loco locowoom
			</Card>
		</div>
	</article>
</template>

<script setup>
	import { ref, reactive } from "vue";

	import Card from "../Card.vue";
</script>

<style lang="scss" scoped>
	.text--white {
		color: azure;
		max-width: 100vw;
	}

	.cards {
		padding: 4em;
		height: 100%;
		display: grid;
		box-sizing: content-box;
		grid-template: 32% 32% 32% / 47% 47%;
		gap: 2%;
	}
</style>
