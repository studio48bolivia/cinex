import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

jest.mock('next/navigation', () => ({ usePathname: () => '/' }))

describe('Navbar', () => {
  it('renders the CineXpress logo', () => {
    render(<Navbar />)
    expect(screen.getByText('CineXpress')).toBeInTheDocument()
  })

  it('renders all 5 navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('ARCHIVO')).toBeInTheDocument()
    expect(screen.getByText('LABORATORIO')).toBeInTheDocument()
    expect(screen.getByText('INFINITE REEL')).toBeInTheDocument()
    expect(screen.getByText('COMUNIDAD')).toBeInTheDocument()
    expect(screen.getByText('MANIFIESTO')).toBeInTheDocument()
  })

  it('renders Unirse CTA link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /unirse/i })).toBeInTheDocument()
  })
})
