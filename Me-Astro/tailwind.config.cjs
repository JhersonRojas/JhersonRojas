/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			// custom palet
			backgroundColor: {
				"custom-black": "#0b090a",
				"custom-black-soft": "#161a1d",
				"custom-blood": "#660708",
				"custom-carmesi": "#a4161a",
				"custom-red": "#ba181b",
				"custom-salmon": "#e5383b",
				"custom-gray": "#b1a7a6",
				"custom-gray-soft": "#d3d3d3",
				"custom-light": "#f5f3f4",
				"custom-white": "#ffffff",
			},

			// gradients custom palet
			backgroundImage: {
				"custom-to-up": "linear-gradient(to top, #0b090a, #1f0e15, #300e19, #410c19, #520816, #61191e, #6f2826, #7e362e, #8e524b, #9c6e68, #a78a87, #b1a7a6);",
				"custom-to-down": "linear-gradient(to bottom, #0b090a, #1f0e15, #300e19, #410c19, #520816, #61191e, #6f2826, #7e362e, #8e524b, #9c6e68, #a78a87, #b1a7a6);",
				"custom-to-left": "linear-gradient(to left, #0b090a, #1f0e15, #300e19, #410c19, #520816, #61191e, #6f2826, #7e362e, #8e524b, #9c6e68, #a78a87, #b1a7a6);",
				"custom-to-right": "linear-gradient(to right, #0b090a, #1f0e15, #300e19, #410c19, #520816, #61191e, #6f2826, #7e362e, #8e524b, #9c6e68, #a78a87, #b1a7a6);",
			}
		}
	},
	plugins: [],
}
