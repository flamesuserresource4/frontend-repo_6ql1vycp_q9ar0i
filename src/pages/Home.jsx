import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ValueProps from '../components/ValueProps'
import Trust from '../components/Trust'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ValueProps />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">How our system delivers certainty</h2>
              <p className="mt-4 text-slate-600">We combine architectural design, structural logic, and digital manufacturing to reduce risk and compress schedules. Modules arrive complete, connect quickly on site, and scale across projects.</p>
            </div>
            <ul className="grid gap-6">
              {[
                ['Design to manufacturing', 'Parametric design drives fabrication data for zero‑ambiguity production.'],
                ['Standardized interfaces', 'Proprietary connections and service corridors simplify assembly and maintenance.'],
                ['Integrated MEP', 'Pre‑routed services reduce coordination on site and speed commissioning.'],
                ['Assured compliance', 'Modules pre‑certified for structural, fire, and accessibility requirements.'],
              ].map(([t, d]) => (
                <li key={t} className="rounded-lg border border-slate-200 p-6">
                  <h3 className="font-medium text-slate-900">{t}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Trust />
      <CTA />
    </Layout>
  )
}
