function getDictionary(lang: string = "en") {
    if (lang.includes("en") || lang.includes("es")) {
        return import(`./langs/${lang}.json`)
    }

    return import(`./langs/en.json`)
}

export { getDictionary }
