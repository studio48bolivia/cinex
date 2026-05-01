import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Laboratorio — Herramientas Open Source',
  description: 'Herramientas de código abierto y metodología de remix para cineastas.',
}

const TOOLS = [
  { name: 'DaVinci Resolve', description: 'Suite profesional de edición y color grading. Versión gratuita completamente funcional.', category: 'Edición', url: 'https://www.blackmagicdesign.com/products/davinciresolve' },
  { name: 'Kdenlive', description: 'Editor de vídeo open source multiplataforma. Ideal para proyectos de remix colaborativo.', category: 'Edición', url: 'https://kdenlive.org' },
  { name: 'Shotcut', description: 'Editor ligero open source. Soporta todos los formatos sin transcodificación.', category: 'Edición', url: 'https://shotcut.org' },
  { name: 'Audacity', description: 'Editor de audio multiplataforma para trabajar con el sonido de tus remixes.', category: 'Audio', url: 'https://www.audacityteam.org' },
  { name: 'Blender', description: 'Suite de creación 3D y VFX open source. Perfecto para videoarte y compositing.', category: 'VFX', url: 'https://www.blender.org' },
  { name: 'FFmpeg', description: 'Herramienta de línea de comandos para conversión y procesamiento masivo de vídeo.', category: 'Conversión', url: 'https://ffmpeg.org' },
]

export default function LaboratorioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-laboratorio block mb-3">Donde ocurre el remix</span>
            <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">Herramientas open source</h1>
            <p className="text-sm text-white/50 max-w-xl leading-relaxed">
              Todo lo que necesitas para transformar el material del archivo en nuevas obras. Gratuito, libre, iberoamericano.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {TOOLS.map((tool) => (
              <div key={tool.name} className="bg-surface p-6 hover:bg-white/5 transition-colors">
                <span className="text-xs text-laboratorio uppercase tracking-widest block mb-3">{tool.category}</span>
                <h3 className="text-base font-medium text-white mb-2">{tool.name}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-4">{tool.description}</p>
                <a href={tool.url} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest">
                  Ver herramienta →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
