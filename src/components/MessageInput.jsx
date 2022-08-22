import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./MessageInputStyle.scss";

export default function MessageInput(props) {
  const { appendMessage, getChuckJoke, selectedContact } = props;

  const [message, setMessage] = useState();

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    appendMessage({text: message, date: Date.now(), type: "sent" });
    setMessage('');
    getChuckJoke(selectedContact);
  };

  return (
    <div className="input-container">
      <textarea
      value={message}
        className="input-field"
        rows={1}
        placeholder="Type your message"
        onChange={handleChange}
      ></textarea>
      <FontAwesomeIcon
        icon={faPaperPlane}
        onClick={sendMessage}
        className="send-icon"
      />
    </div>
  );
}
