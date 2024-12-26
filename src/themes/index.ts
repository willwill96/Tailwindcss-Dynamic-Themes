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

export const sunsetTheme: Theme = {
	name: "Sunset",
	colors: {
		primary: "#FF5733",
		secondary: "#FFC300",
		background: "#F8D7A1",
		foreground: "#2C3E50",
	},
	dark: {
		colors: {
			primary: "#D35400",
			secondary: "#F39C12",
			background: "#2C3E50",
			foreground: "#ECF0F1",
		},
	},
};

export const oceanTheme: Theme = {
	name: "Ocean",
	colors: {
		primary: "#1E90FF",
		secondary: "#32CD32",
		background: "#F0FFFF",
		foreground: "#2F4F4F",
	},
	dark: {
		colors: {
			primary: "#4682B4",
			secondary: "#28B463",
			background: "#2C3E50",
			foreground: "#ECF0F1",
		},
	},
};

export const forestTheme: Theme = {
	name: "Forest",
	colors: {
		primary: "#228B22",
		secondary: "#6B8E23",
		background: "#F0FFF0",
		foreground: "#2F4F4F",
	},
	dark: {
		colors: {
			primary: "#006400",
			secondary: "#8B4513",
			background: "#2F4F4F",
			foreground: "#A9A9A9",
		},
	},
};

export const midnightTheme: Theme = {
	name: "Midnight",
	colors: {
		primary: "#2C3E50",
		secondary: "#34495E",
		background: "#1C1C1C",
		foreground: "#ECF0F1",
	},
	dark: {
		colors: {
			primary: "#1A242F",
			secondary: "#2E3B48",
			background: "#111111",
			foreground: "#BDC3C7",
		},
	},
};

export const cherryBlossomTheme: Theme = {
	name: "Cherry_Blossom",
	colors: {
		primary: "#FFB6C1",
		secondary: "#FF69B4",
		background: "#FFF0F5",
		foreground: "#8B008B",
	},
	dark: {
		colors: {
			primary: "#FF1493",
			secondary: "#C71585",
			background: "#2C3E50",
			foreground: "#F0F8FF",
		},
	},
};

export const desertTheme: Theme = {
	name: "Desert",
	colors: {
		primary: "#D2691E",
		secondary: "#8B4513",
		background: "#F4A460",
		foreground: "#2F4F4F",
	},
	dark: {
		colors: {
			primary: "#A0522D",
			secondary: "#BC8F8F",
			background: "#2F4F4F",
			foreground: "#E6E6FA",
		},
	},
};

export const limeTheme: Theme = {
	name: "Lime",
	colors: {
		primary: "#32CD32",
		secondary: "#98FB98",
		background: "#F0FFF0",
		foreground: "#006400",
	},
	dark: {
		colors: {
			primary: "#228B22",
			secondary: "#8B0000",
			background: "#2F4F4F",
			foreground: "#F0F8FF",
		},
	},
};

export const lavenderTheme: Theme = {
	name: "Lavender",
	colors: {
		primary: "#E6E6FA",
		secondary: "#D8BFD8",
		background: "#FFF0F5",
		foreground: "#8A2BE2",
	},
	dark: {
		colors: {
			primary: "#8A2BE2",
			secondary: "#9932CC",
			background: "#2F4F4F",
			foreground: "#F0F8FF",
		},
	},
};

export const cyberpunkTheme: Theme = {
	name: "Cyberpunk",
	colors: {
		primary: "#00FF00",
		secondary: "#FF00FF",
		background: "#1C1C1C",
		foreground: "#FFFFFF",
	},
	dark: {
		colors: {
			primary: "#32CD32",
			secondary: "#FF1493",
			background: "#000000",
			foreground: "#F5F5F5",
		},
	},
};

export const autumnTheme: Theme = {
	name: "Autumn",
	colors: {
		primary: "#FF8C00",
		secondary: "#A0522D",
		background: "#FFD700",
		foreground: "#8B4513",
	},
	dark: {
		colors: {
			primary: "#D2691E",
			secondary: "#800000",
			background: "#2F4F4F",
			foreground: "#F0E68C",
		},
	},
};
export const allThemes = [
	sunsetTheme,
	oceanTheme,
	forestTheme,
	midnightTheme,
	cherryBlossomTheme,
	desertTheme,
	limeTheme,
	lavenderTheme,
	cyberpunkTheme,
	autumnTheme,
];
