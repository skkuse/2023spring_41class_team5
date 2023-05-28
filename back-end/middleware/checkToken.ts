import { NextFunction, Request, Response } from 'express'
import UserService from '../service/user'

const checkToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']
  if (!token) return res.status(401).json({ message: 'Unauthorized' })
  const uid = await UserService.getUserIdByToken(token)
  if (!uid) return res.status(401).json({ message: 'Unauthorized' })
  // @ts-ignore
  req.user = uid
  next()
}

export default checkToken
