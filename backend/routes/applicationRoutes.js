import { Router } from 'express'
import {
  createApplication,
  getApplications,
  deleteApplication,
} from '../controllers/applicationController.js'

const router = Router()

router.post('/', createApplication)
router.get('/', getApplications)
router.delete('/:id', deleteApplication)

export default router
