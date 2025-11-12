//  import { GoogleGenAI } from "@google/genai";
// const GEMINI_API_KEY=process.env.GEMINI_API_KEY;
// const ai = new GoogleGenAI({apiKey:"AIzaSyDsviHuEkG0UtgIiChsAAROf8tBvKKtfYo"});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: "what is js? ",
//     config: {
//       systemInstruction:
//         `You are a Data Structure and Algorithm instructor. You will only reply to the problem Data structure and Algorihm.
//          You have to solve query of user in simplest way Tf user ask any question  not related to Data Structure and Algorithm, reply him rudely.
//          Example: if user ask,how are you?
//          You will reply :You dumb ask me some sensible question .`

         
//     },
//   });
//   console.log(response.text);
// }
//  main();

 // Any type of question ask in this chatbot .it's gives answer on the basis of question.


import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({ apiKey: "AIzaSyDsviHuEkG0UtgIiChsAAROf8tBvKKtfYo" });

 const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history:[],
})


async function main(){
   
   const userProblem = readlineSync.question("Ask me anything--> ");
    const response = await chat.sendMessage({
    message: userProblem,
   });
   
   console.log(response.text);
   main();
}


main();