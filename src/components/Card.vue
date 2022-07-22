<template>
	<div class="card">
		<div class="card__header">
			<img class="card__img" :src="image" :alt="title" />
		</div>
		<div class="card__body">
			<h4 class="card__title">{{ title }}</h4>
			<p class="card__text">
				<slot>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Iste itaque error ut veritatis voluptates quos quaerat
					soluta, labore, corporis voluptatum, cumque laborum quod.
					Repellendus, distinctio!
				</slot>
			</p>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		image: String,
		title: String,
	});
</script>

<style lang="scss" scoped>
	/**
	* TODO: Background image radial gradient :hover
	*/
	.card {
		box-sizing: border-box;
		padding: 0 2em;
		background-color: #1c1f26;
		border: 0.15rem #31363f solid;
		display: grid;
		grid-template-columns: 30% calc(70% - 1rem);
		gap: 1rem;
		align-items: center;
		color: azure;
		line-height: 1.5;
		font-size: 1.1rem;

		border-radius: 0.7em;

		box-shadow: 0.1rem 0.1rem 0.25rem black;

		&__text {
			cursor: default;
		}

		&__title {
			@extend .card__text;
			font-size: 1.5rem;
		}

		& > * {
			padding: 0;
		}

		&:hover {
			border-color: #808080;
			box-shadow: 0.2rem 0.2rem 0.5rem black;
		}

		transition-duration: 0.4s;
	}
</style>
