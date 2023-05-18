import { Request, Response } from 'express'
import MatchService from '../service/match'

const getNewMatch = (req: Request, res: Response) => {
  return res.json()
}
const getHint = (req: Request, res: Response) => {
  return res.json()
}
const executeCode = (req: Request, res: Response) => {
  return res.json()
}
const submitCode = (req: Request, res: Response) => {
  return res.json()
}

const getMyHistory = (req: Request, res: Response) => {
  const uid = 0 // req.uid
  const history = MatchService.getMatchHistory(uid)
  return res.json(history)
}

export { getNewMatch, getHint, executeCode, submitCode, getMyHistory }
