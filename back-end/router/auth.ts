import { Router } from 'express'
import { createNewUser, login } from '../controller/auth'
const auth = Router()

/**
 * create new user
 */
auth.post('/new-user', createNewUser)

/**
 * login by user id
 */
auth.get('/:uid', login)

export default auth
