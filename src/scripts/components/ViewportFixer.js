import layout from "./Layout";

export default class ViewportFixer {
	constructor() {
		this.init();
	}

	resize() {
		if (this.winW !== layout.window.width) {
			this.winW = layout.window.width;
			this.setup();
		}
	}

	setup() {
		const h = layout.isIos ? window.screen.height : window.innerHeight;
		document.documentElement.style.setProperty(
			"--v-width",
			`${window.innerWidth}px`,
		);
		document.documentElement.style.setProperty("--v-height", `${h}px`);
	}

	init() {
		this.winW = layout.window.width;
		this.setup();
	}
}
