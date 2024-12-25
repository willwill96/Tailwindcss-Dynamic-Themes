import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

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
  params,
  ...rest
}: Readonly<{
	children: React.ReactNode;
  
}>) {
  const searchParams = await params
  console.log('rest', searchParams)

  const blueTheme = searchParams.get('theme') === 'blue'
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
			<style>{`:root{${blueTheme ? themes.blue.styles : themes.red.styles}}`}</style>
		</html>
	);
}
