import { gsap } from "gsap";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import { ease, tlProp } from "../helpers/animation";

const H_RATIO = 0.72331;
const SLIDER_TIMEOUT = 5000;

class FeaturesCarousel {
	constructor() {
		this.init();
	}

	setup() {
		this.instance = EmblaCarousel(this.DOM.fakeCarousel, { loop: true }, [
			Autoplay({ delay: SLIDER_TIMEOUT }),
		]);

		this.inSlide(this.DOM.slides[this.activeIndex], true);
		this.DOM.slides[this.activeIndex].classList.add("is-active");
		this.instance.on("select", this.onSlideChange);
	}

	onSlideChange = () => {
		const autoplay = this.instance?.plugins()?.autoplay;

		const prevIndex = this.instance.previousScrollSnap();
		this.activeIndex = this.instance.selectedScrollSnap();

		const prevElement = this.DOM.slides[prevIndex];
		const activeElement = this.DOM.slides[this.activeIndex];

		const slideChangeTl = gsap.timeline({
			onStart: () => {
				autoplay.stop();
			},
			onComplete: () => {
				autoplay.play();
			},
		});

		slideChangeTl
			.add(this.outSlide(prevElement))
			.add(this.inSlide(activeElement), "<");
	};

	outSlide = (slide) => {
		const slideText = slide.querySelector(".js-features-carousel-item-text");

		const tl = gsap.timeline({
			onStart: () => {
				slide.classList.remove("is-active");
			},
		});

		tl.to(slide, {
			height: 66,
			duration: 0.8,
			ease,
		}).to(
			slideText,
			{
				opacity: 0,
				height: 0,
				duration: 0.8,
				ease,
			},
			"-=0.8",
		);

		return tl;
	};

	inSlide = (slide, immediate = false) => {
		const slideText = slide.querySelector(".js-features-carousel-item-text");

		const tl = gsap.timeline({
			onStart: () => {
				slide.classList.add("is-active");
			},
		});

		tl.to(slide, {
			height: slide.offsetWidth * H_RATIO,
			duration: tlProp(0.8, immediate),
			ease,
		}).to(
			slideText,
			{
				opacity: 1,
				height: "auto",
				duration: tlProp(0.8, immediate),
				ease,
			},
			tlProp("-=0.67", immediate),
		);

		return tl;
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

			this.instance = undefined;
			this.activeIndex = 0;

			this.setup();
		}
	}
}

export default FeaturesCarousel;
