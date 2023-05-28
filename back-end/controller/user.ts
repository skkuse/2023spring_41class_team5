import { Request, Response } from 'express'
import UserService from '../service/user'

const getMyInfo = (req: Request, res: Response) => {
  const uid = req.user
  if (!uid) return
  const myInfo = UserService.getUserInfo(uid)
  return res.json({ user: myInfo })
}

export { getMyInfo }
