import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import fs from 'fs';
import { exec } from 'child_process'

class ExecutionManager {
    /*examples to use git
    - User가 작성한 코드를 어떤 형태로 받을 것인가? -> 텍스트
    - DB에서 testcase를 가져와야 함 -> 일단 하드코딩
    - 컴파일 및 실행은?
    - 실행하고 10초 내로 완료되어야 함.
    */
    private id = 0 //문제 번호
    private output : string // stdout
    private evaluate_trial : number //채점을 진행한 횟수
    private correct : number //맞은 횟수

    constructor(id : number){ // 생성자
        this.id = id
        this.output = ''
        this.evaluate_trial = 0
        this.correct = 0
    }

    public writeStringToFile = (fileName: string, code: string) => { //code를 fileName이라는 파일에 작성
        fs.writeFileSync(fileName, code);
        console.log(`Successfully wrote content to ${fileName}`);//확인용 출력
    };
    
    public runJavaScript = (fileName: string, args: string[]): Promise<string> => { //js 파일 실행 메소드
        const formattedArgs = args.map(arg => `"${arg}"`).join(' '); //args format
        const command = `node ${fileName} ${formattedArgs}`; //명령어

        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => { //10초 이상 실행되면 error를 보냄. 
                reject(new Error('Execution timed out.'));
            }, 10000);
          exec(command, (error, stdout, stderr) => {
            clearTimeout(timeout)
            if (error) {
              reject(error);
              return;
            }
            if (stderr) {
              reject(new Error(stderr));
              return;
            }
            resolve(stdout);//문제없을 경우 stdout을 반환
          });
        });
    };

    public evaluate = (userOutput : string, answer : string)=>{//평가 함수
        this.evaluate_trial ++
        if(userOutput == answer){
            this.correct++
            return 1
        }
        else{ 
            return -1
        }
    }

    public getScore = () =>{
        return ((this.correct*100) / this.evaluate_trial)
    }
}

export default ExecutionManager
