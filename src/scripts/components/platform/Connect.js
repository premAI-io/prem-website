import { gsap } from "gsap";

class Connect {
	constructor(block) {
		this.init(block);
	}

	setup() {
		this.animation = gsap.timeline({
			paused: true,
			repeat: -1,
			repeatDelay: 1,
		});
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

			this.setup();
		}
	}
}

export default Connect;
