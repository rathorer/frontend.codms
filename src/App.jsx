import { ChatContainer, MainContainer, Message, MessageInput, MessageList, TypingIndicator } from "@chatscope/chat-ui-kit-react"

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState } from "react";
import ResultTable from "./components/result-table";

function App() {
const API_KEY = "NOthing"
const [typing, setTyping] = useState(false);
const [messages, setMessages] = useState([
  {
    message: "Hello DMS Copilot here",
    sender: "DMS-Copilot",
  },
]);

const handleSend = async (message) => {
  const newMessage = {
    message: message,
    sender: "user",
    direction: "outgoing",
  };
  const newMessages = [...messages, newMessage];
  setMessages(newMessages);
  setTyping(true);

  try {
    const response = await processMessageToChatGPT(newMessages, API_KEY);
    if (response) {
      setMessages([
        ...newMessages,
        {
          message: response,
          sender: "DMS-Copilot",
        },
      ]);
    }
  } catch (error) {
    console.error("Error processing message:", error);
  } finally {
    setTyping(false);
  }
};

async function processMessageToChatGPT(chatMessages, apiKey) {
  const systemMessage = {
    role: "system",
    content: "Explain all concepts of Life",
  };

  const apiMessages = chatMessages.map((messageObject) => {
    return {
      role: messageObject.sender === "DMS-Copilot" ? "assistant" : "user",
      content: messageObject.message,
    };
  });

  const apiRequestBody = {
    model: "gpt-3.5-turbo",
    messages: [systemMessage, ...apiMessages],
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    const data = await response.json();
    if (data.choices && data.choices.length > 0) {
      
      return data.choices[0].message.content;
    } else {
      return <ResultTable>
      </ResultTable>
      //return "No response from DMS-Copilot.";
    }
  } catch (error) {
    console.error("Error in API request:", error);
    throw error;
  }
}


  return (
    <>
      <div className="app">
       <div style={{position:"relative",height:"98vh",width:"100%", overflow:"hidden"}}>
        <MainContainer>
          <ChatContainer>
          <MessageList 

          typingIndicator={typing? <TypingIndicator content="DMS-Copilot is searching"/>:null }
          >
          {console.log(messages)}
          {messages.map((msg,i)=>{
            return (typeof msg.message === "string" ? 
              <Message style={{height:"50px" , fontSize:"20px"}} key={i} model={msg}/>
              :
              <ResultTable>
              </ResultTable>
            )
          })}
          </MessageList>   
          <MessageInput  style={{height:"70px",fontSize:"25px"}} placeholder="Type your query here..." onSend={handleSend}/>         
          </ChatContainer>
        </MainContainer>
       </div>       
      </div>
       
    </>
  )
}

export default App
