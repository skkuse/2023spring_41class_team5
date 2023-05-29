import { Request, Response } from 'express'
import MatchService from '../service/match'
import HintService from '../service/hint'
import FeedbackService from '../service/feedback'
import MatchManager from '../module/MatchManager'
import SocketManager from '../module/SocketManager'

const getNewMatch = async (req: Request, res: Response) => {
  const uid = req.user
  if (!uid) return
  // 1. 현재 진행중인 대결이 있는지 확인
  const match = await MatchService.getMatchOnProgress(uid)
  if (match) return res.json({ match }) // -> 해당 대결 리턴
  // 2. 현재 대기열에 적절한 상대가 있는지 확인
  const target = MatchManager.findQueue()
  if (target) {
    // -> 해당 상대와 자신의 대결을 생성 후 리턴
    const mid = await MatchService.createMatch(target, uid, 1) // 문제는 1번으로 고정
    MatchManager.deleteQueue(target)
    MatchManager.insertMatch(
      mid,
      target,
      uid,
      () => {
        MatchService.updateMatchStatus(mid, -1)
        SocketManager.emitEvent(mid, 'MATCH_ENDED', {
          win: null,
          disconnected: target,
        })
      },
      () => {
        MatchService.updateMatchStatus(mid, -1)
        SocketManager.emitEvent(mid, 'MATCH_ENDED', {
          win: null,
          disconnected: uid,
        })
      }
    )
    const newMatch = await MatchService.getMatchById(mid)
    return res.json({ match: newMatch })
  } else {
    // -> 대기열에 추가
    MatchManager.insertQueue(uid)
    return res.json({ match: null })
  }
}
const healthCheck = async (req: Request, res: Response) => {
  const uid = req.user
  if (!uid) return
  const mid = parseInt(req.params.id)
  if (!mid) return res.status(404).json({ message: 'No Such Matching' })
  MatchManager.healthCheck(mid, uid, () => {
    MatchService.updateMatchStatus(mid, -1)
    SocketManager.emitEvent(mid, 'MATCH_ENDED', {
      win: null,
      disconnected: uid,
    })
  })
  return res.json({ id: mid })
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
  // const hint = ChatGPTModule.requestHint(problem, type, code)
  const prompt = ''
  const hint = ''

  await HintService.createHint(mid, uid, type, prompt, hint)
  SocketManager.emitEvent(mid, 'HINT_UPDATED', {
    uid: uid,
    hintCount: hintCount + 1,
  })
  return res.json({ type: type, result: hint })
}
const getFeedback = async (req: Request, res: Response) => {
  const uid = req.user
  if (!uid) return
  const mid = parseInt(req.params.mid)
  if (!mid) return res.status(404).json({ message: 'No Such Matching' })
  const match = await MatchService.getMatchById(mid)

  const code = req.body.code
  // const result = ChatGPTModule.requestFeedback(match.problem, code)
  let result = ''
  const prompt = ''

  await FeedbackService.createFeedback(mid, uid, prompt, result)
  return res.json({ result })
}
const submitCode = async (req: Request, res: Response) => {
  const uid = req.user
  if (!uid) return
  const mid = parseInt(req.params.mid)
  if (!mid) return res.status(404).json({ message: 'No Such Matching' })
  const problem = await MatchService.getProblemByMatchId(mid)
  if (!problem) return res.status(404).json({ message: 'No Such Matching' })

  const code = req.body.code as string

  // const score = await ExecutionManager.run(code, problem.testCase)
  let score = 80
  if (score === 100) {
    // TODO: this two trx should be in one trx
    await MatchService.updateMatchStatus(mid, uid)
    await MatchService.updateSummitResult(mid, uid, code, score)
    SocketManager.emitEvent(mid, 'MATCH_ENDED', {
      win: uid,
    })
  } else {
    MatchService.updateSummitResult(mid, uid, code, score)
    SocketManager.emitEvent(mid, 'SCORE_UPDATED', {
      uid: uid,
      score: score,
    })
  }

  return res.json({ score })
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
