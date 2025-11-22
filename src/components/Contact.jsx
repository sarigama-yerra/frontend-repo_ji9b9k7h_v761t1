import { useI18n } from '../i18n'

export default function Contact() {
  const { tx } = useI18n()
  const services = tx('contact.services') || []
  return (
    <section id="contact" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{tx('contact.title')}</h2>
          <p className="mt-3 text-slate-600">{tx('contact.desc')}</p>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">{tx('contact.name')}</label>
                <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder={tx('contact.placeholderName')} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">{tx('contact.company')}</label>
                <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder={tx('contact.placeholderCompany')} />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">{tx('contact.email')}</label>
              <input type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder={tx('contact.placeholderEmail')} />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">{tx('contact.service')}</label>
              <select className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600">
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">{tx('contact.message')}</label>
              <textarea rows="5" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder={tx('contact.placeholderMessage')} />
            </div>
            <div className="mt-6">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700 transition-colors">{tx('contact.submit')}</button>
            </div>
          </form>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">{tx('contact.officeTitle')}</h3>
            <p className="mt-2 text-sm text-slate-600">{tx('contact.officePlace')}</p>
            <div className="mt-4 text-sm text-slate-700">
              <p><span className="font-medium">{tx('contact.labelEmail')}</span> info@tadeemco.com</p>
              <p className="mt-1"><span className="font-medium">{tx('contact.labelPhone')}</span> +974 0000 0000</p>
            </div>
            <div className="mt-6">
              <iframe title="map" className="w-full h-64 rounded-lg border border-slate-200" src="https://www.openstreetmap.org/export/embed.html?bbox=51.45%2C25.20%2C51.60%2C25.35&layer=mapnik"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
