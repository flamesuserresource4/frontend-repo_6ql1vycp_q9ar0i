import Layout from '../components/Layout'

export default function System() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Our Modular System</h1>
          <p className="mt-4 text-slate-600 max-w-3xl">A kit of parts based on a 3.6m structural grid. Modules stack and link through standardized interfaces for structure, fire, and services. The result: rapid assembly, high performance, and predictable cost.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
