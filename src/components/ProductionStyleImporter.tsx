import { cookies } from "next/headers";
import ReactDOM from "react-dom";

export default async function ProductionStyleImporter() {
	if (process.env.NODE_ENV === "development") return null;
	const cookieStore = await cookies();
	const themeCookie = cookieStore.get("theme");
	const themeCookieValue = themeCookie?.value;
	if (themeCookie?.value === "blue") {
		ReactDOM.preload(
			`/_next/static/css/${process.env.TAILWIND_THEME_blue}.css`,
			{ as: "style" },
		);
	} else {
		ReactDOM.preload(
			`/_next/static/css/${process.env.TAILWIND_THEME_red}.css`,
			{ as: "style" },
		);
	}
	return (
		<link
			rel="stylesheet"
			href={
				themeCookieValue === "blue"
					? `/_next/static/css/${process.env.TAILWIND_THEME_blue}.css`
					: `/_next/static/css/${process.env.TAILWIND_THEME_red}.css`
			}
		/>
	);
}
