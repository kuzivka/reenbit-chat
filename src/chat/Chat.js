import ContactBoard from "./ContactBoard";
import ChatBoard from "./ChatBoard";
import useChat from "../hooks/useChat";

export default function Chat() {
  const {
    message,
    setMessage,
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
        setMessage={setMessage}
        setFilter={setFilter}
        chatState={chatState}
        setSelectedContact={setSelectedContact}
        sortedContactList={sortedContactList}
      />
      <ChatBoard
        message={message}
        setMessage={setMessage}
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
