import Marquee from "./Marquee";

class MarqueeManager {
	constructor() {
		this.init();
	}

	setup() {
		for (let i = 0; i < this.DOM.rows.length; i++) {
			const row = this.DOM.rows[i];
			if (row) {
				this.instances.push(
					new Marquee({
						container: row,
						config: {
							repeat: -1,
							speed: 1.25,
							reversed: row.dataset.reversed !== undefined,
						},
					}),
				);
			}
		}
	}

	destroy() {
		if (this.DOM) {
			for (let i = 0; i < this.instances.length; i++) {
				this.instances[i].destroy();
			}
			this.instances = [];
			this.DOM = undefined;
		}
	}

	reinit(container) {
		this.init(container);
	}

	init(container = document) {
		const rows = container.querySelectorAll(".js-marquee-row");

		if (rows.length) {
			this.DOM = {};
			this.DOM.rows = rows;

			this.instances = [];

			this.setup();
		}
	}
}

export default MarqueeManager;
