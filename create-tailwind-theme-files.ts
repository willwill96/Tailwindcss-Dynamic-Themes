import { execSync } from "child_process";
import { createReadStream, readFileSync, renameSync, writeFileSync } from "fs";
import crypto from "crypto";
import { allThemes } from "@/themes";

const themeNameToFileLocation = (themeName: string) => {
	return `./.next/static/css/${themeName}.css`;
};

const getFileHash = (path: string) =>
	new Promise((resolve, reject) => {
		const hash = crypto.createHash("sha256");
		const rs = createReadStream(path);
		rs.on("error", reject);
		rs.on("data", (chunk) => hash.update(chunk));
		rs.on("end", () => resolve(hash.digest("hex")));
	});

allThemes.forEach((theme) => {
	execSync(
		`TAILWIND_THEME=${theme.name} npx tailwindcss -i ./node_modules/tailwindcss/tailwind.css -o ${themeNameToFileLocation(`tailwind-${theme.name}`)}`,
	);
});

const locations = [] as { name: string; filename: string }[];

const convertFileNamesToFileHashes = async () => {
	for (let i = 0; i < allThemes.length; i++) {
		const themeName = allThemes[i].name;
		const filename = (
			(await getFileHash(
				themeNameToFileLocation(`tailwind-${themeName}`),
			)) as string
		).substring(0, 16);
		renameSync(
			themeNameToFileLocation(`tailwind-${themeName}`),
			themeNameToFileLocation(filename),
		);
		locations.push({ name: themeName, filename });
	}
	const envLines = locations.reduce((acc, curr) => {
		return acc.concat(`${curr.name},${curr.filename};`);
	}, "");

	const existingContents = readFileSync(".env.production").toString();
	writeFileSync(".env.production", `${existingContents}\nTAILWIND_DYNAMIC_THEMES=${envLines}`);
};

convertFileNamesToFileHashes();
