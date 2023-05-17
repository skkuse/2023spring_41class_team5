import { NextFunction, Request, Response } from 'express'

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']
  if (!token) return res.status(401)
  // DB action: get user data by token
  next()
}

export default checkToken
