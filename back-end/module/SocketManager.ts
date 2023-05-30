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
        socket.join(id)
      })
    })
  }
  emitEvent(
    mid: number,
    type: 'HINT_UPDATED' | 'SCORE_UPDATED' | 'MATCH_ENDED',
    params: any
  ) {
    if (!this.socket) return
    this.socket.in(mid.toString()).emit(type, params)
  }
}

const SocketManager = new SocketManagerClass()

export default SocketManager
