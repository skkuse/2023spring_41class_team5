import pool from '../util/db'

const getHintCount = async (mid: number, uid: number) => {
  const sql = ``
  const params = [mid, uid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  const data = result as {}[]
  conn.release()
  return 1
}

const createHint = async (
  mid: number,
  uid: number,
  type: number,
  prompt: string,
  hint: string
) => {
  const sql = `INSERT `
  const params = [type, hint]
  const conn = await pool.getConnection()
  await conn.query(sql, params)
  conn.release()
  return true
}

const HintService = { getHintCount, createHint }

export default HintService
