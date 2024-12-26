import { getLocalTheme } from "./get-local-theme";
import { PluginCreator } from "tailwindcss/types/config";
import { allThemes } from "./themes";

// Nextjs does not reload env vars for the tailwind config so we parse the .env.development file ourselves so that hot reloading works as expected
let computedTheme = process.env.TAILWIND_THEME;
if (process.env.NODE_ENV === "development") {
	computedTheme = getLocalTheme();
}

const currentTheme =
	allThemes.find((theme) => computedTheme === theme.name) || allThemes[0];

const dynamicThemePlugin: PluginCreator = ({ addBase }) => {
	addBase({
		":root": Object.keys(currentTheme.colors).reduce(
			(acc, color) => {
				acc[`--color-${color}`] =
					currentTheme.colors[color as keyof typeof currentTheme.colors];
				return acc;
			},
			{} as Record<string, string>,
		),
		"@media (prefers-color-scheme: dark)": {
			":root": Object.keys(currentTheme.dark.colors).reduce(
				(acc, color) => {
					acc[`--color-${color}`] =
						currentTheme.dark.colors[
							color as keyof typeof currentTheme.dark.colors
						]!;
					return acc;
				},
				{} as Record<string, string>,
			),
		},
	});
};

export { dynamicThemePlugin };
