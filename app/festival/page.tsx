import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata: Metadata = {
  title: 'INFINITE REEL — Festival Iberoamericano de Cine Remix',
  description: 'El primer festival iberoamericano de cine open source. Primavera 2027.',
}

const CATEGORIES = ['Cortometraje remix', 'Videoarte', 'Documental experimental', 'IA + archivo']

export default function FestivalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="max-w-3xl mx-auto px-6 py-24 text-center">
          <span className="text-xs uppercase tracking-widest text-festival border border-festival/40 px-3 py-1 inline-block mb-8">
            Próximamente · Primavera 2027
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-tight">INFINITE REEL</h1>
          <p className="text-lg text-white/60 mb-4">Festival Iberoamericano de Cine Remix</p>
          <p className="text-sm text-white/40 max-w-xl mx-auto mb-12 leading-relaxed">
            Acceso gratuito. Todo el material debe incluir contenido del archivo abierto de CineXpress.
            Obras bajo licencia Creative Commons mínimo CC BY-SA 4.0.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((cat) => (
              <span key={cat} className="text-xs text-white/50 border border-white/20 px-3 py-1.5">
                {cat}
              </span>
            ))}
          </div>
          <div className="border-t border-white/10 pt-12">
            <p className="text-sm text-white/40 mb-6">
              Únete a la lista de espera — te avisamos cuando abramos la convocatoria oficial.
            </p>
            <WaitlistForm source="festival-page" className="max-w-md mx-auto" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
