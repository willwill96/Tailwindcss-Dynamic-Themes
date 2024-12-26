import HomePage from "@/components/pages/HomePage";
import { allThemes } from "@/tailwind/themes";
import { cookies } from "next/headers";

export default async function Home() {
	const cookieStore = await cookies();
	const currentTheme = cookieStore.get("theme")?.value || allThemes[0].name;

	return <HomePage currentTheme={currentTheme} />;
}
