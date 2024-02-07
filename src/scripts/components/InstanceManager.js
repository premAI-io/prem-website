class InstanceManager {
	constructor() {
		this.instances = {};
	}

	add(key, instance, preserve) {
		this.instances[key] = { key, instance, preserve };
	}

	get(key) {
		return this.instances[key] && this.instances[key].instance
			? this.instances[key].instance
			: null;
	}

	getAll() {
		return this.instances;
	}

	remove(key) {
		const instance = this.get(key);
		if (instance) {
			!instance.preserve && instance.destroy && instance.destroy();
			this.instances[key] = null;
		}
	}

	removeAll() {
		for (const key in this.instances) {
			this.remove(key);
		}
	}

	destroy(key) {
		const instance = this.get(key);
		const preserve = this.instances[key] ? this.instances[key].preserve : false;
		if (instance) {
			!preserve && instance.destroy && instance.destroy();
		}
	}

	destroyAll() {
		for (const key in this.instances) {
			this.destroy(key);
		}
	}

	map(func, ...args) {
		for (const key in this.instances) {
			const instance = this.get(key);
			instance[func] && instance[func](...args);
		}
	}

	call(key, func, ...args) {
		const instance = this.get(key);
		if (instance && instance[func]) return instance[func](...args);
	}
}

const iman = new InstanceManager();

export default iman;
