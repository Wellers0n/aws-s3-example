import { Router } from 'express'
import UploadController from '../../controllers/UploadController'

const uploadRoutes = Router()

uploadRoutes.get('/', UploadController)

export { uploadRoutes }
