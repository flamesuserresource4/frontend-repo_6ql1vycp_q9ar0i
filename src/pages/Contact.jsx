import { useState } from 'react'
import Layout from '../components/Layout'

const backend = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  async function submit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.consent = Boolean(form.get('consent'))

    setStatus({ state: 'loading', message: 'Sending…' })
    try {
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus({ state: 'success', message: 'Thanks — we will be in touch shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Request consultation</h1>
          <p className="mt-3 text-slate-600">Tell us briefly about your project. We’ll reply within two business days.</p>

          <form onSubmit={submit} className="mt-8 grid gap-5">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input name="name" required className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Work email</label>
              <input name="email" type="email" required className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Company</label>
              <input name="company" className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Role</label>
              <input name="role" className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Phone</label>
              <input name="phone" className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none" />
            </div>

            <div className="grid gap-2 md:grid-cols-3">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">Project type</label>
                <select name="project_type" className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none">
                  <option value="">Select</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Hospitality</option>
                  <option>Education</option>
                  <option>Healthcare</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">Timeline</label>
                <select name="timeline" className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none">
                  <option value="">Select</option>
                  <option>&lt;3 months</option>
                  <option>3-6 months</option>
                  <option>6-12 months</option>
                  <option>&gt;12 months</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">Budget</label>
                <select name="budget_range" className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none">
                  <option value="">Select</option>
                  <option>&lt; $1M</option>
                  <option>$1M-$5M</option>
                  <option>$5M-$20M</option>
                  <option>&gt; $20M</option>
                </select>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Project brief</label>
              <textarea name="message" rows={5} className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none" />
            </div>

            <label className="inline-flex items-center gap-3 text-sm text-slate-600">
              <input name="consent" type="checkbox" required />
              I agree to be contacted about this inquiry.
            </label>

            <div className="flex items-center gap-4">
              <button type="submit" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                {status.state === 'loading' ? 'Sending…' : 'Send request'}
              </button>
              {status.message && (
                <p className={`text-sm ${status.state === 'error' ? 'text-red-600' : 'text-slate-600'}`}>{status.message}</p>
              )}
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
