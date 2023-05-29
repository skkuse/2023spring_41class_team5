require('dotenv').config()

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './router'
import SocketManager from './module/SocketManager'

const app = express()

app.use(bodyParser.json())
app.use(cors({ origin: '*' }))
app.use(router)

const server = app.listen(process.env.PORT, () => {
  console.log('Server Start')
})

SocketManager.init(server)
