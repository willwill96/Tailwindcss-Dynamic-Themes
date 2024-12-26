import { getTailwindThemeColors } from "./src/tailwind/get-tailwind-theme-colors";
import { dynamicThemePlugin } from "./src/tailwind/dynamic-theme-plugin";
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
	plugins: [dynamicThemePlugin],
} satisfies Config;
