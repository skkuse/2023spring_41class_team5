const { Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
,})
const openai = new OpenAIApi(configuration);

class ChatGPTManager {
    async  requestHint(problem: any, type: any ,code: any) {
        let comment = '';
        if (type === 0) {
          comment = "Find Code Compile Errors";
        } else if (type === 1) {
          comment = "Find Next Code";
        } else if (type === 2) {
          comment = "Generate Test Cases";
        }
      
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: `It's about "${problem}" \n ${code} \n ${comment}` }
          ],
          temperature: 1,
        });
        const hint = completion.data.choices[0].message.content.trim()
        const prompt = comment
        return {hint,prompt};
      }
      
      async  requestFeedback(problem: any, code: any, isVictory: any) {
        let comment = '';
        if (isVictory) {
          comment = "Please improve this code";
        } else {
          comment = "Please complete the code";
        }
      
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: `It's about "${problem}" \n ${code} \n ${comment}` }
          ],
          temperature: 1,
        });
        const result = completion.data.choices[0].message.content.trim()
        const prompt = comment
        return {result,prompt};
      }
}

const ChatGPTModule = new ChatGPTManager()

export default ChatGPTModule