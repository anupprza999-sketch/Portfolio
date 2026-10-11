import { Request, Response, NextFunction } from 'express'
import { portfolioService } from '../services/portfolio.service.js'
import { ContactSchema } from '../validators/contact.validator.js'

export const getProjects = (_req: Request, res: Response) => {
  const projects = portfolioService.getAllProjects()
  res.status(200).json(projects)
}

export const getProjectById = (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id
  if (!id) {
    return res.status(400).json({ error: 'Project ID required' })
  }
  const project = portfolioService.getProjectById(id)
  if (!project) {
    return res.status(404).json({ error: 'Project not found' })
  }
  return res.status(200).json(project)
}


export const getProfile = (_req: Request, res: Response) => {
  const profile = portfolioService.getProfile()
  res.status(200).json(profile)
}

export const handleContact = (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedData = ContactSchema.parse(req.body)
    const result = portfolioService.processContactSubmission(validatedData)
    return res.status(200).json(result)
  } catch (err) {
    return next(err)
  }
}
