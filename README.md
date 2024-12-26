# Tailwindcss-Dynamic-Themes
Example of Tailwindcss using dynamically SSR'ed css variables.

# Problem Statement

Serving multiple themes from Tailwindcss can be pretty powerful. This repo serves as an example of ways that you can support multiple themes in your tailwind+next.js app. This repo & readme assumes that you have already decided to theme your tailwind styles with css variables. See [tailwind docs](https://tailwindcss.com/docs/customizing-colors#using-css-variables) for more info on how to setup your tailwind colors using css variables. The goal of these examples is to have a single app deliver multiple themes, without meaningfully impacting bundle sizes as the number of themes grow. In this example, I'm dynamically rendering the theme based on a cookie (`theme`), but these approaches could also be adapted to be based on other cookies, headers or other request parameters. 


# Example 1 - Inject CSS Variables into the initial html as inline styles

See the code in [./inject-inline](./inject-inline) for how this is setup. The general idea here is:

1. Define your colors in your tailwind config using css variables
2. Inject the css variables into your page's returned html (most likely through your root layout file)

These are the important parts of this example:


Pros:

- Relatively easy to implement

Cons:

- Embeds the styles for css variables into your html, rather than CSS which prevents the styles from being cached behind a CDN (without caching the html file itself)


# Example 2 - Inject Additional Stylesheets into the initial html as links to css files

See the code in [./extra-stylesheets](./extra-stylesheets) for how this is setup. The general idea here is:

1. Remove tailwindcss from the app's global css file
2. Build the CSS files for tailwind after nextjs 

These are the important parts of this example:

- [Tailwind Theme Definitions](./src/tailwind/themes.ts)
- [A custom tailwindcss plugin](./src/tailwind/dynamic-theme-plugin.ts) which adds the css variables for the configured theme to the tailwind base definitions.
- [A postbuild script](./create-tailwind-theme-files.ts) which generates css files for each of your various themes, then adds a file hash to those file names. This script also adds an environment variable to the `.env.production` file with a list of themes to filenames that is referenced in the next part.
- [A server component to inject the proper stylesheet for the current theme](./src/components/ProductionStyleImporter.tsx). This component reads in the current theme from the incoming cookies, cross-references that against the list of themes to filenames in the previous example, and finally, injects the proper stylesheet into the returned html
- Various workarounds to ensure local dev worked as expected
    - This approach utilizes an environment variable `TAILWIND_THEME` to determine the current theme. The `tailwind.config.ts` file does not receive updates to `process.env` variable updates when you make updates the `.env.development` file, so there is a [custom utility for grabbing the current value](./src/tailwind/get-local-theme.ts)
    - [A webpack/turbo plugin to ensure tailwind styles are available in development](./next.config.ts)
    - [Some extra logic within the route handler](./src/app/switch-themes/route.ts) to update the `.env.development` file with the new theme value (for when you select a new theme in the UI)



Pros:

- CSS Variables are part of your css files, meaning they can be cached behind the cdn.

Cons:

- Much more complex setup
- A little finicky when it comes to development mode
- This example does not integrate directly with next.js so an extra css file needs to be loaded on each page