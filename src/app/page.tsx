
export default async function Home({...params}) {
  const searchParams = await params.searchParams

  const condition = searchParams.test !== undefined
  console.log('condition', condition)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
        <h1>Primary</h1>
          <button className="bg-primary">I'm a primary button</button>
        </div>
        <div>
        <h1>Secondary</h1>
          <button className="bg-secondary">I'm a secondary button</button>
        </div>
      </main>
    </div>
  );
}
