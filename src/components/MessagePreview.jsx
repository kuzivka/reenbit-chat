import React from "react";
import "./MessagePreviewStyle.scss";
import format from "date-fns/format";

export default function MessagePreview(props) {
  const name = props.contact.firstName 
  const messagesQuantity = props.contact.chat.length - 1;
  const lastMessage = props.contact.chat[messagesQuantity];

  return (
    <div className="MessagePreview">
      <h3 className="MessagePreview-Contact">{name}</h3>
      <p className="MessagePreview-Message">
        {messagesQuantity === -1 ? "no messages yet" : lastMessage.text}
      </p>
      <span className="MessagePreview-Date">
        {messagesQuantity === -1
          ? ""
          : format(lastMessage.date, "MMM dd, yyyy")}
      </span>
    </div>
  );
}
