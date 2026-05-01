import { render, screen } from '@testing-library/react'
import SectionCards from '@/components/SectionCards'

describe('SectionCards', () => {
  it('renders 4 "Ver más" links', () => {
    render(<SectionCards />)
    expect(screen.getAllByRole('link', { name: /ver más/i })).toHaveLength(4)
  })

  it('renders labels for all 4 sections', () => {
    render(<SectionCards />)
    expect(screen.getByText('ARCHIVO')).toBeInTheDocument()
    expect(screen.getByText('LABORATORIO')).toBeInTheDocument()
    expect(screen.getByText('COMUNIDAD')).toBeInTheDocument()
    expect(screen.getByText('MANIFIESTO')).toBeInTheDocument()
  })
})
