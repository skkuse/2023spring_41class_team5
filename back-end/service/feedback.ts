import pool from '../util/db'

const createFeedback = async (
  mid: number,
  uid: number,
  prompt: string,
  feedback: string
) => {
  const sql1 = `SELECT h.id as id FROM test.match m 
    LEFT JOIN history h ON m.history1_id = h.id OR m.history2_id = h.id
    WHERE m.id = ? AND h.user_id = ?;`
  const params1 = [mid, uid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql1, params1)
  const data = result as { id: number }[]
  const hid = data[0].id

  const sql2 = `INSERT INTO feedback (history_id, prompt, result) VALUES (?, ?, ?);`
  const params2 = [hid, prompt, feedback]

  await conn.query(sql2, params2)
  conn.release()
}

const FeedbackService = { createFeedback }

export default FeedbackService
