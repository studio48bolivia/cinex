/**
 * @jest-environment node
 */
import { POST } from '@/app/api/waitlist/route'
import { NextRequest } from 'next/server'

const mockInsert = jest.fn()
jest.mock('@/lib/supabase/server', () => ({
  createClient: () => ({ from: () => ({ insert: mockInsert }) }),
}))

describe('POST /api/waitlist', () => {
  beforeEach(() => { jest.clearAllMocks() })

  it('returns 200 on valid email', async () => {
    mockInsert.mockResolvedValueOnce({ error: null })
    const req = new NextRequest('http://localhost/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com', source: 'home' }),
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await POST(req)
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data.success).toBe(true)
  })

  it('returns 400 when email is missing', async () => {
    const req = new NextRequest('http://localhost/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({ source: 'home' }),
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 409 when email already exists (unique constraint)', async () => {
    mockInsert.mockResolvedValueOnce({ error: { code: '23505' } })
    const req = new NextRequest('http://localhost/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({ email: 'dupe@example.com', source: 'home' }),
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await POST(req)
    expect(res.status).toBe(409)
  })
})
