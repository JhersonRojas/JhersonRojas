import { defineConfig, passthroughImageService } from "astro/config"
import react from "@astrojs/react"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind()],
    image: {
        service: passthroughImageService(),
    },
    i18n: {
        defaultLocale: "en",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true,
        },
    },
})
