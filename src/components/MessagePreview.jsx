import React from "react";
import "./MessagePreviewStyle.scss";

export default function MessagePreview(props) {
    console.log(props)
  return (
    <div className="MessagePreview">
      <h3 className="MessagePreview-Contact">{props.content.name}</h3>
      <p className="MessagePreview-Message">{props.content.message}</p>
      <span className="MessagePreview-Date">{props.content.date}</span>
    </div>
  );
}
