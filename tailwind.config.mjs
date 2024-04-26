/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sains-serif"],
            },
            borderWidth: {
                min: "1px",
            },
            borderColor: {
                opaque: "#22252C",
            },
            backgroundColor: {
                opaque: "#22252C",
            },
            backgroundImage: {
                "patron-design":
                    "linear-gradient(rgb(161, 161, 170) 1px, transparent 1px), linear-gradient(to right, rgb(161, 161, 170) 1px, rgb(255, 255, 255) 1px);",
                "patron-design-dark":
                    "linear-gradient(rgb(39, 39, 42) 1px, transparent 1px), linear-gradient(to right, rgb(39, 39, 42) 1px, rgb(0, 0, 0) 1px);",
            },
        },
    },
    plugins: [],
}
