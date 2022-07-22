import { sendForm } from "@emailjs/browser";
import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
	state() {
		return {
			sent: false,
		};
	},
	actions: {
		async sendEmail(form) {
			try {
				sendForm(
					"service_3wvu64g",
					"template_ujseowd",
					form,
					"QJSJLxHdNmFNq8utF"
				);
			} catch (err) {
				console.error(err);
			}
		},
	},
});
