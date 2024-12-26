import { allThemes } from "../themes"
import { existsSync, readFileSync } from "fs"
import { join } from "path"

// I would prefer to use process.cwd() to calculate this, but nextjs chooses not to hot reload this file when using process.cwd()
const envDevelopmentFile = join(__dirname, '../../.env.development')

export function getLocalTheme() {
    if (existsSync(envDevelopmentFile)) {
        const envRes = readFileSync(envDevelopmentFile).toString()

        const match = envRes.match(/TAILWIND_THEME=(.*)(?:\n|$)/)
	    if (match && match[1]) {
		    return match[1]
	    }
    }
    return allThemes[0].name
}