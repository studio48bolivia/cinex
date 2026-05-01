import WaitlistForm from './WaitlistForm'

export default function FestivalBlock() {
  return (
    <section className="bg-white/5 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <span className="text-xs uppercase tracking-widest text-festival border border-festival/40 px-3 py-1 mb-6 inline-block">
          Próximamente · Primavera 2027
        </span>

        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
          INFINITE REEL — Festival de Remix
        </h2>

        <p className="text-sm text-white/50 max-w-xl mb-10 leading-relaxed">
          El primer festival iberoamericano de cine open source. Cortometraje remix,
          videoarte, documental experimental e IA + archivo. Acceso gratuito.
        </p>

        <WaitlistForm source="home-festival" className="w-full max-w-md" />
      </div>
    </section>
  )
}
