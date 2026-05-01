import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Manifiesto — Fractalización · Cultura Abierta',
  description: 'Por qué el material inacabado es la más honesta forma de cultura abierta.',
}

export default function ManifiestoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <article className="max-w-2xl mx-auto px-6 py-16">
          <header className="mb-12">
            <span className="text-xs uppercase tracking-widest text-manifiesto block mb-4">Manifiesto</span>
            <h1 className="text-3xl md:text-4xl font-medium text-white mb-4 leading-tight">
              El cine inacabado se convierte en nuevo cine
            </h1>
            <p className="text-sm text-white/40">Fractalización · Cultura abierta · Iberoamérica</p>
          </header>

          <div className="space-y-6 text-sm text-white/70 leading-relaxed">
            <p>
              Existe una cantidad incalculable de material cinematográfico iberoamericano
              que nunca llegó a ninguna pantalla. Proyectos abandonados por falta de financiación,
              metraje que quedó sin montar, obras que esperan en discos duros sin posibilidad de distribución.
            </p>
            <p>
              CineXpress parte de una premisa simple: ese material no está muerto. Está inacabado.
              Y lo inacabado es, en cierto modo, la más honesta forma de cultura: material en potencia,
              disponible para ser transformado.
            </p>
            <p>
              El ciclo que proponemos — Toma, Transforma, Comparte — no es una metáfora. Es una práctica.
              El material del archivo existe para ser descargado, cortado, mezclado, procesado y devuelto
              como algo nuevo. Ese algo nuevo vuelve al ciclo. Así funciona la cultura viva.
            </p>
            <p>
              No pedimos permiso para hacer cultura. Pedimos que el material que ya no le sirve a nadie
              en su forma original sirva a todos en sus infinitas formas posibles. Las licencias Creative
              Commons son la infraestructura jurídica de esa posibilidad.
            </p>
            <p>
              INFINITE REEL es la prueba de que esto produce cine. No remix como curiosidad académica.
              Cine iberoamericano real, surgido de material iberoamericano real, creado por cineastas
              iberoamericanos reales que no esperaron a que alguien les diera permiso.
            </p>
            <p className="text-white/30 text-xs pt-8 border-t border-white/10">
              CineXpress · cinexpress.net · Mayo 2026
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
