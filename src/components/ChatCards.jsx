import React from "react";
import "./ChatCardsStyle.scss";
import Icon from "./Icon";
import MessagePreview from "./MessagePreview";

export default function ChatCards(props) {
  const { chatState, setSelectedContact } = props;

  return (
    <div className="chats">
      <h2 className="list-header">Chats</h2>
      {
        chatState.map((contact) => (
          <div
            key={contact.contactId}
            className="chat-card"
            onClick={() => {
              setSelectedContact(contact);
            }}
          >
            <Icon src={Object.values(contact.avatarUrl)} />
            <MessagePreview content={contact} />
          </div>
        ))}
    </div>
  );
}
