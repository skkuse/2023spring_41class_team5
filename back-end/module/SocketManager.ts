import { Server } from 'socket.io'

class SocketManagerClass {
  socket: Server | null
  constructor() {
    this.socket = null
  }
  init(server: any) {
    this.socket = new Server(server, { cors: { origin: '*' } })
    this.socket.on('connection', (socket) => {
      socket.on('JOIN_ROOM', (id) => {
        console.log('join room :', id)
        socket.join(id.toString())
      })
    })
  }
  emitEvent(
    mid: number,
    type: 'HINT_UPDATED' | 'SCORE_UPDATED' | 'MATCH_ENDED',
    params: any
  ) {
    if (!this.socket) return
    console.log(`emit ${type} event to ${mid}`)
    this.socket.in(mid.toString()).emit(type, params)
  }
}

const SocketManager = new SocketManagerClass()

export default SocketManager
