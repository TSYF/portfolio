<template>
	<article id="about" class="hero">
		<div class="hero__text">
			<h1 class="hero__title" :aria-label="myName">
				<span
					v-for="i in myName"
					class="hero__char"
					aria-hidden="true"
					>{{ i }}</span
				>
			</h1>
			<p class="hero__paragraph" :aria-label="heroParagraph">
				<span
					v-for="i in heroParagraph"
					class="hero__char"
					aria-hidden="true"
				>
					{{ i }}
				</span>
			</p>
		</div>
	</article>
</template>

<script setup>
	import { ref } from "vue";

	const myName = ref("Tomas Yañez");

	const heroParagraph = ref(
		"Soy un individuo muy curioso y trabajador, que siempre se esfuerza por ser mejor y ayudar a los demás. Aprendo rápido y me encanta transmitir mis conocimientos a mis compañeros. Me apasiona dar lo mejor de mí en todo lo que hago."
	);
</script>

<style lang="scss" scoped>
	/**
	*!IDEA: Nombre con font-weight cambiante en hover con transition, y ::selection con otro color
	**/

	.hero {
		height: 100vh;
		color: azure;
		display: grid;
		place-items: center;
		text-align: center;

		&__text {
			width: 50%;
			display: flex;
			flex-direction: column;
			gap: 2rem;
			height: 12%;
			line-height: 1.8;
		}

		&__title {
			font-size: 3rem;
		}

		&__paragraph {
			font-size: 1.3rem;
		}

		&__char {
			&:hover {
				text-shadow: 0 0.015em blueviolet, 0 -0.015em blueviolet,
					0.01em 0 blueviolet, -0.01em 0 blueviolet;
				&::shadow {
					font-size: 1.4em;
				}
				color: blueviolet;
				// font-size: 1.4em;
			}
			&::selection {
				font-weight: 1000;
				background-color: azure;
				color: blueviolet;
			}
			// transition: font-size 0.5s ease;
			transition: color 1s ease;
			transition: text-shadow 0.5s ease;
		}
	}
</style>
