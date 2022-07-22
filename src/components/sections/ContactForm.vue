<template>
	<section class="section">
		<h2 class="section__title">¡Contáctame!</h2>
		<form
			id="contact-form"
			class="form"
			@submit.prevent="sendEmail('#contact-form', email)"
		>
			<!-- <label class="form__label" for="from_name"> Nombre </label> -->
			<input
				placeholder="Nombre"
				class="form__input"
				v-model="email.name"
				id="name"
				name="from_name"
				type="text"
			/>
			<!-- <label class="form__label" for="message"> Mensaje </label> -->
			<textarea
				placeholder="Mensaje"
				class="form__input"
				v-model="email.message"
				name="message"
				id="message"
			></textarea>
			<button class="form__button">Enviar</button>
		</form>
	</section>
</template>

<script setup>
	import { reactive } from "vue";
	import { Email } from "@assets/util/classes.js";
	import { mainStore } from "@/stores/mainStore.js";

	const email = reactive(new Email());

	const useMainStore = mainStore();

	const sendEmail = (form, email) => {
		if (email.name === "" || email.message === "")
			return console.error("There are empty fields");
		useMainStore.sendEmail(form);
		email.name = "";
		email.message = "";
	};
</script>

<style lang="scss" scoped>
	.section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		&__title {
			font-weight: bolder;
			font-size: 2.5rem;
			text-align: center;
			color: azure;
		}
	}
	.form {
		display: grid;
		grid-template: 3em 30em 3em / 2rem auto 2rem;
		gap: 1rem;
		box-sizing: content-box;
		width: 100%;

		&__input {
			border-radius: 0.4rem;
			grid-column-start: 2;
		}

		&__button {
			@extend .form__input;
			color: azure;
			background-color: #1c1f26;
			border: 0.15rem #31363f solid;
			box-shadow: 0.1rem 0.1rem 0.25rem black;
			font-weight: 500;
			font-size: 1.4rem;

			&:hover {
				border-color: #808080;
				box-shadow: 0.2rem 0.2rem 0.5rem black;
			}

			transition-duration: 0.4s;
		}
		// textarea {
		// 	height: 30em;
		// }
	}
</style>
