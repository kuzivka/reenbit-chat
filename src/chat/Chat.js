import ContactBoard from "./ContactBoard";
import ChatBoard from "./ChatBoard";
import useChat from "../hooks/useChat";

export default function Chat() {
  const {
    selectedContact,
    setSelectedContact,
    setFilter,
    chatState,
    sortedContactList,
    setChatState,
    getChuckJoke,
    appendMessage,
  } = useChat();
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <ContactBoard
        setFilter={setFilter}
        chatState={chatState}
        setSelectedContact={setSelectedContact}
        sortedContactList={sortedContactList}
      />
      <ChatBoard
        getChuckJoke={getChuckJoke}
        setSelectedContact={setSelectedContact}
        selectedContact={selectedContact}
        setChatState={setChatState}
        chatState={chatState}
        appendMessage={appendMessage}
      />
    </div>
  );
}
