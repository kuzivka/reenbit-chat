import { useState, useMemo } from "react";
import contacts from "./contacts";

export default function useChat() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const [chatState, setChatState] = useState(contacts);

  const sortedContactList = useMemo(() => {
    chatState.sort((a, b) =>
    a.chat[a.chat.length - 1].date < b.chat[b.chat.length - 1].date
      ? 1
      : -1
  )  }, [chatState]);

  return {
    chatState,
    sortedContactList,
    selectedContact,
    setSelectedContact,
    // appendMessage,
  };
}
