import { useI18n } from '../i18n'

export default function Footer() {
  const { tx } = useI18n()
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold">T</div>
              <div className="font-semibold text-slate-900">Tadeemco</div>
            </div>
            <p className="mt-3 text-slate-600">Engineering, ICT, and ELV solutions for mission‑critical environments.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">{tx('footer.services')}</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>Structured Cabling</li>
              <li>ELV Systems</li>
              <li>Security Solutions</li>
              <li>Data Centers</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">{tx('footer.company')}</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>About</li>
              <li>Projects</li>
              <li>Clients</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">{tx('footer.contact')}</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>info@tadeemco.com</li>
              <li>+974 0000 0000</li>
              <li>Doha, Qatar</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-slate-500">
          <p>{tx('footer.copy')(year)}</p>
          <p>{tx('footer.built')}</p>
        </div>
      </div>
    </footer>
  )
}
