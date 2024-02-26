import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import layout from "./Layout";

gsap.registerPlugin(ScrollTrigger);

class Testimonials {
	constructor() {
		this.init();
	}

	setup() {
		const mm = gsap.matchMedia();
		mm.add(
			{
				isDesk: "(min-width: 1024px)",
			},
			(context) => {
				const { isDesk } = context.conditions;
				if (isDesk) {
					this.setTrigger();
				}
			},
		);
	}

	setTrigger() {
		const stackTl = gsap.timeline({
			scrollTrigger: {
				trigger: this.DOM.section,
				start: `top -=20%`,
				end: `+=${layout.window.height * 5}`,
				pin: true,
				scrub: true,
			},
		});

		const cardsTl = this.buildCardsTl();
		stackTl.add(cardsTl, 0);
	}

	buildCardsTl = () => {
		const cardsTl = gsap.timeline();

		for (let i = 0; i < this.DOM.cards.length; i++) {
			const card = this.DOM.cards[i];

			const cardTl = gsap.timeline();
			cardTl
				.from(card, {
					y: layout.window.height * 0.5,
					duration: 1.4,
				})
				.to(
					card,
					{
						y: () => {
							return i * 10;
						},
						scale: () => {
							return 1 - (this.DOM.cards.length - i) * 0.02;
						},
						duration: 0.8,
					},
					1.5,
				);
			cardsTl.add(cardTl, i === 0 ? 0 : "-=1.25");
		}

		return cardsTl;
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
		const section = container.querySelector(".js-testimonial-section");

		if (section) {
			this.DOM = {};
			this.DOM.section = section;
			this.DOM.cards = this.DOM.section.querySelectorAll(
				".js-testimonial-card",
			);

			this.setup();
		}
	}
}

export default Testimonials;
