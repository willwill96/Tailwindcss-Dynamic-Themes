import type { Metadata } from "next";
import "./globals.css";
import ProductionStyleImporter from "@/components/ProductionStyleImporter";

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
			<head>
				<ProductionStyleImporter />
			</head>
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
