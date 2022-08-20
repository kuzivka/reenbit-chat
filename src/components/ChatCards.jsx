import React from "react";
import Icon from "./Icon";
import MessagePreview from "./MessagePreview";
import contacts from "../contacts";
import "./ChatCardsStyle.scss";

export default function ChatCards() {
  return (
    <div>
      <h2 className="list-header">Chats</h2>
      {contacts.map((contact) => (
        <div key={contact.name} className="chat-card">
          <Icon active src={contact.photo.AlexPhoto} />
          <MessagePreview content={contact} />
        </div>
      ))}
    </div>
  );
}
