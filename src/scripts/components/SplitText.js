import Splitting from "splitting";

class SplitText {
	initChars(container = document) {
		const charsItems = container.querySelectorAll("[data-split='chars']");
		if (charsItems.length > 0) {
			this.charsInstance = Splitting({
				target: charsItems,
				by: "chars",
			});
			this.instances.push(this.charsInstance);
		}
	}

	initWords(container = document) {
		const wordsItems = container.querySelectorAll("[data-split='words']");
		if (wordsItems.length > 0) {
			this.wordsInstance = Splitting({
				target: wordsItems,
				by: "words",
			});

			this.instances.push(this.wordsInstance);
		}
	}

	initWordsLines() {
		const wordsLinesItems = document.querySelectorAll("[data-split='lines']");
		if (wordsLinesItems.length > 0) {
			this.wordsLinesInstance = Splitting({
				target: wordsLinesItems,
				by: "lines",
			});

			this.instances.push(this.wordsLinesInstance);
		}
	}

	initLines(container = document) {
		const linesItems = container.querySelectorAll("[data-line]");
		for (let i = 0; i < linesItems.length; i++) {
			this.buildLine(linesItems[i]);
		}
	}

	buildLine(line) {
		const content = line.innerHTML;
		const wrapper = document.createElement("div");
		const wrapperInner = document.createElement("div");
		wrapper.className = "line-wrap";
		wrapperInner.className = "line-wrap__inner js-line-wrap-anim";
		wrapperInner.innerHTML = content;

		line.innerHTML = "";

		wrapper.appendChild(wrapperInner);
		line.appendChild(wrapper);
	}

	getInstance(instanceName) {
		const selectedInstance = this.instances.filter(
			(instance) => instance.id === instanceName,
		);
		if (selectedInstance !== undefined) return selectedInstance[0];
	}

	addInstance(instanceName, options, save = true) {
		this[instanceName] = Splitting(options);
		if (save)
			this.instances.push({ id: `${instanceName}`, value: this[instanceName] });
	}

	createInstance(options) {
		return Splitting(options);
	}

	removeInstance(instanceName) {
		const selectedInstances = this.instances.filter(
			(instance) => instance.id !== instanceName,
		);
		this.instances = selectedInstances;
	}

	reinit(container) {
		this.init(container);
	}

	init(container = document) {
		this.instances = [];

		this.initChars(container);
		this.initWords();
		this.initWordsLines();
	}
}

const splitText = new SplitText();

export default splitText;
