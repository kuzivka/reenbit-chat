import { useEffect, useState, useMemo, useCallback } from "react";
import contacts from "./contacts";
import { chuckJoke } from "../api/chuckJoke";

const STATE_KEY = "state";

export default function useChat() {
  const [chatState, setChatState] = useState(() => {
    const hasPreviousState = localStorage.hasOwnProperty(STATE_KEY);
    if (hasPreviousState) {
      return JSON.parse(localStorage.getItem(STATE_KEY));
    }
    return contacts;
  });

  const [selectedContact, setSelectedContact] = useState(
    chatState[0].contactId
  );

  const [filterState, setFilter] = useState("");

  useEffect(() => {
    return () => {
      localStorage.setItem(STATE_KEY, JSON.stringify(chatState));
    };
  }, [chatState]);

  const selectedContactState = useMemo(
    () => chatState.find((contact) => contact.contactId === selectedContact),
    [chatState, selectedContact]
  );

  const appendMessage = useCallback(
    (message) => {
      const newState = chatState.map((contact) => {
        if (contact.contactId === selectedContact) {
          const newContact = Object.assign({}, contact);
          newContact.chat.push(message);
          return newContact;
        }
        return contact;
      });
      setChatState(newState);
    },
    [chatState, selectedContact]
  );

  const getChuckJoke = useCallback(() => {
    setTimeout(async () => {
      const joke = await chuckJoke();
      appendMessage(joke);
    }, 15000);
  }, [appendMessage]);

  const sortedContactList = useMemo(() => {
    return chatState
      .filter(({ firstName, lastName }) => {
        return (
          firstName.toLowerCase().includes(filterState.toLowerCase()) ||
          lastName.toLowerCase().includes(filterState.toLowerCase)
        );
      })
      .sort((a, b) =>
        a.chat[a.chat.length - 1]?.date < b.chat[b.chat.length - 1]?.date
          ? 1
          : -1
      );
  }, [chatState, filterState]);

  return {
    filterState,
    setFilter,
    setChatState,
    getChuckJoke,
    chatState,
    sortedContactList,
    selectedContact: selectedContactState,
    setSelectedContact,
    appendMessage,
  };
}
