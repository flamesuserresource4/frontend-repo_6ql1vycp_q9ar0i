import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">About</h1>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <p className="text-slate-600 leading-7">We are an architecture team specializing in modular, prefabricated construction. Our system emerged from delivering complex projects where certainty of time, cost, and quality is critical. We pair design excellence with engineering rigor and digital manufacturing.</p>
            <p className="text-slate-600 leading-7">We work end‑to‑end: feasibility, planning, design, DfMA, and site assembly support. Our network of certified manufacturing partners ensures consistent quality and capacity across regions.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ['10+ years', 'Experience delivering modular projects'],
              ['30% faster', 'Typical schedule reduction'],
              ['<2% variation', 'Cost certainty through standardization'],
            ].map(([a,b]) => (
              <div key={a} className="rounded-lg border border-slate-200 p-6">
                <p className="text-2xl font-semibold text-blue-700">{a}</p>
                <p className="mt-2 text-sm text-slate-600">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
