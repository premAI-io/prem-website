// import { gsap } from "gsap";

import router from "./Router";
import { ease, tlProp } from "../helpers/animation";

class Nav {
	constructor() {
		this.init();
	}

	setup() {
		this.addEvents();
		this.hideNav(true);
		this.setActiveItem();
		this.setupScroll();
	}

	setActiveItem(viewName = router.activeView) {
		const activeLink = this.DOM.nav.querySelector(".js-nav-link.is-active");
		if (activeLink) {
			activeLink.classList.remove("is-active");
		}

		const newActiveLink = this.DOM.nav.querySelector(
			`.js-nav-link[data-route="${viewName}"]`,
		);
		if (newActiveLink) {
			newActiveLink.classList.add("is-active");
		}
	}

	addEvents() {
		this.DOM.navToggle.addEventListener("click", this.toggleMenu);
	}

	removeEvents() {
		this.DOM.navToggle.removeEventListener("click", this.toggleMenu);
		window.removeEventListener("scroll", this.onScroll, false);
	}

	setupScroll() {
		this.lastScrollTop = window.scrollY || document.documentElement.scrollTop;
		window.addEventListener("scroll", this.onScroll, false);
	}

	toggleMenu = () => {
		if (this.isOpenMenu) {
			this.hideNav();
		} else {
			this.revealNav();
		}
	};

	onScroll = () => {
		const scrollValue = window.scrollY || document.documentElement.scrollTop;

		if (scrollValue > this.lastScrollTop) {
			document.body.classList.add("is-scrolling-down");
			document.body.classList.remove("is-scrolling-up");
		} else {
			document.body.classList.add("is-scrolling-up");
			document.body.classList.remove("is-scrolling-down");
		}

		// For Mobile && negative scrolling
		this.lastScrollTop = scrollValue <= 0 ? 0 : scrollValue;
	};

	hideNav = (immediate = false, cb = false) => {
		if (!this.isAnimatingMenu) {
			this.isAnimatingMenu = true;

			document.body.classList.remove("is-nav-open");

			const hideTl = gsap.timeline({
				onComplete: () => {
					this.isAnimatingMenu = false;
					this.isOpenMenu = false;

					if (cb) {
						cb();
					}
				},
			});

			hideTl
				.to(this.DOM.navMobileLinks, {
					yPercent: -100,
					duration: tlProp(0.2, immediate),
					stagger: tlProp(0.1, immediate),
					onComplete: () => {
						gsap.set(this.DOM.navMobileLinks, {
							yPercent: 100,
						});
					},
					ease,
				})
				.to(
					this.DOM.navMobileCtas,
					{
						opacity: 0,
						yPercent: -100,
						// stagger: tlProp(0.1, immediate),
						duration: tlProp(0.2, immediate),
						onComplete: () => {
							gsap.set(this.DOM.navMobileCtas, {
								yPercent: 100,
							});
						},
						ease,
					},
					tlProp(0.1, immediate),
				)
				.set(this.DOM.navMobileBg, {
					transformOrigin: "50% 0%",
				})
				.to(this.DOM.navMobileBg, {
					yPercent: -100,
					duration: tlProp(0.2, immediate),
					onComplete: () => {
						gsap.set(this.DOM.navMobileBg, {
							yPercent: 100,
						});
					},
					ease,
				})
				.set(this.DOM.navMobile, {
					zIndex: -1,
					visibility: "hidden",
					pointerEvents: "none",
				});

			return hideTl;
		}
	};

	revealNav = () => {
		if (!this.isAnimatingMenu) {
			this.isAnimatingMenu = true;

			document.body.classList.add("is-nav-open");

			const revealTl = gsap.timeline({
				onComplete: () => {
					this.isAnimatingMenu = false;
					this.isOpenMenu = true;
				},
			});

			revealTl
				.set(this.DOM.navMobile, {
					zIndex: 399,
					visibility: "visible",
					pointerEvents: "all",
				})
				.set(this.DOM.navMobileBg, {
					transformOrigin: "50% 100%",
				})
				.to(this.DOM.navMobileBg, {
					yPercent: 0,
					duration: 0.2,
					ease,
				})
				.to(
					this.DOM.navMobileCtas,
					{
						opacity: 1,
						yPercent: 0,
						stagger: 0.1,
						duration: 0.2,
						ease,
					},
					"-=0.34",
				)
				.to(
					this.DOM.navMobileLinks,
					{
						yPercent: 0,
						stagger: 0.1,
						duration: 0.2,
						ease,
					},
					"-=0.34",
				);

			return revealTl;
		}
	};

	hide = () => {
		return gsap.set(this.DOM.nav, { opacity: 0 });
	};

	reveal = () => {
		return gsap.timeline().to(this.DOM.nav, {
			opacity: 1,
			duration: 0.2,
			ease,
			clearProps: "opacity",
		});
	};

	reinit(container) {
		this.init(container);
	}

	destroy() {
		if (this.DOM) {
			this.removeEvents();

			if (this.headTrigger) {
				this.headTrigger.kill();
				this.headTrigger = undefined;
			}

			this.DOM = undefined;
		}
	}

	init(container = document) {
		const nav = container.querySelector(".js-nav");
		const navMobile = container.querySelector(".js-nav-mobile");

		if (nav && navMobile) {
			this.DOM = {};
			this.DOM.nav = nav;
			this.DOM.navMobile = navMobile;
			this.DOM.navToggle = this.DOM.nav.querySelector(".js-nav-toggle");
			this.DOM.navMobileLinks = this.DOM.navMobile.querySelectorAll(
				".js-nav-mobile-link",
			);
			this.DOM.navMobileBg =
				this.DOM.navMobile.querySelector(".js-nav-mobile-bg");
			this.DOM.navMobileCtas =
				this.DOM.navMobile.querySelectorAll(".js-nav-mobile-cta");

			this.isOpenMenu = false;
			this.isAnimatingMenu = false;

			this.setup();
		}
	}
}

export default Nav;
