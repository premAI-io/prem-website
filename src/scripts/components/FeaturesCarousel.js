// import { gsap } from "gsap";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import layout from "./Layout";

import scrollTo from "../helpers/scrollTo";
import { ease, tlProp } from "../helpers/animation";

const NOT_ACTIVE_SLIDE_H = 66;
const SLIDER_TIMEOUT = 5000;

class FeaturesCarousel {
	constructor() {
		this.init();
	}

	setup() {
		// Keeps track of the current layout mode - changes on resize
		this.layoutMode = layout.device < 1 ? "mobile" : "desktop";

		// Multiplier to calculate the height of the active slide (desktop)
		this.hRatio = layout.device < 1 ? 1 : 0.72331;

		this.instance = EmblaCarousel(this.DOM.fakeCarousel, { loop: true }, [
			Autoplay({ delay: SLIDER_TIMEOUT, playOnInit: false }),
		]);

		// Mobile slides setup
		if (layout.device < 1) {
			gsap.set(this.DOM.slides, {
				opacity: 0,
				xPercent: 0,
				rotate: 5,
			});
			gsap.set(this.DOM.slidesTexts, {
				height: "auto",
				opacity: 1,
			});
		}

		// Let's show the first slide
		this.inSlide(this.DOM.slides[this.activeIndex], true);
		this.DOM.slides[this.activeIndex].classList.add("is-active");

		// Events
		this.instance.on("select", this.onSlideChange);
		for (let i = 0; i < this.DOM.ctas.length; i++) {
			this.DOM.ctas[i].addEventListener("click", this.onSlideCtaClick);
		}

		this.progressTl = gsap
			.timeline({
				paused: true,
			})
			.to(this.DOM.progressbar, {
				scaleX: 1,
				duration: SLIDER_TIMEOUT / 1000,
				ease: "linear",
			});
	}

	onVisibilityChange = () => {
		const autoplay = this.instance?.plugins()?.autoplay;

		if (document.visibilityState === "visible") {
			this.progressTl.restart();
			this.progressTl.play();
			autoplay.reset();
			autoplay.play();
		} else {
			this.progressTl.pause();
			autoplay.stop();
		}
	};

	onSlideCtaClick = (e) => {
		const target = e.currentTarget;
		const parentSlide = target.closest(".js-features-carousel-item");

		e.preventDefault();

		if (parentSlide.classList.contains("is-active")) {
			// scrollTo could be temporary
			const targetId = target.getAttribute("href");
			const scrollTarget = document.querySelector(`${targetId}`);

			if (scrollTarget) {
				scrollTo(scrollTarget, 150);
			}
		} else {
			this.instance.scrollTo(parseInt(parentSlide.dataset.index, 10));
		}
	};

	onSlideChange = () => {
		const autoplay = this.instance?.plugins()?.autoplay;

		const prevIndex = this.instance.previousScrollSnap();
		this.activeIndex = this.instance.selectedScrollSnap();

		const prevElement = this.DOM.slides[prevIndex];
		const activeElement = this.DOM.slides[this.activeIndex];

		const slideChangeTl = gsap.timeline({
			onStart: () => {
				this.DOM.wrap.classList.add("is-animate");

				autoplay.stop();
				this.progressTl.pause();
			},
			onComplete: () => {
				autoplay.play();
				this.progressTl.restart();

				this.DOM.wrap.classList.remove("is-animate");
			},
		});

		slideChangeTl
			.add(this.outSlide(prevElement))
			.add(this.inSlide(activeElement), "<");
	};

	outSlide = (slide) => {
		const slideText = slide.querySelector(".js-features-carousel-item-text");
		const slideIll = slide.querySelector(".js-features-carousel-ill");

		const tl = gsap.timeline({
			onStart: () => {
				slide.classList.remove("is-active");
			},
		});

		if (layout.device < 1) {
			tl.to(slide, {
				opacity: 0,
				xPercent: -200,
				rotate: -5,
				duration: 0.8,
				ease,
				onComplete: () => {
					gsap.set(slide, { xPercent: 0, rotate: 5 });
				},
			}).to(
				slideIll,
				{
					opacity: 0,
					duration: 0.8,
					ease,
				},
				"-=0.67",
			);
		} else {
			tl.to(slide, {
				height: NOT_ACTIVE_SLIDE_H,
				duration: 0.8,
				ease,
			})
				.to(
					slideIll,
					{
						opacity: 0,
						duration: 0.4,
						ease,
					},
					"-=0.8",
				)
				.to(
					slideText,
					{
						opacity: 0,
						height: 0,
						duration: 0.8,
						ease,
					},
					"-=0.8",
				);
		}

		return tl;
	};

	inSlide = (slide, immediate = false) => {
		const slideText = slide.querySelector(".js-features-carousel-item-text");
		const slideIll = slide.querySelector(".js-features-carousel-ill");

		const tl = gsap.timeline({
			onStart: () => {
				slide.classList.add("is-active");
			},
		});

		if (layout.device < 1) {
			tl.to(slide, {
				opacity: 1,
				xPercent: -100,
				rotate: 0,
				duration: tlProp(0.8, immediate),
				ease,
			}).to(
				slideIll,
				{
					opacity: 1,
					duration: tlProp(0.8, immediate),
					ease,
				},
				tlProp("-=0.67", immediate),
			);
		} else {
			tl.to(slide, {
				height: () => slide.offsetWidth * this.hRatio,
				duration: tlProp(0.8, immediate),
				ease,
			})
				.to(
					slideText,
					{
						opacity: 1,
						height: "auto",
						duration: tlProp(0.8, immediate),
						ease,
					},
					tlProp("-=0.67", immediate),
				)
				.to(
					slideIll,
					{
						opacity: 1,
						duration: tlProp(0.8, immediate),
						ease,
					},
					tlProp("-=0.67", immediate),
				);
		}

		return tl;
	};

	start = () => {
		this.progressTl.play();
		this.instance?.plugins()?.autoplay?.play();

		document.addEventListener("visibilitychange", this.onVisibilityChange);
	};

	hide = () => {
		const hideTl = gsap.timeline();

		if (layout.device < 1) {
			const activeSlide = this.DOM.slides[this.activeIndex];
			const activeSlideContents = activeSlide.querySelectorAll(
				".js-features-carousel-content",
			);

			hideTl
				.set(activeSlide, {
					transformOrigin: "50% 100%",
					scale: 0,
					y: 30,
				})
				.set(activeSlideContents, {
					opacity: 0,
				})
				.set(this.DOM.progress, {
					opacity: 0,
					y: 20,
				});
		} else {
			for (let i = 0; i < this.DOM.slides.length; i++) {
				const slide = this.DOM.slides[i];
				const slideContents = slide.querySelectorAll(
					".js-features-carousel-content",
				);
				hideTl
					.set(slide, {
						transformOrigin: "50% 100%",
						// scale: 0,
						opacity: 0,
						y: 30,
					})
					.set(slideContents, {
						opacity: 0,
					})
					.set(this.DOM.progress, {
						opacity: 0,
						y: 20,
					});
			}
		}

		return hideTl;
	};

	reveal = () => {
		const revealTl = gsap.timeline();

		if (layout.device < 1) {
			const activeSlide = this.DOM.slides[this.activeIndex];
			const activeSlideContents = activeSlide.querySelectorAll(
				".js-features-carousel-content",
			);

			revealTl
				.to(activeSlide, {
					scale: 1,
					y: 0,
					duration: 0.8,
					ease,
				})
				.to(
					activeSlideContents,
					{
						opacity: 1,
						duration: 0.8,
						ease,
					},
					"-=0.3",
				)
				.to(
					this.DOM.progress,
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						ease,
					},
					"-=0.8",
				);
		} else {
			const slidesArray = gsap.utils.toArray(this.DOM.slides).reverse();

			for (let i = 0; i < slidesArray.length; i++) {
				const tl = gsap.timeline();
				const slide = slidesArray[i];
				const slideContents = slide.querySelectorAll(
					".js-features-carousel-content",
				);

				tl.to(slide, {
					// scale: 1,
					y: 0,
					opacity: 1,
					duration: 0.8,
					ease,
				})
					.set(
						slideContents,
						{
							opacity: 1,
							duration: 0.8,
							ease,
						},
						"-=0.3",
					)
					.to(
						this.DOM.progress,
						{
							opacity: 1,
							y: 0,
							duration: 0.8,
							ease,
						},
						"-=0.8",
					);

				revealTl.add(tl, i * 0.07);
			}
		}

		return revealTl;
	};

	destroy() {
		if (this.DOM) {
			const autoplay = this.instance?.plugins()?.autoplay;
			autoplay.stop();

			this.instance.off("select", this.onSlideChange);
			this.instance.destroy();

			for (let i = 0; i < this.DOM.ctas.length; i++) {
				this.DOM.ctas[i].removeEventListener("click", this.onSlideCtaClick);
			}

			document.removeEventListener("visibilitychange", this.onVisibilityChange);

			this.instance = undefined;
			this.DOM = undefined;
		}
	}

	resize() {
		if (this.DOM) {
			this.hRatio = layout.device < 1 ? 1 : 0.72331;

			if (layout.device < 1 && this.layoutMode !== "mobile") {
				// From desktop to mobile
				gsap.set(this.DOM.slides, {
					opacity: 0,
					xPercent: 0,
					rotate: 5,
					height: "auto",
				});
				gsap.set(this.DOM.slides[this.activeIndex], {
					opacity: 1,
					xPercent: -100,
					rotate: 0,
				});
				gsap.set(this.DOM.slidesTexts, {
					height: "auto",
					opacity: 1,
				});
			} else if (layout.device >= 1 && this.layoutMode !== "desktop") {
				// From mobile to desktop
				gsap.set(this.DOM.slides, {
					opacity: 1,
					xPercent: "none",
					rotate: 0,
					height: NOT_ACTIVE_SLIDE_H,
				});
				gsap.set(this.DOM.slidesTexts, {
					height: 0,
					opacity: 0,
				});
				gsap.set(this.DOM.slides[this.activeIndex], {
					height: (i, target) => target.offsetWidth * this.hRatio,
				});
				gsap.set(this.DOM.slidesTexts[this.activeIndex], {
					height: "auto",
				});
			} else if (layout.device >= 1 && this.layoutMode === "desktop") {
				// Desktop only resize
				gsap.set(this.DOM.slides, {
					height: (i) => {
						if (i === this.activeIndex) {
							return this.DOM.slides[i].offsetWidth * this.hRatio;
						}
						return NOT_ACTIVE_SLIDE_H;
					},
				});
			}

			// Restart autoplay only if we're not on mobile or if we're on mobile and the layout has changed
			// This is to avoid restarting the autoplay on mobile - resize events could fire multiple times
			if (
				layout.device >= 1 ||
				(layout.device < 1 && this.layoutMode !== "mobile")
			) {
				const autoplay = this.instance?.plugins()?.autoplay;
				this.progressTl.pause();
				autoplay.reset();
				autoplay.play();
				this.progressTl.restart();
				this.progressTl.play();
			}

			this.layoutMode = layout.device < 1 ? "mobile" : "desktop";
		}
	}

	reinit(container) {
		this.init(container);
	}

	init(container = document) {
		const wrap = container.querySelector(".js-features-carousel");

		if (wrap) {
			this.DOM = {};
			this.DOM.wrap = wrap;
			this.DOM.fakeCarousel = this.DOM.wrap.querySelector(
				".js-time-carousel-viewport",
			);
			this.DOM.slides = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-item",
			);
			this.DOM.slidesTexts = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-item-text",
			);
			this.DOM.ctas = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-cta",
			);
			this.DOM.progress = this.DOM.wrap.querySelector(
				".js-features-carousel-progress",
			);
			this.DOM.progressbar = this.DOM.wrap.querySelector(
				".js-features-carousel-progressbar",
			);

			this.instance = undefined;
			this.activeIndex = 0;

			this.setup();
		}
	}
}

export default FeaturesCarousel;
