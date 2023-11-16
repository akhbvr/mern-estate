import expresss from 'express'
import { signup } from '../controllers/auth.controller.js'

const router = expresss.Router()

router.post('/signup', signup)

export default router