import { scrollTriggerTransitions } from "../transitions/scroll";

class ScrollAnimator {
	constructor() {
		this.init();
	}

	start = () => {
		if (this.DOM && this.DOM.scrollTriggerElements.length) {
			scrollTriggerTransitions.activate(this.DOM.scrollTriggerElements);
		}
	};

	hide = () => {
		if (this.DOM && this.DOM.scrollTriggerElements.length) {
			scrollTriggerTransitions.hideAll(this.DOM.scrollTriggerElements);
		}
	};

	reinit(container) {
		this.init(container);
	}

	init(container = document) {
		const scrollTriggerElements = container.querySelectorAll(
			"[data-scroll-trigger]",
		);

		if (scrollTriggerElements.length) {
			this.DOM = {};
			this.DOM.scrollTriggerElements = scrollTriggerElements;
		}
	}
}

export default ScrollAnimator;
