import ChatHeader from "../components/ChatHeader";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";

export default function ChatBoard(props) {
  const {
    getChuckJoke,
    selectedContact,
    chatState,
    appendMessage,
  } = props;

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
      </div>
      <MessageInput
        selectedContact={selectedContact}
        getChuckJoke={getChuckJoke}
        appendMessage={appendMessage}
      />
    </div>
  );
}
