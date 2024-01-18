/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundSize: {
				"patron-u": "calc(calc(100% - 1px) / 6) calc(calc(100% - 1px) / 1);",
				"patron-m": "calc(calc(100% - 1px) / 6) calc(calc(100% - 1px) / 11);",
				"patron-u-lg": "calc(calc(100% - 1px) / 9) calc(calc(100% - 1px) / 1);",
				"patron-m-lg": "calc(calc(100% - 1px) / 9) calc(calc(100% - 1px) / 5);",
				"patron-m-xl": "calc(calc(100% - 1px) / 6) calc(calc(100% - 1px) / 20);",
				"patron-m-xl2": "calc(calc(100% - 1px) / 9) calc(calc(100% - 1px) / 10);",
			},
			backgroundImage: {
				"patron-desing": "linear-gradient(rgb(161, 161, 170) 1px, transparent 1px), linear-gradient(to right, rgb(161, 161, 170) 1px, rgb(255, 255, 255) 1px);",
				"patron-desing-dark": "linear-gradient(rgb(39, 39, 42) 1px, transparent 1px), linear-gradient(to right, rgb(39, 39, 42) 1px, rgb(0, 0, 0) 1px);"
			}
		},
	},
	plugins: []
}
