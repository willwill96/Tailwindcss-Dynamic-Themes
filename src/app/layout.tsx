import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Tailwindcss Dynamic Themes",
	description: "Examples of Dynamic Themes using Tailwind",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
