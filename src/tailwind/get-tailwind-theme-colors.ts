import { sunsetTheme } from "./themes";

export function getTailwindThemeColors() {
    return Object.keys(sunsetTheme.colors).reduce((acc, curr)=>{
        acc[curr] = `var(--color-${curr})`
        return acc
    }, {} as Record<string, string>)
}