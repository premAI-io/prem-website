class Router {
	setActiveView(view) {
		this.activeView = view;
	}

	init() {
		this.DOM = {};
		this.DOM.view = document.querySelector("[data-router-view]");
		this.activeView = this.DOM.view.dataset.routerView;
	}
}

const router = new Router();

export default router;
