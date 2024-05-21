import ComputeBlock from "./ComputeBlock";
import FeaturesCarousel from "./FeaturesCarousel";
import iman from "./InstanceManager";
import GlowCards from "./GlowCards";
import HashScroll from "./HashScroll";
import layout from "./Layout";
import MarqueeManager from "./MarqueeManager";
import Nav from "./Nav";
import Newsletter from "./Newsletter";
import PlatformPreviews from "./PlatformPreviews";
import router from "./Router";
import ScrollAnimator from "./ScrollAnimator";
import splitText from "./SplitText";
import Team from "./Team";
import Testimonials from "./Testimonials";
import ViewportFixer from "./ViewportFixer";

import { loadTransition } from "../transitions/load";

// helpers
import debounce from "../helpers/debounce";
import isTouch from "../helpers/isTouch";

class Application {
	start() {
		document.addEventListener("DOMContentLoaded", () => {
			document.documentElement.className = "js";
			document.body.classList.toggle("is-touch", isTouch());

			router.init();
			iman.add("nav", new Nav());
		});

		window.addEventListener("load", () => {
			layout.init();

			splitText.init();
			iman.add("splitText", splitText, true);

			iman.add("viewportFixer", new ViewportFixer());
			// iman.add("lazyLoader", new LazyLoader());
			iman.add("hashScroll", new HashScroll());
			iman.add("featuresCarousel", new FeaturesCarousel());
			iman.add("marqueeManager", new MarqueeManager());
			iman.add("computeBlock", new ComputeBlock());
			iman.add("testimonials", new Testimonials());
			iman.add("glowCards", new GlowCards());
			iman.add("team", new Team());
			iman.add("platformPreviews", new PlatformPreviews());
			iman.add("newsletter", new Newsletter());
			iman.add("scrollAnimator", new ScrollAnimator());

			loadTransition();
		});

		window.addEventListener("resize", debounce(this.onResize, 150));
		window.addEventListener("orientationchange", debounce(this.onResize, 150));
	}

	onResize = () => {
		layout.resize();

		document.body.classList.toggle("is-touch", isTouch());

		iman.map("resize");
	};
}

const application = new Application();

export default application;
