import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArchiveMaterial } from '@/types'

export const metadata: Metadata = {
  title: 'Archivo — Material Audiovisual Abierto',
  description: 'Proyectos inacabados, metraje donado y joyas del cine iberoamericano con licencia abierta.',
}

const SEED_MATERIALS: ArchiveMaterial[] = [
  {
    id: '1', title: 'El silencio del altiplano',
    description: 'Documental boliviano inacabado. 40 min de metraje 4K del altiplano andino.',
    author: 'Marco Quispe', country: 'Bolivia', type: 'project',
    license: 'CC BY-SA 4.0', file_url: null, created_at: '2024-03-15',
  },
  {
    id: '2', title: 'Fragmentos de ciudad — Buenos Aires 2019',
    description: 'Imágenes urbanas de Buenos Aires durante las protestas de 2019. Material sin editar.',
    author: 'Valentina Morales', country: 'Argentina', type: 'footage',
    license: 'CC BY 4.0', file_url: null, created_at: '2024-05-20',
  },
  {
    id: '3', title: 'La última función',
    description: 'Cortometraje de ficción sobre el cierre de los últimos cines de barrio en México DF.',
    author: 'Diego Hernández', country: 'México', type: 'film',
    license: 'CC BY-SA 4.0', file_url: null, created_at: '2024-07-01',
  },
  {
    id: '4', title: 'Voces del Pacífico',
    description: 'Entrevistas con pescadores artesanales de Chile y Perú. Material de investigación.',
    author: 'Ana Soto', country: 'Chile', type: 'footage',
    license: 'CC BY-NC-SA 4.0', file_url: null, created_at: '2024-09-10',
  },
  {
    id: '5', title: 'Carnaval sin fin',
    description: 'Proyecto de videoarte sobre la identidad cultural en el Carnaval de Oruro.',
    author: 'Lucía Mamani', country: 'Bolivia', type: 'project',
    license: 'CC BY-SA 4.0', file_url: null, created_at: '2025-01-05',
  },
]

const TYPE_LABEL: Record<string, string> = { project: 'Proyecto', footage: 'Metraje', film: 'Película' }

export default function ArchivoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-archivo block mb-3">El archivo vivo</span>
            <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">Material audiovisual abierto</h1>
            <p className="text-sm text-white/50 max-w-xl leading-relaxed">
              Proyectos inacabados, metraje donado y obras bajo licencia Creative Commons.
              Toma lo que necesitas. Transforma. Devuelve al ciclo.
            </p>
          </div>
          <div id="donar" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {SEED_MATERIALS.map((m) => (
              <div key={m.id} className="bg-surface p-6 hover:bg-white/5 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-archivo uppercase tracking-widest">{TYPE_LABEL[m.type]}</span>
                  <span className="text-xs text-white/30">{m.country}</span>
                </div>
                <h3 className="text-base font-medium text-white mb-2">{m.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-4">{m.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/30">{m.author}</span>
                  <span className="text-xs text-white/20 border border-white/10 px-2 py-0.5">{m.license}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
