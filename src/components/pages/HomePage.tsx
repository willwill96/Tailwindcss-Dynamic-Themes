"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { allThemes } from "@/themes";

interface HomePageProps {
	currentTheme: string;
}

export default function HomePage(props: HomePageProps) {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-8 row-start-2 items-center w-full h-full justify-items-center">
				<h1 className="text-3xl font-semibold text-gray-200 rounded">
					Tailwindcss Dynamic Themes Example
				</h1>

				<div>
					<TooltipProvider delayDuration={0}>
						<Tooltip>
							<TooltipTrigger asChild>
								<label className="flex flex-col">
									<span>Use this dropdown to select your theme</span>
									<select
										className="text-black p-2 rounded"
										defaultValue={props.currentTheme}
										onChange={async (e) => {
											await fetch(`/switch-themes?theme=${e.target.value}`);
											window.location.reload();
										}}
									>
										{allThemes.map((theme) => {
											return (
												<option key={theme.name} value={theme.name}>
													{theme.name}
												</option>
											);
										})}
									</select>
								</label>
							</TooltipTrigger>
							<TooltipContent side="right">
								<div className="text-base">
									Selecting an option from this dropdown will trigger a cookie
									&quot;theme&quot; to be reset and then reload the page
								</div>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
				<div className="flex gap-2">
					<button className="bg-primary text-lg p-1 rounded">
						I&apos;m a primary button
					</button>
					<button className="bg-secondary text-lg p-1 rounded">
						I&apos;m a secondary button
					</button>
				</div>
			</main>
		</div>
	);
}
