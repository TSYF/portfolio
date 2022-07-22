export class Email {
	constructor() {
		let name = "";
		let message = "";

		this.getName = () => name;
		this.getMessage = () => message;

		this.setName = (val) => (name = val);
		this.setMessage = (val) => (message = val);
	}

	set name(val) {
		this.setName(val);
	}

	set message(val) {
		this.setMessage(val);
	}

	get name() {
		return this.getName();
	}
	get message() {
		return this.getMessage();
	}
}
