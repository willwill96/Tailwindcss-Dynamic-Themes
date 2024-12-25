export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div>
					<h1>Primary</h1>
					<button className="bg-primary p-2 rounded">
						I&apos;m a primary button
					</button>
				</div>
				<div>
					<h1>Secondary</h1>
					<button className="bg-secondary p-2 rounded">
						I&apos;m a secondary button
					</button>
				</div>
			</main>
		</div>
	);
}
