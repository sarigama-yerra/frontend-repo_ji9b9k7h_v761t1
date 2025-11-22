export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact</h2>
          <p className="mt-3 text-slate-600">Tell us about your project. Our engineering team will get back within one business day.</p>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Organization" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="name@company.com" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Service</label>
              <select className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600">
                <option>Structured Cabling</option>
                <option>ELV Systems</option>
                <option>Security Solutions</option>
                <option>Data Centers</option>
                <option>Wireless & Mobility</option>
                <option>ICT Integration</option>
                <option>Telecom & FO</option>
                <option>Telephony & IP</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Project details, timelines, scope" />
            </div>
            <div className="mt-6">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700 transition-colors">Send message</button>
            </div>
          </form>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Head Office</h3>
            <p className="mt-2 text-sm text-slate-600">Tadeemco, Doha, Qatar</p>
            <div className="mt-4 text-sm text-slate-700">
              <p><span className="font-medium">Email:</span> info@tadeemco.com</p>
              <p className="mt-1"><span className="font-medium">Phone:</span> +974 0000 0000</p>
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
