import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-surface pt-16">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6">
          Cultura abierta · Iberoamérica · Remix
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight max-w-3xl mb-6">
          El cine inacabado se convierte en nuevo cine
        </h1>

        <p className="text-base text-white/60 max-w-xl mb-10 leading-relaxed">
          CineXpress es un ecosistema donde proyectos abandonados y material de archivo
          se transforman en nuevas obras.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/archivo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-surface text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Explorar el archivo →
          </Link>
          <Link
            href="/archivo#donar"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-sm font-medium hover:border-white transition-colors"
          >
            Donar material
          </Link>
        </div>
      </div>
    </section>
  )
}
