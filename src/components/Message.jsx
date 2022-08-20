import "./MessageStyle.scss";
import { format } from "date-fns";
import Icon from "./Icon";
import AlexPhoto from "../images/alex.jpg";

export default function MessageString(props) {
  const date = format(new Date(2022, 1, 24, 5, 40), "Pp");
  return (
    <div className={props.mine ? "message message--mine" : "message"}>
      <Icon src={AlexPhoto} />
      <div style={{display:'flex', flexDirection:'column'}}>
      <div
        className={
          props.mine ? "message-string--mine message-string" : "message-string"
        }
      >
        <p className="message-string__text">
          Lorem ipsum dolor sit amet consecte
        </p>
      </div>
      <span className="message-date">{date}</span></div>
    </div>
  );
}
