/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"luke-white": "#fffffe",
				"luke-light-blue": "#015694",
				"luke-dark-blue": "#082d47",
				"luke-green": "#3e9b84",
				"luke-hover": "#567487",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
};
