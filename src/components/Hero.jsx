import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Modular building, engineered for speed and certainty
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Our patented modular system delivers high‑quality, low‑carbon buildings with predictable cost and schedule. Configure, manufacture, assemble.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Request consultation
              </Link>
              <Link to="/system" className="inline-flex items-center rounded-md border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:border-slate-300">
                How it works
              </Link>
            </div>
          </div>
          <div className="relative">
            {/* Abstract isometric blocks */}
            <div className="mx-auto h-72 w-full max-w-md">
              <div className="relative h-full w-full">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute aspect-square w-24 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg"
                    style={{
                      transform: `translate(${(i%3)*70}px, ${Math.floor(i/3)*70}px) skewY(-12deg) rotate(45deg)`,
                      opacity: 0.9 - (Math.floor(i/3) * 0.2),
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
