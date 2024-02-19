/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			borderWidth: {
				"min": "1px"
			},
			backgroundImage: {
				"pixel": "url(/fondo.gif);",
				"patron-design": "linear-gradient(rgb(161, 161, 170) 1px, transparent 1px), linear-gradient(to right, rgb(161, 161, 170) 1px, rgb(255, 255, 255) 1px);",
				"patron-design-dark": "linear-gradient(rgb(39, 39, 42) 1px, transparent 1px), linear-gradient(to right, rgb(39, 39, 42) 1px, rgb(0, 0, 0) 1px);",
			}
		},
	},
	plugins: []
}
