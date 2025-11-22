const clients = [
  'https://dummyimage.com/160x60/edf2f7/2d3748&text=Client+1',
  'https://dummyimage.com/160x60/edf2f7/2d3748&text=Client+2',
  'https://dummyimage.com/160x60/edf2f7/2d3748&text=Client+3',
  'https://dummyimage.com/160x60/edf2f7/2d3748&text=Client+4',
  'https://dummyimage.com/160x60/edf2f7/2d3748&text=Client+5',
  'https://dummyimage.com/160x60/edf2f7/2d3748&text=Client+6',
  'https://dummyimage.com/160x60/edf2f7/2d3748&text=Client+7',
  'https://dummyimage.com/160x60/edf2f7/2d3748&text=Client+8',
]

export default function Clients() {
  return (
    <section id="clients" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Clients & Partners</h2>
          <p className="mt-3 text-slate-600">Trusted by organizations across telecom, education, healthcare, and government.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {clients.map((src, i) => (
            <div key={i} className="flex items-center justify-center p-4 rounded-lg border border-slate-200 bg-white hover:shadow-sm transition-shadow">
              <img src={src} alt={`Client ${i+1}`} className="max-h-10 opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
