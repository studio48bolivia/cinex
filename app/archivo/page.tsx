import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { client } from '@/sanity/lib/client'
import { archiveMaterialsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Archivo — Material Audiovisual Abierto',
  description: 'Proyectos inacabados, metraje donado y joyas del cine iberoamericano con licencia abierta.',
}

const TYPE_LABEL: Record<string, string> = { project: 'Proyecto', footage: 'Metraje', film: 'Película' }

const FALLBACK_MATERIALS = [
  { _id: '1', title: 'El silencio del altiplano', description: 'Documental boliviano inacabado. 40 min de metraje 4K del altiplano andino.', author: 'Marco Quispe', country: 'Bolivia', type: 'project', license: 'CC BY-SA 4.0' },
  { _id: '2', title: 'Fragmentos de ciudad — Buenos Aires 2019', description: 'Imágenes urbanas de Buenos Aires durante las protestas de 2019.', author: 'Valentina Morales', country: 'Argentina', type: 'footage', license: 'CC BY 4.0' },
  { _id: '3', title: 'La última función', description: 'Cortometraje sobre el cierre de los últimos cines de barrio en México DF.', author: 'Diego Hernández', country: 'México', type: 'film', license: 'CC BY-SA 4.0' },
  { _id: '4', title: 'Voces del Pacífico', description: 'Entrevistas con pescadores artesanales de Chile y Perú.', author: 'Ana Soto', country: 'Chile', type: 'footage', license: 'CC BY-NC-SA 4.0' },
  { _id: '5', title: 'Carnaval sin fin', description: 'Proyecto de videoarte sobre la identidad cultural en el Carnaval de Oruro.', author: 'Lucía Mamani', country: 'Bolivia', type: 'project', license: 'CC BY-SA 4.0' },
]

export default async function ArchivoPage() {
  const sanityMaterials = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    ? await client.fetch(archiveMaterialsQuery).catch(() => null)
    : null
  const materials = (sanityMaterials?.length ? sanityMaterials : FALLBACK_MATERIALS)

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {materials.map((m: any) => (
              <div key={m._id} className="bg-surface p-6 hover:bg-white/5 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-archivo uppercase tracking-widest">{TYPE_LABEL[m.type] ?? m.type}</span>
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
