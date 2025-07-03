import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";

export function ChatMessage({ message, sender }) {
  return (
    <div className={`chat-message-${sender}`}>
      {sender === "ai" && <img src={RobotProfileImage} width="38px" />}
      <div className="message-content">{message}</div>
      {sender === "user" && <img src={UserProfileImage} width="38px" />}
    </div>
  );
}
