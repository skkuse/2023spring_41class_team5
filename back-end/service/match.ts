const createHint = (code: string) => {}
const createFeedback = (code: string) => {}
const executeCode = (code: string) => {}

const getMatchHistory = (uid: number) => {
  // DB action: get user history by uid
  const history = [
    {
      mid: 0,
      // ...
    },
  ]
  return history
}
const MatchService = {
  getMatchHistory,
}

export default MatchService
