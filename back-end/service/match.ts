import pool from '../util/db'

const getProblemByMatchId = async (mid: number) => {
  const sql = `SELECT id, title, description, test_case FROM problem WHERE id = (SELECT problem_id FROM test.match WHERE id = ?);`
  const params = [mid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  const data = result as {
    id: number
    title: string
    description: string
    test_case: string
  }[]
  conn.release()
  if (!data.length) return null
  return {
    id: data[0].id,
    title: data[0].title,
    description: data[0].description,
    testCase: data[0].test_case.split('|').map((i) => i.split(',')),
  }
}
const getMatchById = async (mid: number) => {
  const sql = `SELECT m.id as id, p.id as pid, p.title as ptitle, p.description as pdescription, m.status, 
    h1.user_id as user1, h2.user_id as user2 FROM test.match m 
    LEFT JOIN history h1 ON m.history1_id = h1.id 
    LEFT JOIN history h2 ON m.history2_id = h2.id
    LEFT JOIN problem p ON m.problem_id = p.id
    WHERE m.id = ?;`
  const params = [mid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  const data = result as {
    id: number
    pid: number
    ptitle: string
    pdescription: string
    status: string
    user1: number
    user2: number
  }[]
  conn.release()
  if (!data.length) return null
  return {
    id: data[0].id,
    problem: {
      id: data[0].pid,
      title: data[0].ptitle,
      description: data[0].pdescription,
    },
    user1: data[0].user1,
    user2: data[0].user2,
    status: parseInt(data[0].status),
  }
}

const updateMatchStatus = async (mid: number, winUid: number) => {
  const conn = await pool.getConnection()
  let status = 3
  if (winUid !== -1) {
    const sql = `SELECT h1.user_id as user1, h2.user_id as user2 FROM test.match m 
      LEFT JOIN history h1 ON m.history1_id = h1.id 
      LEFT JOIN history h2 ON m.history2_id = h2.id
      WHERE m.id = ?;`
    const params = [mid]
    const [result] = await conn.query(sql, params)
    const data = result as {
      user1: number
      user2: number
    }[]
    if (data[0].user1 === winUid) status = 1
    else if (data[0].user2 === winUid) status = 2
  }
  const sql = `UPDATE test.match SET status = ? WHERE id = ?;`
  const params = [status, mid]
  await conn.query(sql, params)
  conn.release()
}

const createMatch = async (uid1: number, uid2: number, pid: number) => {
  // TODO: need transaction rollback logic
  const sql1 = `INSERT INTO history (user_id) VALUES (?);`
  const params1 = [uid1]
  const params2 = [uid2]

  const conn = await pool.getConnection()
  await conn.beginTransaction()
  const [result1] = await conn.query(sql1, params1)
  const hid1 = (result1 as { insertId: number }).insertId
  const [result2] = await conn.query(sql1, params2)
  const hid2 = (result2 as { insertId: number }).insertId

  const sql2 = `INSERT INTO test.match (history1_id, history2_id, problem_id) VALUES (?, ?, ?);`
  const params3 = [hid1, hid2, pid]
  const [result3] = await conn.query(sql2, params3)

  await conn.commit()
  const mid = (result3 as { insertId: number }).insertId
  conn.release()
  return mid
}

const getMatchOnProgress = async (uid: number) => {
  const sql = `SELECT m.id as id, p.id as pid, p.title as ptitle, p.description as pdescription, m.status as status, 
    h1.user_id as user1, h2.user_id as user2 FROM test.match m 
    LEFT JOIN history h1 ON m.history1_id = h1.id 
    LEFT JOIN history h2 ON m.history2_id = h2.id
    LEFT JOIN problem p ON m.problem_id = p.id
    WHERE (h1.user_id = ? OR h2.user_id = ?)
    AND m.status = 0;`
  const params = [uid, uid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  const data = result as {
    id: number
    pid: number
    ptitle: string
    pdescription: string
    status: string
    user1: number
    user2: number
  }[]
  conn.release()
  if (!data.length) return null
  return {
    id: data[0].id,
    problem: {
      id: data[0].pid,
      title: data[0].ptitle,
      description: data[0].pdescription,
    },
    user1: data[0].user1,
    user2: data[0].user2,
    status: parseInt(data[0].status),
  }
}

const updateSummitResult = async (
  mid: number,
  uid: number,
  code: string,
  score: number
) => {
  const sql1 = `SELECT h.id as id FROM test.match m 
  LEFT JOIN history h ON m.history1_id = h.id OR m.history2_id = h.id
  WHERE m.id = ? AND h.user_id = ?;`
  const params1 = [mid, uid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql1, params1)
  const data = result as { id: number }[]
  const hid = data[0].id
  const sql2 = `UPDATE history SET score = ?, code=? WHERE id = ?;`
  const params2 = [score, code, hid]
  await conn.query(sql2, params2)
  conn.release()
}

const getMatchListByUserId = async (uid: number) => {
  const sql = `SELECT m.id as id, p.id as pid, p.title as ptitle, p.description as pdescription,
    h.code as code, h.score as score, f.result as feedback, m.status as status, m.history1_id=h.id as is_user1
    FROM test.match m 
    LEFT JOIN history h ON m.history1_id = h.id OR m.history2_id = h.id
    LEFT JOIN problem p ON m.problem_id = p.id
    LEFT JOIN feedback f ON f.history_id = h.id
    WHERE h.user_id = ?;`
  const params = [uid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  const data = result as {
    id: number
    pid: number
    ptitle: string
    pdescription: string
    code: string
    score: number
    feedback: string
    status: string
    is_user1: number
  }[]
  console.log(data)
  conn.release()
  return data.map((i) => ({
    id: i.id,
    problem: {
      id: i.pid,
      title: i.ptitle,
      description: i.pdescription,
    },
    code: i.code,
    score: i.score,
    feedback: i.feedback,
    status:
      i.status === '0'
        ? null
        : i.status === '3'
        ? 'DRAW'
        : (i.status === '1' && i.is_user1) || (i.status === '2' && !i.is_user1)
        ? 'WIN'
        : 'LOSE',
  }))
}
const isMatchOnProgress = async (mid: number) => {
  const sql = `SELECT status FROM test.match WHERE id = ?;`
  const params = [mid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  const data = result as { status: string }[]
  conn.release()
  if (data.length && data[0].status === '0') return true
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
