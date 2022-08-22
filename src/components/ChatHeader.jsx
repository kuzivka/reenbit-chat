import './ChatHeaderStyle.scss';
import Icon from "./Icon";

export default function ChatHeader(props){

const {chatState, selectedContact} = props;

    return(
        <div className="chat-header">
            <Icon active src={Object.values(selectedContact.avatarUrl)} />
            <h1 className="chat-header-title">{selectedContact.firstName}</h1>
        </div>
    )
}
