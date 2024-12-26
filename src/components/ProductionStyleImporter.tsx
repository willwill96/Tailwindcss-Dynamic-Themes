import { cookies } from "next/headers";
import ReactDOM from "react-dom";

const getThemeConfigs = (input: string) => {
	if (!input) return {}
	const pairs = input.split(';')
	return pairs.reduce((acc, curr)=>{
		const [name, fileName] = curr.split(',')
		acc[name] = fileName
		return acc
	}, {} as Record<string, string>)
}

const themeConfigs = getThemeConfigs(process.env.TAILWIND_DYNAMIC_THEMES || '')

export default async function ProductionStyleImporter() {
	if (process.env.NODE_ENV === "development") return null;
	const cookieStore = await cookies();
	const themeCookie = cookieStore.get("theme");
	const themeCookieValue = themeCookie?.value || '';
	const cssFilename = themeConfigs[themeCookieValue] || themeConfigs['Sunset'] 
		ReactDOM.preload(
			`/_next/static/css/${cssFilename}.css`,
			{ as: "style" },
		);
	return (
		<link
			rel="stylesheet"
			href={`/_next/static/css/${cssFilename}.css`
			}
		/>
	);
}
