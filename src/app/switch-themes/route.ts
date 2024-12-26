import { existsSync, readFileSync, writeFileSync } from "fs";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { join } from "path";

export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const theme = url.searchParams.get("theme");

	if (!theme) return new Response(null, { status: 400 });

	const cookieStore = await cookies();

	cookieStore.set("theme", theme);

	if (process.env.NODE_ENV === "development") {
		const envDevelopmentLocation = join(process.cwd(), ".env.development");
		const tailwindThemeSnippet = `TAILWIND_THEME=${theme}`;
		let contents;
		if (existsSync(envDevelopmentLocation)) {
			const currentContents = readFileSync(envDevelopmentLocation).toString();
			contents = currentContents.includes("TAILWIND_THEME")
				? currentContents.replace(
						/^TAILWIND_THEME=([^\n$]*)/,
						tailwindThemeSnippet,
					)
				: currentContents.concat(tailwindThemeSnippet);
		} else {
			contents = tailwindThemeSnippet;
		}
		writeFileSync(envDevelopmentLocation, contents);
	}

	return new Response(null, { status: 202 });
}
