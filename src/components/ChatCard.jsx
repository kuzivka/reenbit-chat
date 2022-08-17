import React from "react";
import Icon from "./Icon";
import MessagePreview from "./MessagePreview";

export default function ChatCard() {
  return (
    <div
      className="chat-card"
      style={{
        padding: "10px",
        background: "grey",
        maxWidth: "600px",
        minWidth: "350px",
        width: "fit-content",
        display: "flex",
        flexGrow: "1",
        alignItems: "center",
      }}
    >
      <Icon active />
      <MessagePreview />
    </div>
  );
}
