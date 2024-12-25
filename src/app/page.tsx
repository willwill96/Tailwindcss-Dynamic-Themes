"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
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
								<button
									className="bg-primary p-1 rounded text-lg"
									onClick={async () => {
										await fetch("/switch-themes");
										window.location.reload();
									}}
								>
									Click here to switch themes
								</button>
							</TooltipTrigger>
							<TooltipContent side="right">
								<div className="text-base">
									Clicking this button will toggle a cookie &quot;theme&quot;
									and then reload the page
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
