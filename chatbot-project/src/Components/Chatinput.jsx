import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "../App.css";

export function ChatInput({ chatMessage, setChatMessage }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    if (!inputText.trim()) return;
    const newChatMessages = [
      ...chatMessage,
      { message: inputText, sender: "user", id: Date.now().toString() },
    ];
    setChatMessage(newChatMessages);
    const loadingId = (Date.now() + 1).toString();
    setChatMessage([
      ...newChatMessages,
      { message: "...", sender: "ai", id: loadingId },
    ]);
    setInputText("");
    setTimeout(() => {
      const response = Chatbot.getResponse(inputText);
      setChatMessage((prev) => {
        const filtered = prev.filter((msg) => msg.id !== loadingId);
        return [
          ...filtered,
          { message: response, sender: "ai", id: Date.now().toString() },
        ];
      });
    }, 1500);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") sendMessage();
  }

  return (
    <div className="chat-input">
      <input
        placeholder="Type a request to Chatbot "
        onChange={saveInputText}
        value={inputText}
        className="input-field"
        onKeyDown={handleKeyDown}
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
