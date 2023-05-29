import pool from '../util/db'

const getProblemByMatchId = async (mid: number) => {
  const sql = `SELECT id, title, description FROM problem WHERE id = (SELECT problem_id FROM match WHERE mid = ?;);`
  const params = [mid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  const data = result as {
    id: number
    title: string
    description: string
  }[]
  if (!data.length) return null
  return data[0]
}
const getMatchById = async (mid: number) => {
  return { id: 0, problem: { id: 0, title: '', description: '' }, status: '' }
}

const updateMatchStatus = async (mid: number, win: number) => {
  if (win === -1) {
    // 누군가 나가서 무승부
  }
}

const createMatch = async (uid1: number, uid2: number, pid: number) => {
  return 0
}

const getMatchOnProgress = async (uid: number) => {
  return { id: 0, problem: { id: 0, title: '', description: '' }, status: '' }
}

const updateSummitResult = async (
  mid: number,
  uid: number,
  code: string,
  score: number
) => {
  const sql = `SELECT `
}

const getMatchListByUserId = async (uid: number) => {
  const sql = `SELECT m.id, p.id, p.title, p.description, h.code, h.score status FROM match WHERE h.id = ?;`
  const params = [uid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  // const data = result as {}[]
  const history = [
    {
      id: 0,
      problem: {
        id: 0,
        title: '',
        description: '',
      },
      status: 'WIN',
      feedback: {},
      code: 'asdf',
      score: 100,
    },
  ]
  conn.release()
  return history
}
const isMatchOnProgress = async (mid: number) => {
  const sql = `SELECT status FROM match WHERE id = ?;`
  const params = [mid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  const data = result as { status: number }[]
  conn.release()
  if (data.length && data[0].status === 3) return true
  return false
}

const MatchService = {
  getProblemByMatchId,
  getMatchById,
  updateMatchStatus,
  createMatch,
  getMatchOnProgress,
  updateSummitResult,
  getMatchListByUserId,
  isMatchOnProgress,
}

export default MatchService
