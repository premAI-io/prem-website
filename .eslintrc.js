module.exports = {
	env: {
		es2022: true,
		browser: true,
		node: true,
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "latest",
	},
	extends: ["eslint:recommended", "prettier"],
};
