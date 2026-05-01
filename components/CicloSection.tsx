import Link from 'next/link'

const STEPS = [
  {
    number: '01',
    title: 'Toma',
    description: 'Descarga material del archivo: proyectos abandonados, metraje donado, joyas del cine iberoamericano con licencia abierta.',
    href: '/archivo',
    color: 'text-archivo',
  },
  {
    number: '02',
    title: 'Transforma',
    description: 'Usa las herramientas del laboratorio y el material que encontraste para crear algo completamente nuevo.',
    href: '/laboratorio',
    color: 'text-laboratorio',
  },
  {
    number: '03',
    title: 'Comparte',
    description: 'Sube tu obra a la comunidad. Si quieres, devuelve el material transformado al archivo.',
    href: '/comunidad',
    color: 'text-comunidad',
  },
]

export default function CicloSection() {
  return (
    <section className="bg-white/5 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {STEPS.map((step) => (
          <Link
            key={step.number}
            href={step.href}
            aria-label={step.title}
            className="p-8 hover:bg-white/5 transition-colors group"
          >
            <span className={`text-xs font-mono tracking-widest ${step.color} mb-4 block`}>
              {step.number}
            </span>
            <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
