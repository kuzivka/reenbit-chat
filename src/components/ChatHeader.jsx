import Icon from "./Icon";
import './ChatHeaderStyle.scss';
import contacts from "../contacts";

export default function ChatHeader(){
    return(
        <div className="chat-header">
            <Icon active src={contacts[0].photo.AlexPhoto} />
            <h1 className="chat-header-title">Josephina</h1>
        </div>
    )
}
