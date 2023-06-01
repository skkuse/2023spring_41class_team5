const QUEUE_TIMEOUT = 3 * 1000
const HEALTH_CHECK_TIMEOUT = 3 * 60 * 1000
const MATCH_TIMEOUT = 30 * 60 * 1000

class MatchManagerClass {
  private queue: { id: number; timer: NodeJS.Timer }[]
  private match: {
    id: number
    uid1: number
    uid2: number
    timer1: NodeJS.Timer
    timer2: NodeJS.Timer
    endTimer: NodeJS.Timer
  }[]
  constructor() {
    this.queue = []
    this.match = []
  }
  findQueue() {
    if (!this.queue.length) return null
    else return this.queue[0].id
  }
  updateTimer(id: number) {
    const target = this.queue.find((i) => i.id === id)
    if (!target) return
    clearTimeout(target.timer)
    target.timer = setTimeout(() => {
      this.deleteQueue(id)
    }, QUEUE_TIMEOUT)
  }
  insertQueue(id: number) {
    this.queue.push({
      id: id,
      timer: setTimeout(() => {
        this.deleteQueue(id)
      }, QUEUE_TIMEOUT),
    })
  }
  deleteQueue(id: number) {
    const idx = this.queue.findIndex((i) => i.id === id)
    if (idx === -1) return
    clearTimeout(this.queue[idx].timer)
    this.queue.splice(idx, 1)
  }
  insertMatch(
    id: number,
    uid1: number,
    uid2: number,
    callback1: () => void,
    callback2: () => void,
    endCallback: () => void
  ) {
    this.match.push({
      id,
      uid1,
      uid2,
      timer1: setTimeout(() => {
        callback1()
        this.deleteMatch(id)
      }, HEALTH_CHECK_TIMEOUT),
      timer2: setTimeout(() => {
        callback2()
        this.deleteMatch(id)
      }, HEALTH_CHECK_TIMEOUT),
      endTimer: setTimeout(() => {
        endCallback()
        this.deleteMatch(id)
      }, MATCH_TIMEOUT),
    })
  }
  deleteMatch(id: number) {
    const idx = this.match.findIndex((i) => i.id === id)
    if (idx === -1) return
    clearTimeout(this.match[idx].timer1)
    clearTimeout(this.match[idx].timer2)
    clearTimeout(this.match[idx].endTimer)
    this.match.splice(idx, 1)
  }
  healthCheck(mid: number, uid: number, callback: () => void) {
    const target = this.match.find((i) => i.id === mid)
    if (!target) return
    if (target.uid1 === uid) {
      clearTimeout(target.timer1)
      target.timer1 = setTimeout(() => {
        callback()
        this.deleteMatch(mid)
      }, HEALTH_CHECK_TIMEOUT)
    } else if (target.uid2 === uid) {
      clearTimeout(target.timer2)
      target.timer2 = setTimeout(() => {
        callback()
        this.deleteMatch(mid)
      }, HEALTH_CHECK_TIMEOUT)
    } else {
      console.error('health check uid not matching')
    }
  }
}

const MatchManager = new MatchManagerClass()

export default MatchManager
