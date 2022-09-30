import i18n, { type Config } from "sveltekit-i18n";

const config: Config = {
	loaders: [
		{
			locale: "en",
			key: "home",
			routes: ["/"],
			loader: async () => (await import("./i18n/en/home.json")).default
		},
		{
			locale: "ru",
			key: "home",
			routes: ["/"],
			loader: async () => (await import("./i18n/ru/home.json")).default
		}
	]
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);