import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../src/server.js'

describe('Backend Foundation Tests', () => {
  it('GET /api/health returns 200 with ok status and uptime', async () => {
    const response = await request(app).get('/api/health')

    expect(response.status).toBe(200)
    expect(response.body.status).toBe('ok')
    expect(typeof response.body.uptime).toBe('number')
    expect(typeof response.body.timestamp).toBe('string')
  })

  it('handles 404 for unknown routes', async () => {
    const response = await request(app).get('/api/non-existent-route')
    expect(response.status).toBe(404)
  })
})
