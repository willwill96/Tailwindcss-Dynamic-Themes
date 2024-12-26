import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		turbo: {
			rules: {
				"layout.tsx": [
					{
						loader: "imports-loader",
						options: {
							imports:
								process.env.NODE_ENV === "production"
									? []
									: [
											{
												syntax: "side-effects",
												moduleName: "tailwindcss/tailwind.css",
											},
										],
						},
					},
				],
			},
		},
	},
	webpack: (webpackConfig) => {
		if (process.env.NODE_ENV === "production") return webpackConfig;
		webpackConfig.module.rules.push({
			test: /app\/layout.tsx$/,
			use: [
				{
					loader: "imports-loader",
					options: {
						imports: [
							{
								syntax: "side-effects",
								moduleName: "tailwindcss/tailwind.css",
							},
						],
					},
				},
			],
		});
		return webpackConfig;
	},
};

export default nextConfig;
