import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-0 opacity-100">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-white pointer-events-none" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-white/10 px-3 py-1 text-xs font-medium text-blue-100 ring-1 ring-inset ring-white/10 backdrop-blur">
            Engineering • ICT • ELV
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Engineering excellence for connected infrastructure
          </h1>
          <p className="mt-4 text-lg text-blue-100 leading-relaxed">
            Tadeemco delivers end‑to‑end ICT, ELV, and structured cabling solutions for mission‑critical environments. We design, build, and maintain systems that power smart buildings and resilient networks.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700 transition-colors">Request a proposal</a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-slate-800 font-medium bg-white/90 hover:bg-white transition-colors">View projects</a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              ['15+','Years'],
              ['200+','Projects'],
              ['ISO','Certified'],
              ['24/7','Support']
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-white/70 backdrop-blur border border-slate-200 p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-slate-900">{k}</div>
                <div className="text-xs uppercase tracking-wide text-slate-600">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
