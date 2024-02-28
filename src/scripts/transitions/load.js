import { gsap } from "gsap";
// import iman from "../components/InstanceManager";
import router from "../components/Router";
import {
	hidePage,
	pageTransitionIn,
	pageTransitionOut,
	revealPage,
} from "./page";

export const loadTransition = () => {
	pageTransitionIn(true);
	hidePage({ pageName: router.activeView });

	const loadTl = gsap.timeline({
		delay: 0.3,
		onComplete: () => {
			console.log("load transition complete");
			// const scrollAnimatorInstance = iman.get("scrollAnimator");
			// if (scrollAnimatorInstance) {
			// 	scrollAnimatorInstance.activate();
			// }
		},
	});
	loadTl
		.add(pageTransitionOut())
		.add(revealPage({ pageName: router.activeView }), "-=0.2");

	return loadTl;
};
