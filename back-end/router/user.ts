import { Router } from 'express'
import { getMyInfo } from '../controller/user'
import checkToken from '../middleware/checkToken'
const user = Router()

/**
 * get my info
 */
user.get('/', checkToken, getMyInfo)

export default user
