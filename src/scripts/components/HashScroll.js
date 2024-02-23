import scrollTo from "../helpers/scrollTo";

export default class HashScroll {
	constructor() {
		this.init();
	}

	scrollLinkTo = (e) => {
		e.preventDefault();

		const currentTarget = e.currentTarget;
		const targetId = currentTarget.getAttribute("href");
		const target = document.querySelector(`${targetId}`);

		if (target) {
			scrollTo(target, 150);
		} else {
			console.warn("Target non esiste per l'id: ", targetId);
		}
	};

	setup() {
		for (let i = 0; i < this.DOM.hashElements.length; i++) {
			this.DOM.hashElements[i].addEventListener("click", this.scrollLinkTo);
		}
	}

	reinit(container) {
		this.init(container);
	}

	destroy() {
		if (this.DOM) {
			for (let i = 0; i < this.DOM.hashElements.length; i++) {
				this.DOM.hashElements[i].removeEventListener(
					"click",
					this.scrollLinkTo,
				);
			}
		}
	}

	init(container = document) {
		const hashElements = container.querySelectorAll(".js-hash-scroll");

		if (hashElements.length > 0) {
			this.DOM = {};
			this.DOM.hashElements = hashElements;

			this.setup();
		}
	}
}
