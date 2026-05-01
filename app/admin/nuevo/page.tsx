'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type MaterialType = 'footage' | 'project' | 'film'

export default function NuevoMaterialPage() {
  const [form, setForm] = useState({
    title: '', description: '', author: '', country: '',
    type: 'footage' as MaterialType, license: 'CC BY-SA 4.0',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.from('archive_materials').insert(form)
    if (error) {
      setError('Error al guardar el material. Inténtalo de nuevo.')
      setLoading(false)
    } else {
      setLoading(false)
      router.push('/archivo')
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="max-w-xl mx-auto px-6 py-16">
          <span className="text-xs uppercase tracking-widest text-archivo block mb-4">Donar material</span>
          <h1 className="text-2xl font-medium text-white mb-8">Añadir al archivo</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {([
              ['title', 'Título', 'Título del material'],
              ['author', 'Autor / Cineasta', 'Tu nombre'],
              ['country', 'País', 'País de origen'],
            ] as [string, string, string][]).map(([name, label, placeholder]) => (
              <div key={name}>
                <label className="text-xs text-white/40 uppercase tracking-widest block mb-2">{label}</label>
                <input type="text" required placeholder={placeholder}
                  value={form[name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60"
                />
              </div>
            ))}

            <div>
              <label className="text-xs text-white/40 uppercase tracking-widest block mb-2">Descripción</label>
              <textarea rows={4} placeholder="Describe el material..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60 resize-none"
              />
            </div>

            <div>
              <label className="text-xs text-white/40 uppercase tracking-widest block mb-2">Tipo</label>
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value as MaterialType })}
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/60">
                <option value="footage">Metraje</option>
                <option value="project">Proyecto</option>
                <option value="film">Película</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-white/40 uppercase tracking-widest block mb-2">Licencia</label>
              <select value={form.license} onChange={(e) => setForm({ ...form, license: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/60">
                <option value="CC BY-SA 4.0">CC BY-SA 4.0</option>
                <option value="CC BY 4.0">CC BY 4.0</option>
                <option value="CC BY-NC-SA 4.0">CC BY-NC-SA 4.0</option>
              </select>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" disabled={loading}
              className="w-full bg-archivo text-white py-3 text-sm font-medium hover:bg-archivo/80 transition-colors disabled:opacity-50">
              {loading ? 'Guardando...' : 'Donar al archivo'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
