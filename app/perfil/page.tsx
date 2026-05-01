import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default async function PerfilPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth')

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <span className="text-xs uppercase tracking-widest text-white/40 block mb-4">Perfil</span>
          <h1 className="text-2xl font-medium text-white mb-8">Mi cuenta</h1>

          <div className="bg-white/5 border border-white/10 p-6 mb-6">
            <p className="text-xs text-white/40 mb-1">Email</p>
            <p className="text-sm text-white">{user.email ?? 'Email no disponible'}</p>
          </div>

          <Link href="/admin/nuevo"
            className="text-sm px-4 py-2 border border-white/30 text-white hover:border-white transition-colors inline-block">
            Donar material al archivo
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
