import { getTailwindThemeColors } from "./src/tailwind/get-tailwind-theme-colors";
import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: getTailwindThemeColors(),
		},
	},
	plugins: [],
} satisfies Config;
