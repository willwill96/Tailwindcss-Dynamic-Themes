import { allThemes } from "./src/themes";
import type { Config } from "tailwindcss";
import { getLocalTheme } from "./src/utils/get-local-theme";

// Nextjs does not reload env vars for the tailwind config so we parse the .env.development file ourselves so that hot reloading works as expected
let computedTheme = process.env.TAILWIND_THEME
if (process.env.NODE_ENV === 'development') {
	computedTheme = getLocalTheme()
}

const currentTheme = allThemes.find((theme)=>computedTheme === theme.name) || allThemes[0]

export default { 
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--color-background)",
				foreground: "var(--color-foreground)",
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
			},
		},
	},
	plugins: [
		// eslint-disable-next-line
		// @ts-ignore
		function ({ addBase }) {
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
		},
	],
} satisfies Config;
