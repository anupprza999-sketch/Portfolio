import { Router } from 'express'
import healthRoutes from './health.routes.js'
import {
  getProjects,
  getProjectById,
  getProfile,
  handleContact
} from '../controllers/portfolio.controller.js'

const apiRouter = Router()

apiRouter.use('/health', healthRoutes)
apiRouter.get('/projects', getProjects)
apiRouter.get('/projects/:id', getProjectById)
apiRouter.get('/profile', getProfile)
apiRouter.post('/contact', handleContact)

export default apiRouter
