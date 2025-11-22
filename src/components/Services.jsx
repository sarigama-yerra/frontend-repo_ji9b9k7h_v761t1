import { Server, Network, Shield, Cable, Building2, Antenna, Cpu, Router } from 'lucide-react'
import { useI18n } from '../i18n'

const icons = [Network, Building2, Shield, Server, Router, Cpu, Cable, Antenna]

export default function Services() {
  const { t, useList } = { t: (k) => null }
  const { tx } = useI18n()
  const items = tx('services.items') || []
  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{tx('services.title')}</h2>
          <p className="mt-3 text-slate-600">{tx('services.desc')}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, desc }, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
