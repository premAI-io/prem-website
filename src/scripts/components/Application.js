import ComputeBlock from "./ComputeBlock";
import FeaturesCarousel from "./FeaturesCarousel";
import iman from "./InstanceManager";
import HashScroll from "./HashScroll";
import layout from "./Layout";
import MarqueeManager from "./MarqueeManager";
import Nav from "./Nav";
import Team from "./Team";
import Testimonials from "./Testimonials";
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
			iman.add("nav", new Nav());
			iman.add("hashScroll", new HashScroll());
			iman.add("featuresCarousel", new FeaturesCarousel());
			iman.add("marqueeManager", new MarqueeManager());
			iman.add("computeBlock", new ComputeBlock());
			iman.add("testimonials", new Testimonials());
			iman.add("team", new Team());
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
