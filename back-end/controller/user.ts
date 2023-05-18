import { Request, Response } from 'express'
import UserService from '../service/user'

const getMyInfo = (req: Request, res: Response) => {
  const uid = 0 // req.uid
  const myInfo = UserService.getUserInfo(uid)
  return res.json(myInfo)
}

export { getMyInfo }
