require('dotenv').config()

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './router'
import SocketManager from './module/SocketManager'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({ origin: '*' }))
app.use(router)

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server Start')
})

SocketManager.init(server)
