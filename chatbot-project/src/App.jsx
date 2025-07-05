import { useState } from "react";
import "./App.css";
import { ChatInput } from "./Components/Chatinput";
import ChatMessages from "./Components/Chatmessages";

function App() {
  const [chatMessage, setChatMessage] = useState([
    { message: "Hello chatbot", sender: "user", id: "1" },
    { message: "How are you?", sender: "ai", id: "2" },
    { message: "can you get me today's date", sender: "user", id: "3" },
    { message: "1st july", sender: "ai", id: "4" },
  ]);
  return (
    <div className="js-container">
      <div className="chat-header">Chatbot</div>
      <ChatMessages chatMessage={chatMessage} />
      <div className="chat-input-area">
        <ChatInput chatMessage={chatMessage} setChatMessage={setChatMessage} />
      </div>
    </div>
  );
}

export default App;
