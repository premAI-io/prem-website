import iman from "./InstanceManager";
import layout from "./Layout";
import FeaturesCarousel from "./FeaturesCarousel";
import HashScroll from "./HashScroll";
import MarqueeManager from "./MarqueeManager";
import ViewportFixer from "./ViewportFixer";

// helpers
import debounce from "../helpers/debounce";
import isTouch from "../helpers/isTouch";

class Application {
	start() {
		document.addEventListener("DOMContentLoaded", () => {
			document.documentElement.className = "js";
			document.body.classList.toggle("is-touch", isTouch());
		});

		window.addEventListener("load", () => {
			layout.init();

			iman.add("viewportFixer", new ViewportFixer());
			iman.add("hashScroll", new HashScroll());
			iman.add("featuresCarousel", new FeaturesCarousel());
			iman.add("marqueeManager", new MarqueeManager());
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
