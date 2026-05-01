import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}))
  const { email, source = 'home' } = body

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
  }

  const supabase = createClient()
  const { error } = await supabase
    .from('waitlist_emails')
    .insert({ email: email.toLowerCase().trim(), source })

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'Este email ya está en la lista' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Error al guardar el email' }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
