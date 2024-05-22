// import { gsap } from "gsap";
import iman from "../components/InstanceManager";
import router from "../components/Router";
import {
	hidePage,
	pageTransitionIn,
	pageTransitionOut,
	revealPage,
} from "./page";

export const loadTransition = () => {
	const scrollAnimatorInstance = iman.get("scrollAnimator");

	if (scrollAnimatorInstance) {
		scrollAnimatorInstance.hide();
	}

	pageTransitionIn(true);
	hidePage({ pageName: router.activeView });

	const loadTl = gsap.timeline({
		onStart: () => {
			if (scrollAnimatorInstance) {
				scrollAnimatorInstance.start();
			}
		},
	});
	loadTl
		.add(pageTransitionOut())
		.add(revealPage({ pageName: router.activeView }), "-=0.2");

	return loadTl;
};
