<template>
	<nav class="navbar">
		<h3 class="navbar__brand">NavBrand</h3>
		<ul class="navbar__navigation">
			<li class="navbar__item">
				<a class="navbar__link" href="#about">Sobre Mi</a>
			</li>
			<li class="navbar__item">
				<a class="navbar__link" href="#skills">Habilidades</a>
			</li>
			<li class="navbar__item">
				<a class="navbar__link" href="#hobbies">Hobbies</a>
			</li>
			<li class="navbar__item">
				<a class="navbar__link" href="#contact">Contacto</a>
			</li>
		</ul>
	</nav>
</template>

<script setup></script>

<style lang="scss" scoped>
	h3 {
		font-size: 1.2rem;
		font-weight: bold;
	}

	a {
		text-decoration: none;
	}
	.navbar {
		background-color: #000;
		z-index: 5;

		// min-width: 97%;
		width: 100%;
		max-width: 100vw;
		padding: 2em;
		margin: 0;

		position: fixed;
		top: 0;

		display: flex;
		/**
		*! space-between causa overflow
		*TODO: Solucionar overflow
		** SOLUCIONADO
		*? Solución: box-sizing: border-box;
		*/
		justify-content: space-around;

		* {
			color: azure;
		}

		&__brand {
			cursor: pointer;
			width: fit-content;
		}

		&__navigation {
			width: 22%;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
