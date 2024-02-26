import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class ComputeBlock {
	constructor() {
		this.init();
	}

	setup() {
		this.visibilityTl = gsap.timeline({
			scrollTrigger: {
				trigger: this.DOM.section,
				start: "top bottom",
				end: "bottom top",
				onEnter: () => {
					this.DOM.section.classList.add("is-active");
				},
				onLeave: () => {
					this.DOM.section.classList.remove("is-active");
				},
				onEnterBack: () => {
					this.DOM.section.classList.add("is-active");
				},
				onLeaveBack: () => {
					this.DOM.section.classList.remove("is-active");
				},
			},
		});
	}

	destroy() {
		if (this.DOM) {
			this.visibilityTl?.kill();

			this.visibilityTl = undefined;
			this.DOM = undefined;
		}
	}

	reinit(container) {
		this.init(container);
	}

	init(container = document) {
		const section = container.querySelector(".js-compute-section");

		if (section) {
			this.DOM = {};
			this.DOM.section = section;

			this.setup();
		}
	}
}

export default ComputeBlock;
