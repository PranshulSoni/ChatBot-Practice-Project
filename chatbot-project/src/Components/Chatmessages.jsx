import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";

function ChatMessages({ chatMessage }) {
  const chatMessageRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessageRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessage]);
  return (
    <div className="chat-messages-area" ref={chatMessageRef}>
      {chatMessage.map((msg) => (
        <ChatMessage message={msg.message} sender={msg.sender} key={msg.id} />
      ))}
    </div>
  );
}
export default ChatMessages;
