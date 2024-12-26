import { allThemes } from "./themes";

export function generateInlineCss(themeName?: string) {
	const currentTheme =
		allThemes.find((theme) => themeName === theme.name) || allThemes[0];
    // inline base css vars
	return `:root{${Object.keys(currentTheme.colors)
		.map(
			(color) =>
				`--color-${color}: ${currentTheme.colors[color as keyof typeof currentTheme.colors]}`,
		)
        // inline dark mode css vars
		.join(";")}} @media (prefers-color-scheme: dark) :root {${Object.keys(
		currentTheme.dark.colors,
	)
		.map(
			(color) =>
				`--color-${color}: ${currentTheme.dark.colors[color as keyof typeof currentTheme.colors]}`,
		)
		.join(";")}}`;
}
