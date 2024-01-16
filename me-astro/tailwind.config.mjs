/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundSize: {
				"patron-size-sm": "calc(99.9vw / 6) calc(99.9vw / 6);",
				"patron-size-md": "calc(69.9vw / 9) calc(69.9vw / 9);"
			},
			backgroundImage: {
				"patron-desing": "linear-gradient(rgb(161, 161, 170) 1px, transparent 1px), linear-gradient(to right, rgb(161, 161, 170) 1px, rgb(255, 255, 255) 1px);",
				"patron-desing-dark": "linear-gradient(rgb(39, 39, 42) 1px, transparent 1px), linear-gradient(to right, rgb(39, 39, 42) 1px, rgb(0, 0, 0) 1px);"
			}
		},
	},
	plugins: [],
}
