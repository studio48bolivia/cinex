import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Comunidad — Red Iberoamericana',
  description: 'Conecta con cineastas de toda Iberoamérica.',
}

export default function ComunidadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <span className="text-xs uppercase tracking-widest text-comunidad block mb-4">Red iberoamericana</span>
          <h1 className="text-3xl md:text-4xl font-medium text-white mb-6">Comunidad CineXpress</h1>
          <p className="text-sm text-white/50 leading-relaxed mb-10 max-w-md mx-auto">
            Portafolios de cineastas, blog colectivo y proyectos colaborativos.
            Esta sección estará disponible próximamente para miembros registrados.
          </p>
          <Link
            href="/auth"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-sm hover:border-white transition-colors"
          >
            Registrarse para acceder
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
