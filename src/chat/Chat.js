import ContactBoard from "./ContactBoard";
import ChatBoard from "./ChatBoard";
import useChat from "../hooks/useChat";

export default function Chat() {
  const { selectedContact, setSelectedContact, chatState, sortedContactList } = useChat();
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <ContactBoard
        chatState={chatState}
        setSelectedContact={setSelectedContact}
      />
      <ChatBoard
        selectedContact={selectedContact}
      />
    </div>
  );
}
