import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const theme = url.searchParams.get("theme");

	if (!theme) return new Response(null, { status: 400 });

	const cookieStore = await cookies();

	cookieStore.set("theme", theme);

	return new Response(null, { status: 202 });
}
