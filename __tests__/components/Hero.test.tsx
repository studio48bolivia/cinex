import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders H1 tagline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'El cine inacabado se convierte en nuevo cine'
    )
  })

  it('renders supertitle with Cultura abierta', () => {
    render(<Hero />)
    expect(screen.getByText(/cultura abierta/i)).toBeInTheDocument()
  })

  it('renders both CTA links', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /explorar el archivo/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /donar material/i })).toBeInTheDocument()
  })
})
