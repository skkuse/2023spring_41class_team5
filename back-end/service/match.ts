import pool from '../util/db'

const createHint = (code: string) => {}
const createFeedback = (code: string) => {}
const executeCode = (code: string) => {}

const getMatchHistory = (uid: number) => {
  // DB action: get user history by uid
  const history = [
    {
      mid: 0,
      // ...
    },
  ]
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
  getMatchHistory,
  isMatchOnProgress,
}

export default MatchService
