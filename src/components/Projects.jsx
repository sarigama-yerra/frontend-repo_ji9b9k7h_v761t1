const projects = [
  {
    title: 'Smart Campus Network Overhaul',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    tags: ['Fiber Backbone', 'Wi‑Fi 6', 'Security']
  },
  {
    title: 'Tier III Data Center Build',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop',
    tags: ['Cooling', 'Redundancy', 'Monitoring']
  },
  {
    title: 'Citywide CCTV Expansion',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    tags: ['CCTV', 'Analytics', 'Command Center']
  },
  {
    title: 'Hospital ELV Integration',
    img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop',
    tags: ['Nurse Call', 'Access Control', 'PA/BGM']
  },
  {
    title: 'Metro Fiber Deployment',
    img: 'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=1600&auto=format&fit=crop',
    tags: ['OSP', 'FTTx', 'Testing']
  },
  {
    title: 'Corporate HQ Fit‑out',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    tags: ['Cabling', 'Wi‑Fi', 'Security']
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Projects</h2>
          <p className="mt-3 text-slate-600">Selected work showcasing complex deployments and reliable delivery.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
