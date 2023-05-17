import { Router } from 'express'
import checkToken from '../middleware/checkToken'
import {
  executeCode,
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
 * execute the code
 */
match.post('/:mid/execute', checkToken, checkCurrentMatch, executeCode)

/**
 * submit the code
 */
match.post('/:mid/submit', checkToken, checkCurrentMatch, submitCode)

/**
 * get history
 */
match.get('/history', checkToken, getMyHistory)

export default match
