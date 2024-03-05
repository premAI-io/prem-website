import LazyLoad from "vanilla-lazyload";

class LazyLoader {
	constructor() {
		this.init();
	}

	reinit() {
		this.init();
	}

	init() {
		this.instance = new LazyLoad({
			class_loading: "is-lazy-loading",
			class_loaded: "is-lazy-loaded",
			class_error: "is-lazy-error",
			elements_selector: ".js-lazy-el",
			data_bg: "lazy-bg",
			data_poster: "lazy-poster",
			data_src: "lazy-src",
			callback_error: (element) => {
				console.log("element_error", element);
				element.classList.add("is-lazy-error");
			},
		});
	}

	destroy() {
		if (this.instance) {
			this.instance.destroy();
			this.instance = null;
		}
	}
}

export default LazyLoader;
