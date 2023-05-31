import { NextFunction, Request, Response } from 'express'
import MatchService from '../service/match'

const checkCurrentMatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const mid = parseInt(req.params.mid)
  if (!mid) return res.status(404).json({ message: 'No Such Matching' })
  const isOnProgress = await MatchService.isMatchOnProgress(mid)
  if (!isOnProgress)
    return res.status(404).json({ message: 'No Such Matching' })
  next()
}

export default checkCurrentMatch
