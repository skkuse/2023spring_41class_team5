import { NextFunction, Request, Response } from 'express'

const checkCurrentMatch = (req: Request, res: Response, next: NextFunction) => {
  //   const uid = req.uid
  // DB action: get current match by uid
  next()
}

export default checkCurrentMatch
