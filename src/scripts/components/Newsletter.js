class Newsletter {
	constructor() {
		this.init();
	}

	setup() {
		this.DOM.form.addEventListener("submit", this.onSubmit);
	}

	onSubmit = (e) => {
		e.preventDefault();

		const formValues = {
			email: this.DOM.mailInput.value,
			emailType: "signup",
			labels: ["Landing"],
		};

		fetch("https://blog.premai.io/members/api/send-magic-link/", {
			method: "POST",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formValues),
		})
			.then((data) => {
				if (data.status === 201 && data.ok) {
					this.DOM.form.classList.add("is-success");
					this.DOM.form.classList.remove("is-error");

					this.DOM.error.textContent = "Email sent successfully";
					this.DOM.form.reset();
				} else if (data.status === 429) {
					this.DOM.form.classList.remove("is-success");
					this.DOM.form.classList.add("is-error");

					this.DOM.error.textContent =
						"Too many requests, please try again later";
				} else {
					this.DOM.form.classList.remove("is-success");
					this.DOM.form.classList.add("is-error");

					this.DOM.error.textContent = "Email not sent";
				}
			})
			.catch(() => {
				this.DOM.error.textContent =
					"An error occurred, please try again later";
			});
	};

	destroy() {
		if (this.DOM) {
			this.DOM.form.removeEventListener("submit", this.onSubmit);
			this.DOM = undefined;
		}
	}

	reinit(container) {
		this.init(container);
	}

	init(container = document) {
		const form = container.querySelector(".js-newsletter-form");

		if (form) {
			this.DOM = {};
			this.DOM.form = form;
			this.DOM.mailInput = this.DOM.form.querySelector(".js-newsletter-mail");
			this.DOM.error = this.DOM.form.querySelector(".js-newsletter-error");

			this.setup();
		}
	}
}

export default Newsletter;
