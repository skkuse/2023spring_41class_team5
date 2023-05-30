import { Request, Response } from 'express'
import UserService from '../service/user'

const createNewUser = async (req: Request, res: Response) => {
  const uid = await UserService.createUser()
  const token = await UserService.getTokenByUserId(uid)
  return res.json({ id: uid, token })
}

const login = async (req: Request, res: Response) => {
  const uid = parseInt(req.params.uid)
  if (!uid) return
  // validate user input
  const token = await UserService.getTokenByUserId(uid)
  if (!token) return res.status(401).json({ message: 'No Such User' })
  return res.json({ token })
}

export { createNewUser, login }
