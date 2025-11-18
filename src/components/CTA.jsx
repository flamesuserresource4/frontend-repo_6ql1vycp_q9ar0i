import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-14 text-white shadow-lg">
        <div className="grid gap-6 md:grid-cols-3 md:items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight">Plan your project with confidence</h3>
            <p className="mt-2 text-blue-100">Speak with our architects to assess feasibility, program, and delivery schedule using our modular system.</p>
          </div>
          <div className="md:text-right">
            <Link to="/contact" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-medium text-blue-700 hover:bg-blue-50">
              Request consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
