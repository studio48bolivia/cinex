export interface WaitlistEmail {
  id: string
  email: string
  created_at: string
  source: string
}

export interface ArchiveMaterial {
  id: string
  title: string
  description: string | null
  author: string | null
  country: string | null
  type: 'project' | 'footage' | 'film'
  license: string
  file_url: string | null
  created_at: string
}

export interface NavLink {
  label: string
  href: string
  color: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'ARCHIVO',       href: '/archivo',     color: 'hover:text-archivo' },
  { label: 'LABORATORIO',   href: '/laboratorio', color: 'hover:text-laboratorio' },
  { label: 'INFINITE REEL', href: '/festival',    color: 'hover:text-festival' },
  { label: 'COMUNIDAD',     href: '/comunidad',   color: 'hover:text-comunidad' },
  { label: 'MANIFIESTO',    href: '/manifiesto',  color: 'hover:text-manifiesto' },
]
