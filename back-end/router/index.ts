import { Router } from 'express'
import auth from './auth'
import match from './match'
import user from './user'
import { exec } from 'child_process'
import ExecutionManager from '../module/ExecutionManager'

const router = Router()



router.use('/auth', auth)
router.use('/match', match)
router.use('/user', user)
 /*
 * health check
 */
router.get('/', async (req, res) => {
  var ex = new ExecutionManager(1,'while(1){}')
  ex.writeStringToFile('input.js',ex.getCode())
  var ex2 :string[] = []
  var userOut = await ex.runJavaScript('input.js',ex2).catch((error)=>{console.log("Timeout Error!")})
  console.log(userOut)
  
  res.status(200).send("OK")

})

export default router
