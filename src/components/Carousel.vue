<template>
	<div id="slider">
		<h2>Mis Proyectos</h2>
		<figure>
			<img src="https://via.placeholder.com/400/100" alt="Placeholder" />
			<img src="https://via.placeholder.com/400/200" alt="Placeholder" />
			<img src="https://via.placeholder.com/400/300" alt="Placeholder" />
			<img src="https://via.placeholder.com/400/400" alt="Placeholder" />
			<img src="https://via.placeholder.com/400/500" alt="Placeholder" />
		</figure>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	h2 {
		color: azure;
		text-align: center;
		font-size: 2em;
		position: relative;
		top: 7%;
		z-index: 1;
	}

	#slider {
		overflow: hidden;

		figure {
			position: relative;
			width: 500%;
			margin: 0;
			left: 0;
			animation: 20s slider infinite;

			img {
				width: 20%;
				float: left;
			}
		}
	}

	@keyframes slider {
		from {
			left: 0;
		}

		20% {
			left: 0;
		}

		25% {
			left: -100%;
		}

		45% {
			left: -100%;
		}

		50% {
			left: -200%;
		}

		70% {
			left: -200%;
		}

		75% {
			left: -300%;
		}

		95% {
			left: -300%;
		}

		100% {
			left: -400%;
		}
	}
</style>
