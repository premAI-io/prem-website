const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./**/src/*.{html,js}"],
	theme: {
		fontFamily: {
			sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#000000",
			white: "#ffffff",
		},
	},
	plugins: [],
};
