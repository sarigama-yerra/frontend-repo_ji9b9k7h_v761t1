export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About Tadeemco</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We are an engineering‑first ICT and ELV solutions provider, delivering reliable infrastructure for enterprises and government. Our teams combine rigorous project management, certified engineering practices, and safety standards to deliver systems that last.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              ['ISO 9001:2015', 'Quality management'],
              ['ISO 27001', 'Information security'],
              ['HSE Compliant', 'Safety‑first operations'],
              ['Certified Engineers', 'Multi‑vendor expertise']
            ].map(([a,b]) => (
              <div key={a} className="rounded-xl border border-slate-200 p-4">
                <div className="text-sm font-semibold text-slate-900">{a}</div>
                <div className="text-xs text-slate-600">{b}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1600&auto=format&fit=crop" alt="About" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
