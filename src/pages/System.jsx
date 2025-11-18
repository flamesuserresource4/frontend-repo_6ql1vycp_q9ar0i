import Layout from '../components/Layout'

function Schematic({ type = 'living' }) {
  // Minimal blocky visuals to suggest module character without images
  if (type === 'facade') {
    return (
      <div className="h-20 w-full rounded-md border border-slate-200 bg-gradient-to-r from-blue-50 via-white to-blue-50 [background-size:16px_100%] [background-image:repeating-linear-gradient(90deg,theme(colors.blue.100)_0_1px,transparent_1px_16px)]" />
    )
  }
  if (type === 'circulation') {
    return (
      <div className="h-20 w-full rounded-md border border-slate-200 p-2">
        <div className="grid h-full grid-cols-6 gap-1">
          <div className="col-span-2 rounded bg-blue-100" />
          <div className="col-span-2 rounded bg-blue-200" />
          <div className="col-span-2 rounded bg-blue-100" />
          <div className="col-span-6 rounded bg-blue-300" />
        </div>
      </div>
    )
  }
  if (type === 'technical') {
    return (
      <div className="h-20 w-full rounded-md border border-slate-200 p-2">
        <div className="grid h-full grid-cols-4 gap-1">
          <div className="col-span-2 row-span-2 rounded bg-blue-200" />
          <div className="col-span-2 rounded bg-blue-100" />
          <div className="col-span-1 rounded bg-blue-100" />
          <div className="col-span-1 rounded bg-blue-100" />
        </div>
      </div>
    )
  }
  if (type === 'sanitary') {
    return (
      <div className="h-20 w-full rounded-md border border-slate-200 p-2">
        <div className="grid h-full grid-cols-3 gap-1">
          <div className="col-span-1 rounded bg-blue-200" />
          <div className="col-span-2 rounded bg-blue-100" />
          <div className="col-span-3 rounded bg-blue-50" />
        </div>
      </div>
    )
  }
  // living default
  return (
    <div className="h-20 w-full rounded-md border border-slate-200 p-2">
      <div className="grid h-full grid-cols-3 gap-1">
        <div className="rounded bg-blue-100" />
        <div className="rounded bg-blue-50" />
        <div className="rounded bg-blue-100" />
        <div className="col-span-3 rounded bg-blue-200" />
      </div>
    </div>
  )
}

export default function System() {
  const modules = [
    {
      key: 'living',
      title: 'Living module',
      desc: 'Primary habitable unit with integrated daylight, structure, and services interface.',
      data: [
        'Typical size: 3.6m x 7.2–12m, 2.8–3.0m floor-to-floor',
        'Usage: apartments, hospitality, student housing, offices',
        'Compatible: technical, sanitary, facade, circulation'
      ],
    },
    {
      key: 'technical',
      title: 'Technical module',
      desc: 'MEP spine with risers and plant; plugs into living and circulation cores.',
      data: [
        'Typical size: 1.8–3.6m x 7.2m',
        'Usage: mechanical, electrical, data, ventilation plant',
        'Compatible: living, sanitary, circulation'
      ],
    },
    {
      key: 'circulation',
      title: 'Circulation module (stairs, corridors)',
      desc: 'Vertical and horizontal movement core with fire-rated enclosure.',
      data: [
        'Typical size: 3.6m x 3.6–7.2m (stackable)',
        'Usage: stairs, lift lobby, corridor links',
        'Compatible: living, sanitary, facade, technical'
      ],
    },
    {
      key: 'sanitary',
      title: 'Sanitary module',
      desc: 'Prefinished wet cell with fixtures, membranes, and MEP connections.',
      data: [
        'Typical size: 1.8–2.4m x 2.4–3.0m',
        'Usage: bathrooms, accessible WCs, showers',
        'Compatible: living, technical, circulation'
      ],
    },
    {
      key: 'facade',
      title: 'Facade module',
      desc: 'High-performance envelope panel with interchangeable cladding.',
      data: [
        'Typical size: 1.2–3.6m width x storey height',
        'Usage: windows, solid panels, balcony interfaces',
        'Compatible: all module types'
      ],
    },
  ]

  const steps = [
    {
      title: 'Select modules',
      text: 'Choose from the standard library to match typology, performance, and budget.',
    },
    {
      title: 'Arrange modules',
      text: 'Assemble on a 3.6m grid: stack, mirror, and link via standardized interfaces.',
    },
    {
      title: 'Adapt to site and program',
      text: 'Tune facade, cores, and logistics for context, codes, and construction sequence.',
    },
  ]

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Our Modular System</h1>
          <p className="mt-4 text-slate-600 max-w-3xl">A kit of parts based on a 3.6m structural grid. Modules stack and link through standardized interfaces for structure, fire, and services. The result: rapid assembly, high performance, and predictable cost.</p>

          {/* Module library */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900">Module library</h2>
            <p className="mt-2 max-w-3xl text-slate-600">Standardized modules keep design flexible while streamlining manufacturing and approvals.</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((m) => (
                <div key={m.key} className="group rounded-xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md">
                  <Schematic type={m.key} />
                  <h3 className="mt-4 text-lg font-medium text-slate-900">{m.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{m.desc}</p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-700">
                    {m.data.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-sm bg-blue-500" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Planning logic */}
          <div className="mt-16 border-t border-slate-200 pt-10">
            <h2 className="text-xl font-semibold text-slate-900">Planning logic</h2>
            <p className="mt-2 max-w-3xl text-slate-600">A simple three-step workflow aligns design intent with manufacturing from day one.</p>

            <ol className="mt-6 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-medium">{i + 1}</div>
                    <h3 className="text-base font-medium text-slate-900">{s.title}</h3>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-14 w-24 rounded-md border border-slate-200 p-1">
                      <div className="grid h-full grid-cols-3 gap-0.5">
                        <div className="rounded bg-blue-100" />
                        <div className="rounded bg-blue-200" />
                        <div className="rounded bg-blue-100" />
                        <div className="col-span-3 rounded bg-blue-50" />
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* System pillars retained */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              ['Structure', 'Cold‑formed steel frames with integrated shear modules enable open plans and multi‑storey stacking.'],
              ['Envelope', 'High‑performance panels with interchangeable cladding options meet local codes and climate.'],
              ['Services', 'Pre‑routed MEP spines and plug‑and‑play connectors speed on‑site commissioning.'],
              ['Interiors', 'Prefinished modules for bathrooms, kitchens, and cores reduce site trades by up to 60%.'],
              ['Digital', 'Parametric design and BIM ensure coordination from concept to manufacturing.'],
              ['Logistics', 'Flat‑pack or volumetric delivery adapts to site constraints and crane capacity.'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-lg border border-slate-200 p-6">
                <h3 className="font-medium text-slate-900">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
