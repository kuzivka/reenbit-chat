import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MessageInputStyle.scss";
import toast, { Toaster } from "react-hot-toast";

export default function MessageInput(props) {
  const { appendMessage, getChuckJoke, setMessage, message } = props;

  const notify = () => toast(`You got a new message `);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handlePress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };
  const sendMessage = () => {
    if(message!=='' && message!==" "){
    appendMessage({ text: message, date: Date.now(), type: "sent" });
    setMessage("");
    getChuckJoke(notify);}
  };

  return (
    <div className="input-container">
      <textarea
        minLength={1}
        value={message}
        className="input-field"
        rows={1}
        placeholder="Type your message"
        onChange={handleChange}
        onKeyPress={handlePress}
      ></textarea>
      <FontAwesomeIcon
        onKeyPress={handlePress}
        icon={faPaperPlane}
        onClick={sendMessage}
        className="send-icon"
      />
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontFamily: "'Open Sans', sans-serif",
            padding: "16px",
            border: "#006198 solid 2px",
            backgroundColor: "white",
            color: "#006198",
          },
        }}
      />
    </div>
  );
}
