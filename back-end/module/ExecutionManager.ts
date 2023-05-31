import fs from 'fs'
import { exec } from 'child_process'
import { getRandomString } from '../util/random'

class ExecutionManagerClass {
  constructor() {
    // 생성자
  }

  public writeStringToFile = (fileName: string, code: string) => {
    //code를 fileName이라는 파일에 작성
    fs.writeFileSync(fileName, code)
    console.log(`Successfully wrote content to ${fileName}`) //확인용 출력
  }

  public run = async (code: string, testcases: string[][]) => {
    let fileName = 'public/' + getRandomString() + '.js'
    let success = 0
    this.writeStringToFile(fileName, code)
    for (let i = 0; i < testcases.length; i++) {
      const out = await this.runCode(fileName, testcases[i][0])
      let correct_check = await this.evaluate(out, testcases[i][1])
      if (correct_check === 1) {
        success++
      }
    }
    return (success * 100) / testcases.length
  }

  public runCode = (fileName: string, args: string): Promise<string> => {
    //js 파일 실행 메소드
    //const formattedArgs = args.map(arg => `"${arg}"`).join(' '); //args format
    const command = `node ${fileName} ${args}` //명령어

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        //10초 이상 실행되면 error를 보냄.
        reject(new Error('Execution timed out.'))
      }, 10000)
      exec(command, (error, stdout, stderr) => {
        clearTimeout(timeout)
        if (error) {
          reject(error)
          return
        }
        if (stderr) {
          reject(new Error(stderr))
          return
        }
        resolve(stdout) //문제없을 경우 stdout을 반환
      })
    })
  }

  public evaluate = async (userOutput: string, answer: string) => {
    //평가 함수
    if (userOutput === answer) {
      return 1
    } else {
      return -1
    }
  }

  //public getScore = () =>{
  //    return ((this.correct*100) / this.evaluate_trial)
  //}
}

const ExecutionManager = new ExecutionManagerClass()

export default ExecutionManager
