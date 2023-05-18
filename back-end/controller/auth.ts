import { Request, Response } from 'express'
import UserService from '../service/user'

const createNewUser = (req: Request, res: Response) => {
  const user = UserService.createUser()
  return res.json(user)
}

const login = (req: Request, res: Response) => {
  const uid = parseInt(req.params.uid)
  // validate user input
  const token = UserService.getTokenByUserId(uid)
  return res.json(token)
}

export { createNewUser, login }
