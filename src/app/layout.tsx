import type { Metadata } from "next";
import "./globals.css";
import { cookies } from "next/headers";

export const metadata: Metadata = {
	title: "Tailwindcss Dynamic Themes",
	description: "Examples of Dynamic Themes using Tailwind",
};

// Not ideal since this is not very typesafe and as the list grows it could be pretty large. Better to have these styles cached behind cdn via css files
const themes = {
	red: {
		styles: [
			`
    --primary-color: red;
    --secondary-color: orange;
    `,
		],
	},
	blue: {
		styles: [
			`
      --primary-color: blue;
      --secondary-color: teal;
      `,
		],
	},
};
export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const blueTheme = cookieStore.get("theme")?.value === "blue";
	return (
		<html lang="en">
			<body className={`antialiased`}>
				{children}

				<style>{`:root{${blueTheme ? themes.blue.styles : themes.red.styles}}`}</style>
			</body>
		</html>
	);
}
