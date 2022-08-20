import ChatHeader from "../components/ChatHeader";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";

export default function ChatBoard(props) {
  const { selectedContact } = props;

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
      <ChatHeader selectedContact={selectedContact} />
      <div style={{ flexGrow: "1" }}>
        {selectedContact.chat.map((message) =>
          message.type === "sent" ? (
            <Message selectedContact={selectedContact} mine content={message} key={message.date}/>
          ) : (
            <Message selectedContact={selectedContact} content={message} key={message.date} />
          )
        )}
      </div>
      <MessageInput />
    </div>
  );
}
