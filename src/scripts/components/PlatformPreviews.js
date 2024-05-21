import Connect from "./platform/Connect";
import Experiment from "./platform/Experiment";
import Integrate from "./platform/Integrate";
import Launch from "./platform/Launch";
import Monitor from "./platform/Monitor";
import Train from "./platform/Train";

class PlatformPreviews {
	constructor() {
		this.init();
	}

	setup() {
		for (let i = 0; i < this.DOM.cards.length; i++) {
			this.instances.push(new PlatformPreview(this.DOM.cards[i]));
		}
	}

	destroy() {
		if (this.DOM) {
			this.DOM = undefined;
		}
	}

	reinit(container) {
		this.init(container);
	}

	init(container = document) {
		const section = container.querySelector(".js-platform-previews");

		if (section) {
			this.DOM = {};
			this.DOM.section = section;
			this.DOM.cards = this.DOM.section.querySelectorAll(
				".js-platform-preview-card",
			);
			this.instances = [];

			this.setup();
		}
	}
}

class PlatformPreview {
	constructor(block) {
		this.init(block);
	}

	setup() {
		switch (this.animationId) {
			case "connect":
				this.animationInstance = new Connect(this.DOM.animationContainer);
				break;
			case "experiment":
				this.animationInstance = new Experiment(this.DOM.animationContainer);
				break;
			case "integrate":
				this.animationInstance = new Integrate(this.DOM.animationContainer);
				break;
			case "launch":
				this.animationInstance = new Launch(this.DOM.animationContainer);
				break;
			case "monitor":
				this.animationInstance = new Monitor(this.DOM.animationContainer);
				break;
			case "train":
				this.animationInstance = new Train(this.DOM.animationContainer);
				break;
			default:
				break;
		}

		if (this.animationInstance) {
			console.log(this.animationInstance);
		}
	}

	destroy() {
		if (this.DOM) {
			this.DOM = undefined;
		}
	}

	init(block) {
		if (block) {
			this.DOM = {};
			this.DOM.block = block;
			this.DOM.animationContainer = this.DOM.block.querySelector(
				".js-platform-animation",
			);

			this.animationId = this.DOM.block.dataset.animationId;

			this.setup();
		}
	}
}

export default PlatformPreviews;
