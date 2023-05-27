require('dotenv').config();
const { Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
,})
const openai = new OpenAIApi(configuration);

class GPTManager {
    async  generateHint(code: any, hintId: number) {
        let comment = '';
        if (hintId === 0) {
          comment = "Find Code Compile Errors";
        } else if (hintId === 1) {
          comment = "Find Next Code";
        } else if (hintId === 2) {
          comment = "Generate Test Cases";
        }
      
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: `${code} ${comment}` }
          ],
          temperature: 1,
        });
      
        return completion.data.choices[0].message.content.trim();
      }
      
      async  analyzeCode(code: any, complete: any) {
        let comment = '';
        if (complete) {
          comment = "Please improve this code";
        } else {
          comment = "Please complete the code";
        }
      
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: `${code} \n ${comment}` }
          ],
          temperature: 1,
        });
      
        return completion.data.choices[0].message.content.trim();
      }
}
