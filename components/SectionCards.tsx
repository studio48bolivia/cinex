import Link from 'next/link'

const CARDS = [
  {
    label: 'ARCHIVO',
    title: 'El archivo vivo',
    description: 'Proyectos abandonados, metraje donado y joyas del cine iberoamericano bajo licencia abierta.',
    href: '/archivo',
    labelColor: 'text-archivo',
  },
  {
    label: 'LABORATORIO',
    title: 'Donde ocurre el remix',
    description: 'Herramientas open source, metodología de remix y recursos para cineastas que aprenden haciendo.',
    href: '/laboratorio',
    labelColor: 'text-laboratorio',
  },
  {
    label: 'COMUNIDAD',
    title: 'Red iberoamericana',
    description: 'Portafolios de cineastas, blog colectivo y conexiones entre creadores de toda Iberoamérica.',
    href: '/comunidad',
    labelColor: 'text-comunidad',
  },
  {
    label: 'MANIFIESTO',
    title: 'La filosofía del proyecto',
    description: 'Fractalización del cine. Por qué el material inacabado es la más honesta forma de cultura abierta.',
    href: '/manifiesto',
    labelColor: 'text-manifiesto',
  },
]

export default function SectionCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
        {CARDS.map((card) => (
          <div key={card.label} className="bg-surface p-8 hover:bg-white/5 transition-colors">
            <span className={`text-xs font-medium tracking-widest uppercase ${card.labelColor} mb-4 block`}>
              {card.label}
            </span>
            <h3 className="text-xl font-medium text-white mb-3">{card.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed mb-6">{card.description}</p>
            <Link
              href={card.href}
              className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              Ver más →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
