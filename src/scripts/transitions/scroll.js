import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
	dividerLabelHide,
	dividerLabelReveal,
	textLinesHide,
	textLinesReveal,
} from "./elements";
import { ease, expo } from "../helpers/animation";

export const scrollTriggerTransitions = {
	hideAll: (elements) => {
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			const scrollType = element.dataset.scrollTrigger;

			if (element) {
				switch (scrollType) {
					case "trusted": {
						const title = element.querySelector(".js-anim-title");
						const rows = element.querySelectorAll(".js-anim-row");
						const divider = element.querySelector(".js-anim-divider");

						textLinesHide(title);
						gsap.set([divider, rows], { yPercent: 20, opacity: 0 });
						break;
					}
					case "collaborate": {
						const dividerLabel = element.querySelector(".js-divider-label");
						const title = element.querySelector(".js-anim-title");
						const items = element.querySelectorAll(".js-anim-item");
						const divider = element.querySelector(".js-anim-divider");

						dividerLabelHide(dividerLabel);
						gsap.set([title, items, divider], { yPercent: 20, opacity: 0 });
						break;
					}
					case "anim-group": {
						const animGroupsItems = element.querySelectorAll(".js-anim-item");
						gsap.set(animGroupsItems, { y: 50, opacity: 0 });
						break;
					}
					case "group": {
						const groupItems = element.querySelectorAll(".js-anim-item");
						gsap.set(groupItems, { yPercent: 20, opacity: 0 });
						break;
					}
					case "item": {
						gsap.set(element, { y: 50, opacity: 0 });
						break;
					}
					default:
						break;
				}
			}
		}
	},
	activate: (elements) => {
		gsap.registerPlugin(ScrollTrigger);

		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			const scrollType = element.dataset.scrollTrigger;
			const sectionTriggerOptions = {
				trigger: element,
				start: "top bottom-=30%",
				end: "bottom top",
			};

			if (element) {
				switch (scrollType) {
					case "trusted": {
						const title = element.querySelector(".js-anim-title");
						const rows = element.querySelectorAll(".js-anim-row");
						const divider = element.querySelector(".js-anim-divider");
						const triggerTl = gsap.timeline({
							scrollTrigger: sectionTriggerOptions,
						});

						triggerTl
							.add(textLinesReveal(title))
							.to(
								rows,
								{
									duration: 1,
									yPercent: 0,
									opacity: 1,
									stagger: 0.08,
									clearProps: "y,opacity",
									ease,
								},
								"<",
							)
							.to(
								divider,
								{
									duration: 1,
									yPercent: 0,
									opacity: 1,
									clearProps: "y,opacity",
									ease: expo,
								},
								"-=0.8",
							);
						break;
					}
					case "collaborate": {
						const dividerLabel = element.querySelector(".js-divider-label");
						const title = element.querySelector(".js-anim-title");
						const items = element.querySelectorAll(".js-anim-item");
						const divider = element.querySelector(".js-anim-divider");
						const triggerTl = gsap.timeline({
							scrollTrigger: sectionTriggerOptions,
						});

						triggerTl
							.add(dividerLabelReveal(dividerLabel))
							.to(
								title,
								{
									duration: 1,
									yPercent: 0,
									opacity: 1,
									ease,
								},
								"-=0.8",
							)
							.to(
								[items, divider],
								{
									duration: 1,
									yPercent: 0,
									opacity: 1,
									stagger: 0.08,
									clearProps: "y,opacity",
									ease: expo,
								},
								"-=0.8",
							);
						break;
					}
					case "newsletter": {
						const mm = gsap.matchMedia();
						mm.add(
							{
								isDesk: "(min-width: 1024px)",
							},
							(context) => {
								const { isDesk } = context.conditions;
								if (isDesk) {
									const ills = element.querySelectorAll(".js-anim-ill");
									const triggerTl = gsap.timeline({
										scrollTrigger: {
											trigger: element,
											start: "top bottom-=30%",
											end: "bottom top+=50%",
											scrub: true,
											ease: "none",
										},
									});

									triggerTl.from(ills, {
										opacity: 0,
										xPercent: (i) => (i % 2 === 0 ? -60 : 60),
									});
								}
							},
						);

						break;
					}
					case "anim-group": {
						const animGroups = element.querySelectorAll(".js-anim-group");
						const animGroupsTl = gsap.timeline({
							scrollTrigger: sectionTriggerOptions,
						});

						for (let i = 0; i < animGroups.length; i++) {
							const animGroup = animGroups[i];
							const animGroupItems =
								animGroup.querySelectorAll(".js-anim-item");

							animGroupsTl.to(
								animGroupItems,
								{
									y: 0,
									opacity: 1,
									duration: 1,
									ease,
									stagger: 0.08,
									clearProps: "y,opacity",
								},
								i === 0 ? 0 : "-=0.8",
							);
						}
						break;
					}
					case "group": {
						const groupItems = element.querySelectorAll(".js-anim-item");
						const groupTl = gsap.timeline({
							scrollTrigger: sectionTriggerOptions,
						});

						groupTl.to(groupItems, {
							yPercent: 0,
							opacity: 1,
							duration: 1,
							ease,
							stagger: 0.08,
							clearProps: "y,opacity",
						});
						break;
					}
					case "item": {
						const triggerTl = gsap.timeline({
							scrollTrigger: sectionTriggerOptions,
						});

						triggerTl.to(element, {
							y: 0,
							opacity: 1,
							duration: 1,
							ease,
							clearProps: "y,opacity",
						});
						break;
					}
					default:
						break;
				}
			}
		}
	},
};
