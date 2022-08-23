import { format } from "date-fns";
import Icon from "./Icon";
import "./MessageStyle.scss";

export default function Message(props) {
   const {selectedContact} = props;

  const date = props.content.date;
  let photo = Object.values(selectedContact.avatarUrl);
  const message = props.content.text;

  return (
    <div className={props.mine ? "message message--mine" : "message"}>
      <Icon src={photo} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className={
            props.mine
              ? "message-string--mine message-string"
              : "message-string"
          }
        >
          <p className="message-string__text">{message} </p>
        </div>
        <span className="message-date">{format(date, "Pp")}</span>
      </div>
    </div>
  );
}
