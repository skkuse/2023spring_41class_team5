import { Server } from 'socket.io'

class SocketManagerClass {
  socket: Server | null
  constructor() {
    this.socket = null
  }
  init(server: any) {
    this.socket = new Server(server, {})
  }
  emitEvent(
    mid: number,
    type: 'HINT_UPDATED' | 'SCORE_UPDATED' | 'MATCH_ENDED',
    params: any
  ) {
    if (!this.socket) return
    this.socket.to(mid.toString()).emit(type, params)
  }
}

const SocketManager = new SocketManagerClass()

export default SocketManager
