import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/system', label: 'Our Modular System' },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg" />
              <span className="font-semibold tracking-tight">ModuBuild Architects</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) => `text-sm transition-colors ${isActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}`}
                >
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Request consultation
              </Link>
            </nav>

            <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200/70">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-2">
              {nav.map((n) => (
                <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-sm text-slate-700">
                  {n.label}
                </NavLink>
              ))}
              <Link onClick={() => setOpen(false)} to="/contact" className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                Request consultation
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-24 border-t border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-sm bg-gradient-to-br from-blue-500 to-blue-700" />
              <span className="font-semibold">ModuBuild Architects</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Innovative modular systems for high‑quality, scalable prefabricated construction.</p>
          </div>
          <div className="text-sm">
            <p className="font-medium text-slate-900">Company</p>
            <div className="mt-3 grid gap-2">
              <Link to="/about" className="text-slate-600 hover:text-blue-700">About</Link>
              <Link to="/legal" className="text-slate-600 hover:text-blue-700">Legal</Link>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-medium text-slate-900">Contact</p>
            <div className="mt-3 grid gap-2 text-slate-600">
              <p className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 012-3456</p>
              <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@modubuild.example</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
