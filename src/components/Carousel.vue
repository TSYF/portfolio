<template>
	<section aria-label="Mi Experiencia">
		<div class="carousel">
			<button class="carousel__btn prev" @click="prev(boolArr, arrDigit)">
				&#10096;
			</button>
			<button class="carousel__btn next" @click="next(boolArr, arrDigit)">
				&#10097;
			</button>
			<ul>
				<li class="carousel__slide" :data-active="boolArr[0]">
					<img
						class="carousel__card"
						src="https://via.placeholder.com/500"
						alt=""
					/>
				</li>
				<li class="carousel__slide" :data-active="boolArr[1]">
					<img
						class="carousel__card"
						src="https://via.placeholder.com/500/100"
						alt=""
					/>
				</li>
				<li class="carousel__slide" :data-active="boolArr[2]">
					<img
						class="carousel__card"
						src="https://via.placeholder.com/500/020"
						alt=""
					/>
				</li>
				<li class="carousel__slide" :data-active="boolArr[3]">
					<img
						class="carousel__card"
						src="https://via.placeholder.com/500/003"
						alt=""
					/>
				</li>
				<li class="carousel__slide" :data-active="boolArr[4]">
					<img
						class="carousel__card"
						src="https://via.placeholder.com/500/440"
						alt=""
					/>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
	import { ref, reactive } from "vue";

	const boolArr = reactive([true, null, null, null, null]);
	const arrDigit = ref(0);

	const next = (arr, digit) => {
		arr[digit] = null;
		if (arrDigit.value < 4) {
			arr[digit + 1] = true;
			arrDigit.value = digit + 1;
		} else {
			arrDigit.value = 0;
			arr[0] = true;
		}

		// const el = document.querySelector("[data-active]");
		// el.style.opacity = 1;
	};

	const prev = (arr, digit) => {
		arr[digit] = null;
		if (arrDigit.value > 0) {
			arr[digit - 1] = true;
			arrDigit.value = digit - 1;
		} else {
			arrDigit.value = 4;
			arr[4] = true;
		}
	};
</script>

<style lang="scss" scoped>
	.carousel {
		height: 100vh;
		width: 100vw;
		position: relative;

		&__slide {
			position: absolute;
			inset: 0;
			opacity: 0;
			transition: opacity 0.2s ease;

			&[data-active] {
				opacity: 1;
			}
		}

		&__card {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&__btn {
			position: absolute;
			background: none;
			border: none;
			font-size: 4em;
			color: azure;
			top: 50%;
			transition: translateY(-50%);
			opacity: 0.5;
			border-radius: 0.25rem;
			cursor: pointer;
			padding: 0 0.5rem;
			z-index: 1;

			&:hover,
			&:focus {
				opacity: 0.7;
				background-color: rgba(0, 0, 0, 0.1);
			}
			transition: opacity 0.2s ease;
			transition: background-color 0.2s ease;

			&:focus {
				border: 1px solid black;
			}

			&.prev {
				left: 1rem;
			}
			&.next {
				right: 1rem;
			}
		}

		& > ul {
			margin: 0;
			padding: 0;
			list-style: none;
		}
	}
</style>
