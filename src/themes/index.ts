interface ThemeColors {
	primary: string;
	secondary: string;
	background: string;
	foreground: string;
}

interface Theme {
	name: string;
	colors: ThemeColors;
	dark: { colors: Partial<ThemeColors> };
}

export const redTheme: Theme = {
	name: "red",
	colors: {
		primary: "red",
		secondary: "orange",
		background: "#ffffff",
		foreground: "#171717",
	},
	dark: {
		colors: {
			background: "#0a0a0a",
			foreground: "#ededed",
		},
	},
} as const;

export const blueTheme: Theme = {
	name: "blue",
	colors: {
		primary: "blue",
		secondary: "teal",
		background: "#ffffff",
		foreground: "#171717",
	},
	dark: {
		colors: {
			background: "#0a0a0a",
			foreground: "#ededed",
		},
	},
} as const;
