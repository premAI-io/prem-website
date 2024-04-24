const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./**/src/*.{html,js}", "./**/src/components/*.{html,js}"],
	theme: {
		fontFamily: {
			sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#000000",
			gray: {
				800: "#28292d",
				400: "#a4a4a4",
				200: "#eaeaea",
			},
			white: "#fffffc",
			pink: "#f58e8e",
			wine: "#b57487",
			caramel: "#f2d398",
			malibu: "#7f96ff",
		},
		extend: {
			screens: {
				xs: "375px",
				xxl: "1440px",
			},
		},
	},
	plugins: [],
};
