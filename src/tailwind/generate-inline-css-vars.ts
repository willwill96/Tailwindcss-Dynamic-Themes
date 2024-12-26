import { allThemes, Theme } from "./themes";

function baseInlineVars(theme: Theme) {
	return Object.keys(theme.colors)
		.map(
			(color) =>
				`--color-${color}: ${theme.colors[color as keyof typeof theme.colors]}`,
		)
		.join(";");
}

function darkThemeInlineVars(theme: Theme) {
	return Object.keys(theme.dark.colors)
		.map(
			(color) =>
				`--color-${color}: ${theme.dark.colors[color as keyof typeof theme.colors]}`,
		)
		.join(";");
}

export function generateInlineCss(themeName?: string) {
	const currentTheme =
		allThemes.find((theme) => themeName === theme.name) || allThemes[0];
	return `:root{${baseInlineVars(currentTheme)}} @media (prefers-color-scheme: dark) :root {${darkThemeInlineVars(currentTheme)}}`;
}
