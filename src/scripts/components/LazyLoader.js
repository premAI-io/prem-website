import lozad from "lozad";

class LazyLoader {
	constructor() {
		this.init();
	}

	initObserver() {
		this.lazyObserver = lozad(this.DOM.lazyEls, {
			rootMargin: "30% 0px 30% 0px",
			threshold: 0,
		});

		this.lazyObserver.observe();
	}

	reinit(container) {
		this.init(container);
	}

	init(container = document) {
		const lazyEls = container.querySelectorAll(".js-lazy-el");

		if (lazyEls) {
			this.DOM = {};
			this.DOM.lazyEls = lazyEls;

			this.initObserver();
		}
	}
}

export default LazyLoader;
