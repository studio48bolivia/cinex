import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import WaitlistForm from '@/components/WaitlistForm'

global.fetch = jest.fn()

describe('WaitlistForm', () => {
  beforeEach(() => { jest.clearAllMocks() })

  it('renders email input and Apuntarme button', () => {
    render(<WaitlistForm source="home" />)
    expect(screen.getByPlaceholderText(/tu email/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /apuntarme/i })).toBeInTheDocument()
  })

  it('shows success message on successful submission', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    })
    render(<WaitlistForm source="home" />)
    fireEvent.change(screen.getByPlaceholderText(/tu email/i), {
      target: { value: 'test@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: /apuntarme/i }))
    await waitFor(() => {
      expect(screen.getByText(/apuntado/i)).toBeInTheDocument()
    })
  })

  it('shows error message on failed submission', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Email already exists' }),
    })
    render(<WaitlistForm source="home" />)
    fireEvent.change(screen.getByPlaceholderText(/tu email/i), {
      target: { value: 'dupe@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: /apuntarme/i }))
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument()
    })
  })
})
