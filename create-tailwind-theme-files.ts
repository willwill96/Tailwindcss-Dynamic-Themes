import { execSync } from "child_process";
import { redTheme, blueTheme } from "./src/themes";
import { createReadStream, readFileSync, renameSync, writeFileSync } from "fs";
import crypto from "crypto";

const themes = [redTheme, blueTheme];

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

themes.forEach((theme) => {
	execSync(
		`TAILWIND_THEME=${theme.name} npx tailwindcss -i ./node_modules/tailwindcss/tailwind.css -o ${themeNameToFileLocation(`tailwind-${theme.name}`)}`,
	);
});

const locations = [] as { name: string; filename: string }[];

const convertFileNamesToFileHashes = async () => {
	for (let i = 0; i < themes.length; i++) {
		const themeName = themes[i].name;
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
		return acc.concat(`\nTAILWIND_THEME_${curr.name}=${curr.filename}`);
	}, "");

	const existingContents = readFileSync(".env.production").toString();
	writeFileSync(".env.production", `${existingContents}${envLines}`);
};

convertFileNamesToFileHashes();
