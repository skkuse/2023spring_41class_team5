import { Router } from 'express'
import auth from './auth'
import match from './match'
import user from './user'
const router = Router()

router.use('/auth', auth)
router.use('/match', match)
router.use('/user', user)

/**
 * health check
 */
router.get('/', (req, res) => {
  res.status(200).send('OK')
})

export default router
