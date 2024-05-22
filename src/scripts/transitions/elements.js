// import { gsap } from "gsap";
import iman from "../components/InstanceManager";
import { ease } from "../helpers/animation";

export const dividerLabelHide = (element) => {
	const labelIlls = element.querySelectorAll(".js-divider-label-ill");
	const labelText = element.querySelector(".js-divider-label-text");

	return gsap
		.timeline()
		.set(labelIlls, {
			clipPath: (i) =>
				i === 0
					? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
					: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
		})
		.set(labelText, {
			yPercent: 100,
		});
};

export const dividerLabelReveal = (element) => {
	const labelIlls = element.querySelectorAll(".js-divider-label-ill");
	const labelText = element.querySelector(".js-divider-label-text");

	return gsap
		.timeline()
		.to(labelIlls, {
			duration: 0.2,
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			stagger: 0.08,
			clearProps: "clipPath",
			ease,
		})
		.to(
			labelText,
			{
				duration: 0.2,
				yPercent: 0,
				clearProps: "y",
				ease,
			},
			"-=0.7",
		);
};

export const textLinesHide = (element) => {
	const splitTextInstance = iman.get("splitText", element);
	const linesInstance = splitTextInstance.getSubInstanceFrom(
		element,
		"wordsLinesInstance",
	);

	if (linesInstance) {
		gsap.set(linesInstance.lines, {
			yPercent: 10,
			opacity: 0,
		});
	}
};

export const textLinesReveal = (element) => {
	const splitTextInstance = iman.get("splitText", element);
	const linesInstance = splitTextInstance.getSubInstanceFrom(
		element,
		"wordsLinesInstance",
	);

	if (linesInstance) {
		return gsap.to(linesInstance.lines, {
			duration: 0.2,
			yPercent: 0,
			opacity: 1,
			stagger: 0.08,
			clearProps: "y",
			ease,
		});
	}
};
