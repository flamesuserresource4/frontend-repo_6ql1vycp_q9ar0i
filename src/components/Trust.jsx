export default function Trust() {
  const logos = ['Apex', 'Vertex', 'Nimbus', 'Atlas', 'Cobalt', 'Harbor']
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium tracking-wider text-slate-500">TRUSTED BY FORWARD‑THINKING DEVELOPERS</p>
        <div className="mt-6 grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div key={l} className="flex items-center justify-center rounded border border-slate-200 py-4 text-slate-500">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
