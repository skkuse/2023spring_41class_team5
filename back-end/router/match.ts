import { Router } from 'express'
import checkToken from '../middleware/checkToken'
import {
  getFeedback,
  getHint,
  getMyHistory,
  getNewMatch,
  submitCode,
} from '../controller/match'
import checkCurrentMatch from '../middleware/checkCurrentMatch'
const match = Router()

/**
 * start new match
 * -> Pooling 1000ms
 */
match.get('/new-match', checkToken, getNewMatch)

/**
 * request hint by GPT
 */
match.post('/:mid/hint', checkToken, checkCurrentMatch, getHint)

/**
 * submit the code
 */
match.post('/:mid/submit', checkToken, checkCurrentMatch, submitCode)

/**
 * get history
 */
match.get('/history', checkToken, getMyHistory)

/**
 * get feedback
 */
match.post('/:mid/feedback', checkToken, getFeedback)

export default match
