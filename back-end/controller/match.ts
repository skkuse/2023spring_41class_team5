import { Request, Response } from 'express'
import MatchService from '../service/match'
import HintService from '../service/hint'
import FeedbackService from '../service/feedback'
import ChatGPTModule from '../module/GPTManager'
const getNewMatch = async (req: Request, res: Response) => {
  // 1. 현재 진행중인 대결이 있는지 확인 -> 해당 대결 리턴
  // 2. 현재 대기열에 적절한 상대가 있는지 확인 -> 해당 상대와 자신의 대결을 생성.
  // 3. 대기열에 추가
  // 4. 3초 안에 요청이 다시 오지 않으면 대기열에서 삭제
  return res.json()
}
const healthCheck = async (req: Request, res: Response) => {
  // 1분마다 요청
  // 3분 안에 주기적으로 요청이 오지 않으면 게임 종료
  return res.json()
}

const getHint = async (req: Request, res: Response) => {
  const uid = req.user
  if (!uid) return
  const mid = parseInt(req.params.mid)
  if (!mid) return res.status(404).json({ message: 'No Such Matching' })
  const problem = await MatchService.getProblemByMatchId(mid)
  if (!problem) return res.status(404).json({ message: 'No Such Matching' })

  const hintCount = await HintService.getHintCount(mid, uid)
  if (hintCount >= 3) return res.json({ hint: null })

  const type = req.body.type
  const code = req.body.code
  /*
const hint = ChatGPTModule.requestHint(problem, type, code)
type = 0 -> "Find Code Compile Errors"
type = 1 -> "Find Next Code"
type = 2 -> "Generate Test Cases"
*/
  const {hint,prompt} = await ChatGPTModule.requestHint(problem.description,type,code)

  await HintService.createHint(mid, uid, type, prompt, hint)
  // TODO: hint event emit
  return res.json({ hint })
}
const getFeedback = async (req: Request, res: Response) => {
  const uid = req.user
  if (!uid) return
  const mid = parseInt(req.params.mid)
  if (!mid) return res.status(404).json({ message: 'No Such Matching' })
  const problem = await MatchService.getProblemByMatchId(mid)
  if (!problem) return res.status(404).json({ message: 'No Such Matching' })

  const code = req.body.code
/*
const result = ChatGPTModule.requestFeedback(problem, code, isVictory)
isVictory = True -> "Please improve this code"
isVictory = False -> "Please complete the code"
*/
  let isWin
  const {result,prompt} = await ChatGPTModule.requestFeedback(problem.description,code,isWin)


  await FeedbackService.createFeedback(mid, uid, prompt, result)
  const feedback = await FeedbackService.getFeedbackById(0)
  return res.json({ feedback })
}
const submitCode = async (req: Request, res: Response) => {
  const mid = parseInt(req.params.mid)
  if (!mid) return res.status(404).json({ message: 'No Such Matching' })
  const problem = await MatchService.getProblemByMatchId(mid)
  if (!problem) return res.status(404).json({ message: 'No Such Matching' })

  const code = req.body.code as string

  // const score = await ExecutionManager.run(code, problem.testCase)
  let score = 80
  if (score === 100) {
    // 게임 종료
    // update game status
    // update score
    // end event emit
  } else {
    // update score
    // score event emit
  }

  return res.json(score)
}

const getMyHistory = (req: Request, res: Response) => {
  const uid = req.user
  if (!uid) return
  const history = MatchService.getMatchListByUserId(uid)
  return res.json({ history })
}

export {
  getNewMatch,
  healthCheck,
  getHint,
  getFeedback,
  submitCode,
  getMyHistory,
}
