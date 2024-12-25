import { cookies } from "next/headers";

export async function GET() {
	const cookieStore = await cookies();
	if (cookieStore.get("theme")?.value === "blue") {
		cookieStore.delete("theme");
	} else {
		cookieStore.set("theme", "blue");
	}
	return new Response(null, { status: 202 });
}
