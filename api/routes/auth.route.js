import expresss from 'express'
import { google, signin, signup, signOut } from '../controllers/auth.controller.js'

const router = expresss.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/google', google)
router.get('/signout', signOut)

export default router