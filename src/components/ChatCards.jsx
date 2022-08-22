import React from "react";
import "./ChatCardsStyle.scss";
import Icon from "./Icon";
import MessagePreview from "./MessagePreview";

export default function ChatCards(props) {
  const { chatState, setSelectedContact, sortedContactList } = props;
  return (
    <div className="chats">
      <h2 className="list-header">Chats</h2>
      {sortedContactList.map((contact) => (
          <div
            key={contact.contactId}
            className="chat-card"
            onClick={() => {
              setSelectedContact(contact.contactId);
            }}
          >
            <Icon active src={Object.values(contact.avatarUrl)} />
            <MessagePreview contact={contact} />
          </div>
        ))}
    </div>
  );
}
