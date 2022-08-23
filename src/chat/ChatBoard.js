import { useRef, useEffect } from "react";
import ChatHeader from "../components/ChatHeader";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";

export default function ChatBoard(props) {
  const bottom = useRef();

  const {
    message,
    setMessage,
    getChuckJoke,
    selectedContact,
    chatState,
    appendMessage,
  } = props;

  const scrollToBottom = () =>
    bottom.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    scrollToBottom();
  }, [chatState]);

  return (
    <div
      style={{
        borderLeft: "1px solid #e1e1e1",
        boxSizing: "content-box",
        flexGrow: "1",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ChatHeader chatState={chatState} selectedContact={selectedContact} />
      <div style={{ flexGrow: "1", overflowY: "scroll" }}>
        {selectedContact.chat.map((message) => (
          <Message
            selectedContact={selectedContact}
            chatState={chatState}
            mine={message.type === "sent"}
            content={message}
            key={message.date}
          />
        ))}
        <div ref={bottom} />
      </div>
      <MessageInput
        setMessage={setMessage}
        message={message}
        selectedContact={selectedContact}
        getChuckJoke={getChuckJoke}
        appendMessage={appendMessage}
      />
    </div>
  );
}
