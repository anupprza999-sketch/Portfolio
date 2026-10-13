import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../src/server.js'

describe('Portfolio REST API Integration Tests', () => {
  it('GET /api/projects returns the array of verified projects', async () => {
    const res = await request(app).get('/api/projects')
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body.length).toBe(12)
    expect(res.body[0].title).toBe('Mystic Spatial Portal (UE5)')
  })

  it('GET /api/projects/:id returns single project', async () => {
    const res = await request(app).get('/api/projects/portal-ue5')
    expect(res.status).toBe(200)
    expect(res.body.id).toBe('portal-ue5')
  })

  it('GET /api/projects/:id returns 404 for unknown project', async () => {
    const res = await request(app).get('/api/projects/unknown-proj')
    expect(res.status).toBe(404)
    expect(res.body.error).toBe('Project not found')
  })

  it('GET /api/profile returns verified profile details', async () => {
    const res = await request(app).get('/api/profile')
    expect(res.status).toBe(200)
    expect(res.body.name).toBe('Anup Prajapati')
    expect(res.body.email).toBe('Anupprza999@gmail.com')
    expect(res.body.workExperience[0].company).toBe('Gamenic Virtual Studio')
  })

  it('POST /api/contact validates input and succeeds on valid payload', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({
        name: 'Art Director',
        email: 'director@studio.com',
        subject: 'Environment Project Inquiry',
        message: 'We loved your Japanese Shrine Environment and would like to discuss a project.'
      })

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.message).toContain('Art Director')
  })

  it('POST /api/contact rejects invalid email or short message with 400', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({
        name: 'A',
        email: 'not-an-email',
        message: 'short'
      })

    expect(res.status).toBe(400)
    expect(res.body.error).toBe('Validation failed')
    expect(Array.isArray(res.body.details)).toBe(true)
  })
})
