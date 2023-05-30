import pool from '../util/db'

const getHintCount = async (mid: number, uid: number) => {
  const sql1 = `SELECT h.id as id FROM test.match m 
    LEFT JOIN history h ON m.history1_id = h.id OR m.history2_id = h.id
    WHERE m.id = ? AND h.user_id = ?;`
  const params1 = [mid, uid]
  const conn = await pool.getConnection()
  const [result1] = await conn.query(sql1, params1)
  const data1 = result1 as { id: number }[]
  const hid = data1[0].id

  const sql2 = `SELECT id FROM test.hint WHERE history_id = ?;`
  const params2 = [hid]
  const [result2] = await conn.query(sql2, params2)
  const data = result2 as { id: number }[]
  conn.release()
  return data.length
}

const createHint = async (
  mid: number,
  uid: number,
  type: number,
  prompt: string,
  hint: string
) => {
  const sql1 = `SELECT h.id as id FROM test.match m 
    LEFT JOIN history h ON m.history1_id = h.id OR m.history2_id = h.id
    WHERE m.id = ? AND h.user_id = ?;`
  const params1 = [mid, uid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql1, params1)
  const data = result as { id: number }[]
  const hid = data[0].id

  const sql2 = `INSERT INTO test.hint (history_id, type, prompt, result) VALUES (?, ?, ?, ?);`
  const params2 = [hid, type, prompt, hint]
  await conn.query(sql2, params2)
  conn.release()
}

const HintService = { getHintCount, createHint }

export default HintService
