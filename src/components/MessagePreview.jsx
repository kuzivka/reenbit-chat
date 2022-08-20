import React from "react";
import "./MessagePreviewStyle.scss";
import format from "date-fns/format";

export default function MessagePreview(props) {
  const name = props.content.firstName + " " + props.content.lastName;
  const messagesQuantity = props.content.chat.length - 1;
  const lastMessage = props.content.chat[messagesQuantity];

  console.log();

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
