import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'CineXpress — El cine inacabado se convierte en nuevo cine', template: '%s | CineXpress' },
  description: 'CineXpress es un ecosistema donde proyectos abandonados y material de archivo se transforman en nuevas obras. Cultura abierta · Iberoamérica · Remix.',
  metadataBase: new URL('https://cinexpress.net'),
  openGraph: { title: 'CineXpress — El cine inacabado se convierte en nuevo cine', description: 'Plataforma de cultura abierta y remix cinematográfico iberoamericano.', url: 'https://cinexpress.net', siteName: 'CineXpress', type: 'website', locale: 'es_ES', images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CineXpress' }] },
  twitter: { card: 'summary_large_image', title: 'CineXpress — El cine inacabado se convierte en nuevo cine', description: 'Plataforma de cultura abierta y remix cinematográfico iberoamericano.', images: ['/og-image.jpg'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-ink text-bone antialiased">{children}</body>
    </html>
  )
}
