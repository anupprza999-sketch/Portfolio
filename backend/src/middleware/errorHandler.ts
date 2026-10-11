import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

export interface AppError extends Error {
  statusCode?: number
}

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: 'Validation failed',
      details: err.issues.map((e) => ({
        field: e.path.join('.'),
        message: e.message
      }))
    })
  }

  const statusCode = err.statusCode || 500
  const message = statusCode === 500 ? 'Internal server error' : err.message

  if (process.env.NODE_ENV !== 'test') {
    console.error(`[Error] ${statusCode} - ${err.message}`, err.stack)
  }

  return res.status(statusCode).json({
    error: message
  })
}
