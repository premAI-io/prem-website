import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import layout from "./Layout";

import { ease } from "../helpers/animation";

gsap.registerPlugin(ScrollTrigger);

class Testimonials {
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
				const { isDesk, isMobile } = context.conditions;
				if (isDesk) {
					this.setTrigger();
				} else if (isMobile) {
					this.setMobileCarousel();
				}
			},
		);

		this.DOM.carouselPrev.addEventListener("click", this.onCarouselPrev);
		this.DOM.carouselNext.addEventListener("click", this.onCarouselNext);
	}

	setMobileCarousel() {
		gsap.set(this.DOM.cards, {
			opacity: 0,
			xPercent: 100,
			// rotate: 5,
		});
		gsap.set(this.DOM.cards[this.activeIndex], {
			opacity: 1,
			xPercent: 0,
			// rotate: 0,
		});
	}

	onCarouselPrev = () => {
		if (!this.isAnimating) {
			this.isAnimating = true;

			const prevIndex = this.activeIndex;
			this.activeIndex =
				this.activeIndex === 0
					? this.DOM.cards.length - 1
					: this.activeIndex - 1;

			const prevSlide = this.DOM.cards[prevIndex];
			const nextSlide = this.DOM.cards[this.activeIndex];

			const slideChangeTl = gsap.timeline({
				onComplete: () => {
					this.isAnimating = false;
				},
			});

			slideChangeTl
				.add(this.exitSlide(prevSlide))
				.add(this.enterSlide(nextSlide), 0);
		}
	};

	onCarouselNext = () => {
		if (!this.isAnimating) {
			this.isAnimating = true;

			const prevIndex = this.activeIndex;
			this.activeIndex =
				this.activeIndex === this.DOM.cards.length - 1
					? 0
					: this.activeIndex + 1;

			const prevSlide = this.DOM.cards[prevIndex];
			const nextSlide = this.DOM.cards[this.activeIndex];

			const slideChangeTl = gsap.timeline({
				onComplete: () => {
					this.isAnimating = false;
				},
			});

			slideChangeTl
				.add(this.exitSlide(prevSlide))
				.add(this.enterSlide(nextSlide), 0);
		}
	};

	setTrigger() {
		gsap.set(this.DOM.cards, {
			opacity: 1,
			xPercent: 0,
			rotate: 0,
		});

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

	exitSlide = (slide) => {
		const tl = gsap.timeline();

		tl.to(slide, {
			opacity: 0,
			// rotate: -5,
			xPercent: -100,
			duration: 0.8,
			onComplete: () => {
				gsap.set(slide, {
					opacity: 0,
					// rotate: 5,
					xPercent: 100,
				});
			},
			ease,
		});

		return tl;
	};

	enterSlide = (slide) => {
		const tl = gsap.timeline();

		tl.to(slide, {
			opacity: 1,
			// rotate: 0,
			xPercent: 0,
			duration: 0.8,
			ease,
		});

		return tl;
	};

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
			this.DOM.carouselPrev = this.DOM.section.querySelector(
				".js-testimonial-carousel-prev",
			);
			this.DOM.carouselNext = this.DOM.section.querySelector(
				".js-testimonial-carousel-next",
			);

			this.isAnimating = false;
			this.activeIndex = 0;

			this.setup();
		}
	}
}

export default Testimonials;
