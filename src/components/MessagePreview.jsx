import React from "react";
import { format } from "date-fns";
import "./MessagePreviewStyle.scss";

const content = {
  name: "Alex",
  message: "Hello, I am Alex",
  date: format(new Date(2022, 1, 24), "MMM dd, yyyy"),
};

export default function MessagePreview() {
  return (
    <div className="MessagePreview">
      <h3 className="MessagePreview-Contact">{content.name}</h3>
      <p className="MessagePreview-Message">{content.message}</p>
      <span className="MessagePreview-Date">{content.date}</span>
    </div>
  );
}
