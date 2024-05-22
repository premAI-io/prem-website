// import { gsap } from "gsap";

class Team {
	constructor() {
		this.init();
	}

	setup() {
		const mm = gsap.matchMedia();
		mm.add(
			{
				isMobile: "(max-width: 1023px)",
				isDesk: "(min-width: 1024px)",
			},
			(context) => {
				const { isMobile, isDesk } = context.conditions;

				if (isMobile) {
					this.setMobileTrigger();
				}

				if (isDesk) {
					this.setTrigger();
				}
			},
		);
	}

	setTrigger() {
		const mainScrollTl = gsap.timeline({
			scrollTrigger: {
				trigger: this.DOM.section,
				start: "top bottom",
				end: "bottom top",
				scrub: 1.5,
				ease: "none",
			},
		});

		mainScrollTl.fromTo(
			this.DOM.cards,
			{
				y: (i, target) => {
					return parseInt(target.dataset.index, 10) * 35;
				},
			},
			{
				y: 0,
				stagger: {
					each: 0.024,
				},
			},
		);
	}

	setMobileTrigger() {
		const scrollTl = gsap.timeline({
			scrollTrigger: {
				trigger: this.DOM.section,
				start: "top top+=75%",
				end: "bottom top",
			},
		});
		scrollTl.from(this.DOM.cards, {
			opacity: 0,
			duration: 1,
			stagger: {
				each: 0.01,
				from: "random",
			},
			ease: "none",
		});
	}

	destroy() {
		if (this.DOM) {
			this.DOM = undefined;
		}
	}

	reinit(container) {
		this.init(container);
	}

	init(container = document) {
		const section = container.querySelector(".js-team-section");

		if (section) {
			this.DOM = {};
			this.DOM.section = section;
			this.DOM.cards = this.DOM.section.querySelectorAll(".js-team-card");

			this.setup();
		}
	}
}

export default Team;
