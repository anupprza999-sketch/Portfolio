/**
 * API client service for communicating with the backend API
 */

export interface ApiResponse<T> {
  data?: T
  error?: string
  status: number
}

const API_BASE = '/api'

export async function checkApiHealth(): Promise<{ status: string; timestamp: string; uptime: number }> {
  const response = await fetch(`${API_BASE}/health`)
  if (!response.ok) {
    throw new Error(`Health check failed with status: ${response.status}`)
  }
  return response.json()
}

export async function fetchProjects(): Promise<any[]> {
  const response = await fetch(`${API_BASE}/projects`)
  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status}`)
  }
  return response.json()
}

export async function fetchProfile(): Promise<any> {
  const response = await fetch(`${API_BASE}/profile`)
  if (!response.ok) {
    throw new Error(`Failed to fetch profile: ${response.status}`)
  }
  return response.json()
}

export async function submitContact(data: { name: string; email: string; subject?: string; message: string }): Promise<{ success: boolean; message: string }> {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ error: 'Submission failed' }))
    throw new Error(errorBody.error || `HTTP ${response.status}`)
  }

  return response.json()
}
