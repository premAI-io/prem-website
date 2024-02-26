import { gsap } from "gsap";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import scrollTo from "../helpers/scrollTo";
import { ease, tlProp } from "../helpers/animation";

const H_RATIO = 0.72331;
const SLIDER_TIMEOUT = 5000;

class FeaturesCarousel {
	constructor() {
		this.init();
	}

	setup() {
		this.instance = EmblaCarousel(this.DOM.fakeCarousel, { loop: true }, [
			Autoplay({ delay: SLIDER_TIMEOUT, playOnInit: false }),
		]);

		this.inSlide(this.DOM.slides[this.activeIndex], true);
		this.DOM.slides[this.activeIndex].classList.add("is-active");
		this.instance.on("select", this.onSlideChange);

		for (let i = 0; i < this.DOM.ctas.length; i++) {
			this.DOM.ctas[i].addEventListener("click", this.onSlideCtaClick);
		}

		this.start();
	}

	onSlideCtaClick = (e) => {
		const target = e.currentTarget;
		const parentSlide = target.closest(".js-features-carousel-item");

		e.preventDefault();

		if (parentSlide.classList.contains("is-active")) {
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
				autoplay.stop();
				this.progressTl.pause();
			},
			onComplete: () => {
				autoplay.play();
				this.progressTl.restart();
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

	start = () => {
		this.instance?.plugins()?.autoplay?.play();
		this.progressTl = gsap
			.timeline({
				paused: true,
			})
			.to(this.DOM.progress, {
				scaleX: 1,
				duration: SLIDER_TIMEOUT / 1000,
				ease: "linear",
			});

		this.progressTl.play();
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

			this.instance = undefined;
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
			this.DOM.ctas = this.DOM.wrap.querySelectorAll(
				".js-features-carousel-cta",
			);
			this.DOM.progress = this.DOM.wrap.querySelector(
				".js-features-carousel-progress",
			);

			this.instance = undefined;
			this.activeIndex = 0;

			this.setup();
		}
	}
}

export default FeaturesCarousel;
