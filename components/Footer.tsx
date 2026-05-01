import Link from 'next/link'

const ALLIES = ['Cinemateca Boliviana', 'Asocine', 'MediaX', 'Punto Cero', 'Foco Dulce']

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-6 mb-10">
          {ALLIES.map((ally) => (
            <span key={ally} className="text-xs text-white/30 uppercase tracking-widest">
              {ally}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-white/10 pt-8">
          <p className="text-xs text-white/30">© CineXpress 2018–2026. Cultura abierta iberoamericana.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Política de privacidad
            </Link>
            <Link
              href="mailto:studio48bolivia@gmail.com"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
