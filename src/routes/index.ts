import { Router } from 'express'
import { healthRoutes } from '../routes/health'

const routes = Router()

routes.use('/', healthRoutes)

export { routes }
