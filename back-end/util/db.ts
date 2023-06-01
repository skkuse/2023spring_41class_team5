import mysql from 'mysql2/promise'

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'test',
  connectTimeout: 10000,
  timezone: 'Asia/Seoul',
}

const pool = mysql.createPool(config)

export default pool
