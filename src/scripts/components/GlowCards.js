class GlowCards {
	constructor() {
		this.init();
	}

	setup() {
		for (let i = 0; i < this.DOM.sections.length; i++) {
			this.DOM.sections[i].addEventListener("mousemove", this.onMouseMove);
		}
	}

	onMouseMove = (e) => {
		const target = e.currentTarget;
		const cards = target.querySelectorAll(".js-glow-card");

		for (let i = 0; i < cards.length; i++) {
			const rect = cards[i].getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;

			cards[i].style.setProperty("--mouse-x", `${x}px`);
			cards[i].style.setProperty("--mouse-y", `${y}px`);
		}
	};

	destroy() {
		if (this.DOM) {
			this.DOM = undefined;
		}
	}

	reinit(container) {
		this.init(container);
	}

	init(container = document) {
		const sections = container.querySelectorAll(".js-glow-cards");

		if (sections.length) {
			this.DOM = {};
			this.DOM.sections = sections;

			this.setup();
		}
	}
}

export default GlowCards;
