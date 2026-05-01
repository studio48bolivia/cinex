'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const supabase = createClient()

  async function handleEmailSignIn(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/perfil` },
    })
    if (error) { setError(error.message) } else { setSent(true) }
    setLoading(false)
  }

  async function handleGoogleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/perfil` },
    })
    if (error) setError(error.message)
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <span className="text-xs uppercase tracking-widest text-white/40 block mb-3">CineXpress</span>
          <h1 className="text-2xl font-medium text-white">Unirse a la comunidad</h1>
        </div>

        {sent ? (
          <p className="text-sm text-white/60 text-center leading-relaxed">
            Revisa tu email — te hemos enviado un enlace mágico para acceder.
          </p>
        ) : (
          <>
            <form onSubmit={handleEmailSignIn} className="space-y-4 mb-6">
              <input
                type="email" required placeholder="tu@email.com" value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white/60"
              />
              <button type="submit" disabled={loading}
                className="w-full bg-white text-surface py-3 text-sm font-medium hover:bg-white/90 transition-colors disabled:opacity-50">
                {loading ? 'Enviando...' : 'Acceder con email'}
              </button>
            </form>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-surface px-3 text-xs text-white/30">o</span>
              </div>
            </div>

            <button onClick={handleGoogleSignIn}
              className="w-full border border-white/20 text-white py-3 text-sm hover:border-white/60 transition-colors">
              Continuar con Google
            </button>

            {error && <p className="text-red-400 text-xs mt-4">{error}</p>}
          </>
        )}
      </div>
    </div>
  )
}
