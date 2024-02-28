import { gsap } from "gsap";
import iman from "../components/InstanceManager";

import { ease, tlProp } from "../helpers/animation";

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
		default:
			break;
	}

	return tl;
};

export const revealPage = ({ pageName, container = document, cb = false }) => {
	const tl = gsap.timeline({
		onComplete: () => {
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
				duration: 2,
				y: 0,
				stagger: 0.1,
				scale: 1,
				clearProps: "scale,y",
				ease,
			})
				.to(
					homeHeroBadge,
					{
						duration: 1,
						opacity: 1,
						y: 0,
						ease,
					},
					0.75,
				)
				.to(
					homeHeroTitle,
					{
						duration: 1,
						opacity: 1,
						y: 0,
						stagger: 0.02,
						ease,
					},
					0.75,
				)
				.to(
					homeHeroSubtitleWords,
					{
						duration: 1,
						opacity: 1,
						y: 0,
						stagger: 0.02,
						ease,
					},
					0.75,
				)
				.to(
					homeHeroCtas,
					{
						duration: 1,
						opacity: 1,
						y: 0,
						stagger: 0.1,
						ease,
					},
					0.75,
				);

			if (featuresCarouselInstance) {
				tl.add(featuresCarouselInstance.reveal(), 0.75);
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
					duration: 1,
					opacity: 1,
					y: 0,
					ease,
				},
				0.75,
			)
				.to(
					companyHeroTitle,
					{
						duration: 1,
						opacity: 1,
						y: 0,
						stagger: 0.02,
						ease,
					},
					0.75,
				)
				.to(
					companyHeroSubtitleWords,
					{
						duration: 1,
						opacity: 1,
						y: 0,
						stagger: 0.01,
						ease,
					},
					0.75,
				)
				.to(
					companyIllStripe,
					{
						duration: 2,
						strokeDashoffset: 0,
						ease,
					},
					0,
				)
				.to(
					companyIllBalls,
					{
						duration: 0.8,
						scale: 1,
						stagger: 0.05,
						ease,
					},
					"-=1",
				)
				.to(companyIllGlow, {
					duration: 0.8,
					opacity: 1,
					scale: 1,
					ease,
				})
				.to(
					companyIllRad,
					{
						duration: 2,
						scale: 1,
						opacity: 0.45,
						ease,
					},
					1,
				)
				.to(
					companyHeroBg,
					{
						duration: 1,
						opacity: 1,
						ease,
					},
					1.5,
				);
			break;
		}
		default:
			break;
	}

	if (navInstance) {
		tl.add(navInstance.reveal(), 0.5);
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
			duration: tlProp(1, immediate),
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
		duration: 1,
		opacity: 0,
		ease,
	});

	return outTl;
};

// Router page transition
// export const defaultTransition = () => {
//   return {
//     name: "default-transition",
//     leave() {
//       const done = this.async()
//       const outTl = gsap.timeline({
//         onComplete: () => {
//           // Destroy all active instances
//           iman.map("destroy")
//           done()
//         }
//       })

//       outTl.add(pageTransitionIn())

//       return outTl
//     },
//     enter({ next }) {
//       const done = this.async()
//       const nextContainer = next.container
//       const nextPageName = next.namespace

//       done()

//       window.scrollTo(0, 0)
//       router.setActiveView(nextPageName)
//       iman.map("reinit", nextContainer)

//       // Hide new page
//       hidePage({
//         pageName: nextPageName,
//         container: nextContainer,
//         immediate: true
//       })

//       const inTl = gsap.timeline({
//         delay: 0.2,
//       })

//       inTl
//         .add(pageTransitionOut())
//         .add(revealPage({
//           pageName: nextPageName,
//           container: nextContainer
//         }), 0)

//       return inTl
//     },
//   }
// }
