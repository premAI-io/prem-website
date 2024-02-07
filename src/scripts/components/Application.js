import iman from "./InstanceManager";
import layout from "./Layout";
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
