import { horizontalLoop } from "../helpers/animation";

class Marquee {
	constructor(options) {
		this.init(options);
	}

	start() {
		this.loop = horizontalLoop(this.DOM.items, {
			paused: false,
			repeat: this.config.repeat,
			speed: this.config.speed,
			reversed: this.config.reversed,
			paddingRight: 40,
		});
	}

	init(options) {
		this.DOM = {};
		this.DOM.container = options.container;
		this.DOM.items = this.DOM.container.querySelectorAll(".js-marquee-item");

		this.config = {
			repeat: options.config.repeat || -1,
			speed: options.config.speed || 1.6,
			reversed: options.config.reversed || false,
		};

		this.start();
	}
}

export default Marquee;
