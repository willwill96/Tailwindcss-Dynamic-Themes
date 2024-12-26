import type { Metadata } from "next";
import { cookies } from "next/headers";
import { allThemes } from "@/tailwind/themes";
import "./globals.css";
import { generateInlineCss } from "@/tailwind/generate-inline-css-vars";

export const metadata: Metadata = {
	title: "Tailwindcss Dynamic Themes",
	description: "Examples of Dynamic Themes using Tailwind",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const currentThemeName = cookieStore.get("theme")?.value;

	return (
		<html lang="en">
			<body className={`antialiased`}>
				{children}
				<style>
					{generateInlineCss(currentThemeName)}
				</style>
			</body>
		</html>
	);
}
