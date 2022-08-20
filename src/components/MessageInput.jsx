import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MessageInputStyle.scss";

export default function MessageInput() {
  return (
    <div className="input-container">
      <textarea className="input-field" rows={1} placeholder="Type your message" ></textarea>
      <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
    </div>
  );
}
