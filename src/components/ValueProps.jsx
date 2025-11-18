export default function ValueProps() {
  const items = [
    {
      title: 'Clarity and speed',
      text: 'Defined modules, fewer decisions on site. Faster approvals, predictable delivery.',
    },
    {
      title: 'Quality and performance',
      text: 'Factory precision with engineered connections. High thermal and acoustic performance.',
    },
    {
      title: 'Scalable and flexible',
      text: 'From single buildings to multi‑phase developments. Reconfigure modules as needs evolve.',
    },
    {
      title: 'Lower carbon',
      text: 'Optimized materials and off‑site assembly reduce waste and site disruption.',
    },
  ]
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="grid gap-2">
              <h3 className="text-base font-semibold text-slate-900">{it.title}</h3>
              <p className="text-sm text-slate-600 leading-6">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
