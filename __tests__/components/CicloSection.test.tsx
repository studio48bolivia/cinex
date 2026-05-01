import { render, screen } from '@testing-library/react'
import CicloSection from '@/components/CicloSection'

describe('CicloSection', () => {
  it('renders 3 step numbers', () => {
    render(<CicloSection />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders Toma, Transforma, Comparte titles', () => {
    render(<CicloSection />)
    expect(screen.getByText('Toma')).toBeInTheDocument()
    expect(screen.getByText('Transforma')).toBeInTheDocument()
    expect(screen.getByText('Comparte')).toBeInTheDocument()
  })

  it('links each step to its section', () => {
    render(<CicloSection />)
    expect(screen.getByRole('link', { name: /toma/i })).toHaveAttribute('href', '/archivo')
    expect(screen.getByRole('link', { name: /transforma/i })).toHaveAttribute('href', '/laboratorio')
    expect(screen.getByRole('link', { name: /comparte/i })).toHaveAttribute('href', '/comunidad')
  })
})
