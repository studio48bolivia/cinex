'use client'

import { useState } from 'react'

interface WaitlistFormProps {
  source: string
  className?: string
}

export default function WaitlistForm({ source, className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setMessage('¡Apuntado! Te avisamos cuando abramos la convocatoria.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Algo salió mal. Inténtalo de nuevo.')
      }
    } catch {
      setStatus('error')
      setMessage('Error de conexión. Inténtalo de nuevo.')
    }
  }

  if (status === 'success') {
    return <p className={`text-sm text-white/70 ${className}`}>{message}</p>
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <input
        type="email"
        required
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading'}
        className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-white/60"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-festival text-white text-sm font-medium hover:bg-festival/80 transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Enviando...' : 'Apuntarme'}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-xs w-full">Error: {message}</p>
      )}
    </form>
  )
}
