class Layout {
	constructor() {
		this.device = 0;
		this.window = {
			width: 0,
			height: 0,
		};
	}

	detectApple() {
		this.isIos =
			/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	}

	createRuler() {
		let ruler = document.createElement("div");

		ruler.style.position = "fixed";
		ruler.style.height = "100%";
		ruler.style.width = 0;
		ruler.style.top = 0;

		document.documentElement.appendChild(ruler);
		this.window.height = this.isIos ? ruler.offsetHeight : window.innerHeight;

		document.documentElement.removeChild(ruler);
		ruler = null;
	}

	getWindow() {
		this.createRuler();
		this.window.width = window.innerWidth;
	}

	getDevice() {
		this.device = window.matchMedia("(min-width:1920px)").matches
			? 3
			: window.matchMedia("(min-width:1024px)").matches
				? 2
				: window.matchMedia("(min-width:768px)").matches
					? 1
					: 0;
	}

	isTouch() {
		return document.body.classList.contains("is-touch");
	}

	setup() {
		this.detectApple();
		this.getDevice();
		this.getWindow();
	}

	init() {
		this.setup();
	}

	resize() {
		const cachedW = window.innerWidth;
		const cachedH = window.innerHeight;

		this.detectApple();
		this.getDevice();

		if (this.window.width !== cachedW) {
			this.window.width = window.innerWidth;
		}

		if (this.window.height !== cachedH) {
			this.createRuler();
		}
	}
}

const layout = new Layout();

export default layout;
