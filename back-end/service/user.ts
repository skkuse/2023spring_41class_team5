import pool from '../util/db'
import { getRandomString } from '../util/random'

const createUser = async () => {
  const sql = `INSERT INTO user (name, auth_token, refresh_token) VALUES (?, ?, ?);`
  const params = [
    'dino-' + getRandomString().slice(0, 6),
    getRandomString(),
    getRandomString(),
  ]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  const data = result as { insertId: number }
  conn.release()
  return data.insertId
}
const getTokenByUserId = async (uid: number) => {
  const sql = `SELECT auth_token FROM user WHERE id = ?;`
  const params = [uid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  const data = result as { auth_token: string }[]
  conn.release()
  if (data.length) return data[0].auth_token
  return null
}
const getUserIdByToken = async (token: string) => {
  const sql = `SELECT id FROM user WHERE auth_token = ?;`
  const params = [token]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  const data = result as { id: string }[]
  conn.release()
  if (data.length) return data[0].id
  return null
}
const getUserInfo = async (uid: number) => {
  const sql = `SELECT id, name, auth_token FROM user WHERE id = ?;`
  const params = [uid]
  const conn = await pool.getConnection()
  const [result] = await conn.query(sql, params)
  const data = result as { id: number; name: string; auth_token: string }[]
  conn.release()
  if (data.length)
    return {
      id: data[0].id,
      name: data[0].name,
      token: data[0].auth_token,
    }
  return null
}

const UserService = {
  createUser,
  getTokenByUserId,
  getUserIdByToken,
  getUserInfo,
}

export default UserService
