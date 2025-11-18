import Layout from '../components/Layout'

export default function UseCases() {
  const cases = [
    {
      title: 'Urban infill housing',
      text: 'Deliver mid‑rise residential quickly on tight sites with minimal disruption.',
    },
    {
      title: 'Student & key worker',
      text: 'Repeatable modules scale across campuses and healthcare estates.',
    },
    {
      title: 'Hospitality',
      text: 'Compact rooms and service cores assembled at speed reduce downtime.',
    },
    {
      title: 'Commercial & office',
      text: 'Flexible floorplates and adaptive fit‑out for evolving tenants.',
    },
    {
      title: 'Community buildings',
      text: 'Libraries, clinics, and civic spaces with assured accessibility and safety.',
    },
    {
      title: 'Education',
      text: 'Classrooms and labs delivered during holiday windows with assured quality.',
    },
  ]

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Use Cases</h1>
          <p className="mt-4 max-w-3xl text-slate-600">We work with developers, investors, municipalities, and commercial clients to deliver high‑performing buildings with reduced risk. Here are typical applications.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <div key={c.title} className="rounded-lg border border-slate-200 p-6">
                <h3 className="font-medium text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
