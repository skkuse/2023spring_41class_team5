import pool from '../util/db'

const getFeedbackById = async (fid: number) => {}

const createFeedback = async (
  mid: number,
  uid: number,
  prompt: string,
  feedback: string
) => {
  const sql = `INSERT `
  const params = [feedback]
  const conn = await pool.getConnection()
  await conn.query(sql, params)
  conn.release()
  return true
}

const FeedbackService = { getFeedbackById, createFeedback }

export default FeedbackService
