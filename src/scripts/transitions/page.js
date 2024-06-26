import iman from "../components/InstanceManager";

import { ease, expo, tlProp } from "../helpers/animation";

export const hidePage = ({
	pageName,
	container = document,
	// immediate = true,
}) => {
	const tl = gsap.timeline();
	const navInstance = iman.get("nav");

	if (navInstance) {
		tl.add(navInstance.hide(true));
	}

	switch (pageName) {
		case "homepage": {
			const homeHeroContent = container.querySelector(".js-hero-content");
			const homeHeroBadge = homeHeroContent.querySelector(".js-badge");
			const homeHeroTitle = homeHeroContent.querySelector(".js-title");
			const homeHeroSubtitle = homeHeroContent.querySelector(".js-subtitle");
			const homeHeroCtas = homeHeroContent.querySelectorAll(".js-cta");
			const homeHeroIll = container.querySelector(".js-hero-ill");
			const homeIllOuter = homeHeroIll.querySelector(".js-path-outer");
			const homeIllMiddle = homeHeroIll.querySelector(".js-path-middle");
			const homeIllInner = homeHeroIll.querySelector(".js-path-inner");

			const homeHeroSubtitleWords = homeHeroSubtitle.querySelectorAll(".word");

			const featuresCarouselInstance = iman.get("featuresCarousel");

			if (featuresCarouselInstance) {
				featuresCarouselInstance.hide();
			}

			tl.set([homeIllOuter, homeIllMiddle, homeIllInner], {
				scale: 0,
				y: -100,
				transformOrigin: "50% 0%",
			}).set(
				[homeHeroBadge, homeHeroTitle, homeHeroSubtitleWords, homeHeroCtas],
				{ opacity: 0, y: -40 },
			);

			break;
		}
		case "company": {
			const companyHeroContent = container.querySelector(".js-hero-content");
			const companyHeroBadge = companyHeroContent.querySelector(".js-badge");
			const companyHeroTitle = companyHeroContent.querySelector(".js-title");
			const companyHeroSubtitle =
				companyHeroContent.querySelector(".js-subtitle");
			const companyHeroIll = container.querySelector(".js-hero-ill");
			const companyIllRad = companyHeroIll.querySelector(".js-path-radial");
			const companyIllStripe = companyHeroIll.querySelector(".js-path-stripe");
			const companyIllBalls = companyHeroIll.querySelectorAll(".js-path-ball");
			const companyIllGlow = companyHeroIll.querySelector(".js-path-ball-glow");
			const companyHeroBg = container.querySelector(".js-hero-bg");
			const companyIllStripeLength = companyIllStripe.getTotalLength();
			const companyHeroSubtitleWords =
				companyHeroSubtitle.querySelectorAll(".word");

			tl.set([companyHeroBadge, companyHeroTitle, companyHeroSubtitleWords], {
				opacity: 0,
				y: 40,
			})
				.set(companyHeroBg, { opacity: 0 })
				.set(companyIllRad, {
					opacity: 0,
					scale: 0,
					transformOrigin: "50% 50%",
				})
				.set(companyIllStripe, {
					strokeDasharray: companyIllStripeLength,
					strokeDashoffset: companyIllStripeLength,
				})
				.set(companyIllBalls, { scale: 0, transformOrigin: "50% 50%" })
				.set(companyIllGlow, {
					opacity: 0,
					scale: 0,
					transformOrigin: "50% 50%",
				});

			break;
		}
		case "developers":
		case "business": {
			const centerHero = container.querySelector(".js-hero");
			const centerHeroLabel = centerHero.querySelector(".js-divider-label");
			const centerHeroTitle = centerHero.querySelector(".js-title");
			const centerHeroSubtitle = centerHero.querySelector(".js-subtitle");
			const centerHeroMedia = centerHero.querySelector(".js-media");
			const centerHeroCta = centerHero.querySelector(".js-cta");

			gsap.set(
				[centerHeroLabel, centerHeroTitle, centerHeroSubtitle, centerHeroMedia],
				{
					opacity: 0,
					y: 40,
				},
			);

			if (centerHeroCta) {
				gsap.set(centerHeroCta, { opacity: 0, y: 40 });
			}
			break;
		}
		default:
			break;
	}

	return tl;
};

export const revealPage = ({ pageName, container = document, cb = false }) => {
	const tl = gsap.timeline({
		onComplete: () => {
			gsap.to("#product-hunt-button", {
				scale: 1,
				opacity: 1,
				duration: 0.25,
				expo,
			});
			if (pageName === "homepage") {
				const featuresCarouselInstance = iman.get("featuresCarousel");
				if (featuresCarouselInstance) {
					featuresCarouselInstance.start();
				}
			}

			if (cb) cb();
		},
	});
	const navInstance = iman.get("nav");

	switch (pageName) {
		case "homepage": {
			const homeHeroContent = container.querySelector(".js-hero-content");
			const homeHeroBadge = homeHeroContent.querySelector(".js-badge");
			const homeHeroTitle = homeHeroContent.querySelector(".js-title");
			const homeHeroSubtitle = homeHeroContent.querySelector(".js-subtitle");
			const homeHeroCtas = homeHeroContent.querySelectorAll(".js-cta");
			const homeHeroIll = container.querySelector(".js-hero-ill");
			const homeIllOuter = homeHeroIll.querySelector(".js-path-outer");
			const homeIllMiddle = homeHeroIll.querySelector(".js-path-middle");
			const homeIllInner = homeHeroIll.querySelector(".js-path-inner");
			const featuresCarouselInstance = iman.get("featuresCarousel");

			const homeHeroSubtitleWords = homeHeroSubtitle.querySelectorAll(".word");

			tl.to([homeIllOuter, homeIllMiddle, homeIllInner], {
				duration: 0.3,
				y: 0,
				stagger: 0.1,
				scale: 1,
				clearProps: "scale,y",
				ease,
			})
				.to(
					homeHeroBadge,
					{
						duration: 0.3,
						opacity: 1,
						y: 0,
						ease,
					},
					0.3,
				)
				.to(
					homeHeroTitle,
					{
						duration: 0.3,
						opacity: 1,
						y: 0,
						stagger: 0.02,
						ease,
					},
					0.3,
				)
				.to(
					homeHeroSubtitleWords,
					{
						duration: 0.3,
						opacity: 1,
						y: 0,
						stagger: 0.02,
						ease,
					},
					0.3,
				)
				.to(
					homeHeroCtas,
					{
						duration: 0.3,
						opacity: 1,
						y: 0,
						stagger: 0.1,
						clearProps: "opacity,y",
						ease,
					},
					0.3,
				);

			if (featuresCarouselInstance) {
				tl.add(featuresCarouselInstance.reveal(), 0.5);
			}
			break;
		}
		case "company": {
			const companyHeroContent = container.querySelector(".js-hero-content");
			const companyHeroBadge = companyHeroContent.querySelector(".js-badge");
			const companyHeroTitle = companyHeroContent.querySelector(".js-title");
			const companyHeroSubtitle =
				companyHeroContent.querySelector(".js-subtitle");
			const companyHeroIll = container.querySelector(".js-hero-ill");
			const companyIllRad = companyHeroIll.querySelector(".js-path-radial");
			const companyIllStripe = companyHeroIll.querySelector(".js-path-stripe");
			const companyIllBalls = companyHeroIll.querySelectorAll(".js-path-ball");
			const companyIllGlow = companyHeroIll.querySelector(".js-path-ball-glow");
			const companyHeroBg = container.querySelector(".js-hero-bg");
			const companyHeroSubtitleWords =
				companyHeroSubtitle.querySelectorAll(".word");

			tl.to(
				companyHeroBadge,
				{
					duration: 0.15,
					opacity: 1,
					y: 0,
					ease,
				},
				0.3,
			)
				.to(
					companyHeroTitle,
					{
						duration: 0.15,
						opacity: 1,
						y: 0,
						stagger: 0.02,
						ease,
					},
					0.3,
				)
				.to(
					companyHeroSubtitleWords,
					{
						duration: 0.15,
						opacity: 1,
						y: 0,
						stagger: 0.01,
						ease,
					},
					0.3,
				)
				.to(
					companyIllStripe,
					{
						duration: 0.15,
						strokeDashoffset: 0,
						ease,
					},
					0,
				)
				.to(companyIllBalls, {
					duration: 0.15,
					scale: 1,
					stagger: 0.05,
					ease,
				})
				.to(companyIllGlow, {
					duration: 0.15,
					opacity: 1,
					scale: 1,
					ease,
				})
				.to(
					companyIllRad,
					{
						duration: 0.15,
						scale: 1,
						opacity: 0.45,
						ease,
					},
					0.4,
				)
				.to(
					companyHeroBg,
					{
						duration: 0.15,
						opacity: 1,
						ease,
					},
					0.3,
				);
			break;
		}
		case "developers":
		case "business": {
			const centerHero = container.querySelector(".js-hero");
			const centerHeroLabel = centerHero.querySelector(".js-divider-label");
			const centerHeroTitle = centerHero.querySelector(".js-title");
			const centerHeroSubtitle = centerHero.querySelector(".js-subtitle");
			const centerHeroMedia = centerHero.querySelector(".js-media");
			const centerHeroCta = centerHero.querySelector(".js-cta");

			tl.to(
				[centerHeroLabel, centerHeroTitle, centerHeroSubtitle, centerHeroMedia],
				{
					duration: 0.05,
					opacity: 1,
					y: 0,
					clearProps: "opacity,y",
					stagger: {
						from: "end",
						amount: 0.1,
					},
					ease,
				},
			);

			if (centerHeroCta) {
				tl.to(
					centerHeroCta,
					{
						duration: 0.05,
						opacity: 1,
						y: 0,
						clearProps: "opacity,y",
						ease,
					},
					0,
				);
			}
			break;
		}
		default:
			break;
	}

	if (navInstance) {
		tl.add(navInstance.reveal(), 0.1);
	}

	return tl;
};

const DOM = {
	pageTransition: document.querySelector(".js-page-loader"),
};

export const pageTransitionIn = (immediate = false) => {
	const inTl = gsap.timeline();

	inTl
		.set(DOM.pageTransition, { display: "block", zIndex: 421 })
		.to(DOM.pageTransition, {
			duration: tlProp(0.05, immediate),
			opacity: 1,
			ease,
		});

	return inTl;
};

export const pageTransitionOut = () => {
	const outTl = gsap.timeline({
		onComplete: () => {
			gsap.set(DOM.pageTransition, { display: "none", zIndex: -1 });
		},
	});

	outTl.to(DOM.pageTransition, {
		duration: 0.3,
		opacity: 0,
		ease,
	});

	return outTl;
};
